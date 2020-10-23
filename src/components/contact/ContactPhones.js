import { withTranslation } from 'react-i18next';
import _EmailPhonesParentClass from '../common/_EmailPhonesParentClass';

class ContactPhones extends _EmailPhonesParentClass {
  ENTITY_NAME = 'phones';
  FIELD_NAME = 'phone';
  WITH_COPY_ROW = false;
  PLACEHOLDER_TRANSLATION = 'general-forms/phone';
}

export default withTranslation()(ContactPhones);
