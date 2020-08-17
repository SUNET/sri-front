import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';

const mutation = graphql`
  mutation ConvertHostMutation($input: ConvertHostInput!) {
    convert_host(input: $input) {
      success
    }
  }
`;

function ConvertHostMutation(data, form) {
  const variables = {
    input: {
      id: data.id,
      slug: data.slug,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      const { success } = response.convert_host;
      if (!success) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return ['error'];
      }

      form.props.notify(i18n.t('notify.network/convert-host-success'), 'success');
      if (form.props.history) {
        // form.props.history.push(`/network/${data.slug}s`);
        form.props.history.push('/network/hosts');
      }
    },
    onError: (errors) => console.error(errors),
    configs: [
      {
        type: 'RANGE_ADD',
        parentName: ROOT_ID,
        parentID: ROOT_ID,
      },
    ],
  });
}

export default ConvertHostMutation;
