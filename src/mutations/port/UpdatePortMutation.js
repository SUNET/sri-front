import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdatePortMutation($input: UpdatePortInput!) {
    update_port(input: $input) {
      errors {
        field
        messages
      }
      port {
        id
        name
        description
        port_type {
          name
          value
        }
      }
    }
  }
`;

function generateSubInputs(entity, fieldName) {
  console.log('entity: ', entity);
  if (entity[fieldName]) {
    console.log('entity[fieldName]: ', entity[fieldName]);
    return entity[fieldName].map((element) => ({
      type: element.__typename,
      id: element.id,
    }));
  }
  return [];
}

export default function UpdatePortMutation(port, form) {
  const parents = generateSubInputs(port, 'parents');
  console.log('parents: ', parents);
  const variables = {
    input: {
      id: port.id,
      name: port.name,
      description: port.description,
      port_type: port.port_type,
    },
  };
  // commitMutation(environment, {
  //   mutation,
  //   variables,
  //   onCompleted: (response, errors) => {
  //     if (response.update_port.errors) {
  //       form.props.notify(i18n.t('notify.error'), 'error');
  //       return response.update_port.updated.errors;
  //     }
  //     form.props.reset();
  //     form.refetch();
  //     form.props.notify(i18n.t('notify.changes-saved'), 'success');
  //   },
  //   updater: (store) => {},
  //   onError: (err) => console.error(err),
  // });
}
