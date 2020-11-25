import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

const mutation = graphql`
  mutation CreateCustomerMutation($input: CreateCustomerInput!) {
    create_customer(input: $input) {
      errors {
        field
        messages
      }
      customer {
        id
        name
        description
        url
      }
    }
  }
`;

function CreateCustomerMutation(customer, form) {
  const variables = {
    input: {
      name: customer.name,
      description: customer.description,
      url: customer.url,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.create_customer.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.create_customer.errors;
      } else {
        const customer_id = response.create_customer.customer.id;
        if (customer.comment) {
          CreateCommentMutation(customer_id, customer.comment);
        }
        if (form.props.history) {
          form.props.history.push('/network/customers/' + customer_id);
        } else {
          form.props.createdEntity('Customer', customer_id);
          form.props.hideModalForm();
        }
        form.props.notify(i18n.t('entity-notify-create/customers'), 'success');
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

export default CreateCustomerMutation;
