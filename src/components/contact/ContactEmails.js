import { withTranslation } from "react-i18next";
import _EmailPhonesParentClass from "../common/_EmailPhonesParentClass";

class ContactEmails extends _EmailPhonesParentClass {
    ENTITY_NAME = "emails";
    FIELD_NAME = "email";
    WITH_COPY_ROW = true;
    PLACEHOLDER_TRANSLATION = "general-forms/email";
}

export default withTranslation()(ContactEmails);
