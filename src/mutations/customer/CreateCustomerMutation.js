import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';
import { NEW, REMOVE } from '../../utils/constants';
import MUTATION_FIELD_OWNS_BY_TYPENAME from './ConfigMutationsOwns';
import { formatDependenciesToUpdate, formatDependenciesToRemove, generateSubInputs } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateCustomerMutation($input: CompositeCustomerMutationInput!) {
    composite_customer(input: $input) {
      created {
        errors {
          field
          messages
        }
        customer {
          ...CustomerUpdateForm_customer
        }
      }
    }
  }
`;

function CreateCustomerMutation(customer, form) {
  const ownsToAdd = formatDependenciesToUpdate(
    MUTATION_FIELD_OWNS_BY_TYPENAME,
    customer.owns ? customer.owns.filter((dep) => dep.origin === NEW) : [],
  );

  const ownsToRemove = formatDependenciesToRemove(
    MUTATION_FIELD_OWNS_BY_TYPENAME,
    customer.owns ? customer.owns.filter((dep) => dep.status === REMOVE) : [],
  );

  const servicesSubInputs = generateSubInputs(
    customer.uses && customer.uses.length > 0 ? customer.uses : [],
    'service_type',
    'operational_state',
  );

  const variables = {
    input: {
      create_input: {
        name: customer.name,
        description: customer.description,
        url: customer.url,
      },
      ...ownsToAdd,
      ...ownsToRemove,
      update_uses_service: servicesSubInputs.toUpdate.map((s) => ({
        ...s,
        ...{ operational_state: s.operational_state.value },
      })),
      deleted_uses_service: servicesSubInputs.toDelete,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_customer.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_customer.created.errors;
      }
      const entityId = response.composite_customer.created.customer.__id;
      if (customer.comment) {
        CreateCommentMutation(entityId, customer.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/customers'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/customers/${entityId}`);
      } else {
        form.props.createdEntity('Customer', entityId);
        form.props.hideModalForm();
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
