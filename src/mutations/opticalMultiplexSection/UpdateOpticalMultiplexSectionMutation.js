import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

// for dependencies
import {
  getDependenciesToForOMSAdd,
  getDependenciesToForOMSUnlink,
  getDependenciesToForOMSDelete,
} from '../ConfigDependenciesMutationForOMS';

// for dependents
import {
  getDependenciesToAdd,
  getDependenciesToUnlink,
  getDependenciesToDelete,
} from '../GeneralConfigMutationsFields';

const mutation = graphql`
  mutation UpdateOpticalMultiplexSectionMutation($input: CompositeOpticalMultiplexSectionMutationInput!) {
    composite_opticalMultiplexSection(input: $input) {
      updated {
        errors {
          field
          messages
        }
        opticalMultiplexSection {
          id
          name
          description
          operational_state {
            name
            value
          }
          provider {
            id
            name
          }
          dependencies {
            id
            name
            __typename
            relation_id
            ... on Port {
              type: port_type {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default function UpdateOpticalMultiplexSectionMutation(opticalMultiplexSection, form) {
  const variables = {
    input: {
      update_input: {
        id: opticalMultiplexSection.id,
        name: opticalMultiplexSection.name,
        description: opticalMultiplexSection.description,
        operational_state: opticalMultiplexSection.operational_state,
        relationship_provider: opticalMultiplexSection.provider_id,
      },
      unlink_subinputs: [
        ...getDependenciesToForOMSUnlink(opticalMultiplexSection.dependencies),
        ...getDependenciesToUnlink(opticalMultiplexSection.dependents),
      ],
      // dependencies
      ...getDependenciesToForOMSAdd(opticalMultiplexSection.dependencies),
      ...getDependenciesToForOMSDelete(opticalMultiplexSection.dependencies),
      // dependents
      ...getDependenciesToAdd(opticalMultiplexSection.dependents),
      ...getDependenciesToDelete(opticalMultiplexSection.dependents),
    },
  };
  console.log(JSON.stringify(variables));
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_opticalMultiplexSection.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_opticalMultiplexSection.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity(
          'OpticalMultiplexSection',
          response.composite_opticalMultiplexSection.updated.opticalMultiplexSection.id,
        );
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
