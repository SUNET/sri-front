import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import FieldInput from "../FieldInput";
import { Field, change } from "redux-form";
import uuidv4 from "uuid/v4";

import Dropdown from "../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

class FieldArrayMembersGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    UNSAFE_componentWillMount() {
        const initialState = this.props.fields.map((member, index) => {
            return { is_editing: false, is_save: true };
        });
        this.setState(initialState);
    }

    pushField = (event) => {
        const index = this.props.fields.length;
        if (this.props.fields.length < 5) {
            this.props.fields.push({ key: uuidv4() });
            this.setState({ ...this.state, [index]: { is_editing: true, is_save: false } });
        }
    };

    saveRow = (index) => {
        this.props.dispatch(change("updateGroup", `members[${index}].status`, "saved"));
        if(this.props.meta.valid) {
            this.setState({ [index]: { is_editing: false, is_save: true } });
        }
    }

    removeRow = (index) => {
        this.props.dispatch(change("updateGroup", `members[${index}].delete`, this.props.fields.getAll()[index].handle_id));
        this.props.fields.remove(index);
    }

    render() {
        const { fields, meta, t, editable } = this.props;
        return (
            <>
                {fields.map((member, index) => (
                    <div key={index}>
                        {editable && this.state[index].is_editing ? (
                            <>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            component={FieldInput}
                                            placeholder="Full Name"
                                            name={`${member}.name`}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Dropdown
                                        className="auto"
                                        emptyLabel="Select organization"
                                        model="organization"
                                        onChange={(e) => {}}
                                        name={`${member}.organization`}
                                    />
                                </div>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            component={FieldInput}
                                            placeholder="Email"
                                            name={`${member}.email`}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            component={FieldInput}
                                            placeholder="Phone"
                                            name={`${member}.phone`}
                                        />
                                    </Form.Group>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>{fields.getAll()[index].name}</div>
                                <div>{fields.getAll()[index].organization_label}</div>
                                <div>{fields.getAll()[index].email}</div>
                                <div>{fields.getAll()[index].phone}</div>
                            </>
                        )}
                        <div>
                            {editable && (
                                <>
                                    <FontAwesomeIcon icon={faTrash} onClick={() => this.removeRow(index, )} />
                                    {this.state[index].is_save && (
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            onClick={() => {
                                                this.setState({ [index]: { is_editing: true, is_save: false } });
                                            }}
                                        />
                                    )}
                                    {this.state[index].is_editing && (
                                        <span
                                            className="ok-check"
                                            onClick={() => this.saveRow(index)}
                                        >
                                            {t("actions.save")}
                                        </span>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                ))}
                {meta.error && meta.dirty && <div>{meta.error}</div>}
                {editable && (
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="col-actions">
                            <button type="button" className="btn link mt-2" onClick={(e) => this.pushField(e)}>
                                {t("actions.add-new")}
                            </button>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default withTranslation()(FieldArrayMembersGroup);
