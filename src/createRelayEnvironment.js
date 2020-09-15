import { Environment, Network, RecordSource, Store, QueryResponseCache } from 'relay-runtime';
import { getCsrfToken } from './sagas/common';
import CONFIG from './config';

// CACHING
const oneMinute = 1; // the cache is deactivated because the filters stop working, because when you change the filters the variables are kept.
const cache = new QueryResponseCache({ size: 100, ttl: oneMinute });

const { API_HOST } = CONFIG;

async function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const queryId = operation.name;
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const cachedData = cache.get(queryId, variables);
  const forceLoad = cacheConfig && cacheConfig.force;

  if (isQuery && !forceLoad && cachedData) {
    return cachedData;
  }

  if (forceLoad) {
    // clear() means to reset all the cache, not only the entry addressed by specific queryId.
    cache.clear();
  }

  return fetch(`${API_HOST}/graphql/`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': await getCsrfToken(),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then((response) => {
      if (response.redirected) {
        return window.location.replace(`${API_HOST}/login/?next=/`);
      }
      return response.json();
    })
    .then((json) => {
      let jsonResult;
      if (json.errors && json.errors.length > 0) {
        jsonResult = { data: '' };
      } else {
        jsonResult = json;
      }
      // Update cache on queries
      if (isQuery && jsonResult) {
        cache.set(queryId, variables, jsonResult);
      }
      // Clear cache on mutations
      if (isMutation) {
        cache.clear();
      }

      return jsonResult;
    })
    .catch((err) => {
      window.location.replace(`${API_HOST}/login/?next=/`);
    });
}

const RelayEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default RelayEnvironment;
