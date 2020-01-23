import React, { Component } from "react";
import { change, touch } from "redux-form";

import "../style/FieldArrayCheckbox.scss";

const Checkbox = ({ id, info, handleFavourite }) => <li onClick={() => handleFavourite(id)}>{info.label}</li>;

const CheckedList = ({ checkedInputs, data, uncheckInput }) => {
    const checkedList = checkedInputs.map((input_id, i) => {
        return <Checkbox id={i} key={i} info={data[input_id]} handleFavourite={(id) => uncheckInput(id, input_id)} />;
    });
    return (
        checkedList.length > 0 && (
            <div className="checked-inputs">
                <ul>{checkedList}</ul>
            </div>
        )
    );
};

const InputList = ({ data, checkedInputs, checkInput }) => {
    // Gather list of names
    const names = data
        .filter((input, i) => {
            return checkedInputs.indexOf(input.id) === -1;
        })
        .map((input, i) => {
            // only display names that match current input string
            return <Checkbox id={input.id} key={i} info={input} handleFavourite={(id) => checkInput(id)} />;
        });

    // the component's output
    return (
        <div className="InputList">
            <ul>{names}</ul>
        </div>
    );
};

class FiledArrayCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedInputs: []
        };
    }

    componentDidMount() {
        const initialValues = [];
        if (this.props.initialValues) {
            Object.keys(this.props.initialValues).forEach((input_key, index) => {
                const input = this.props.initialValues[input_key];
                if (input === true) {
                    return initialValues.push(index);
                }
            });
        }
        this.setState({
            checkedInputs: initialValues
        });
    }

    // add clicked name ID to the checkedInputs array
    checkInput(id) {
        const newSet = this.state.checkedInputs.concat([id]);
        this.props.dispatch(change(this.props.form, this.props.data[id].name, true));
        this.props.dispatch(touch(this.props.form, "affiliation"));
        this.setState({
            checkedInputs: newSet
        });
    }

    // remove ID from the checkedInputs array
    uncheckInput(id, input_id) {
        const { checkedInputs } = this.state;
        const newList = [...checkedInputs.slice(0, id), ...checkedInputs.slice(id + 1)];
        this.props.dispatch(change(this.props.form, this.props.data[input_id].name, false));

        this.setState({
            checkedInputs: newList
        });
    }

    render() {
        const { editable, error, touched } = this.props;
        const has_error = error && touched && touched.affiliation;
        return (
            <div className={(has_error ? "has-error" : "") + " field-array-checkbox"}>
                {editable ? (
                    <>
                        <CheckedList
                            data={this.props.data}
                            checkedInputs={this.state.checkedInputs}
                            uncheckInput={this.uncheckInput.bind(this)}
                        />

                        <InputList
                            data={this.props.data}
                            checkedInputs={this.state.checkedInputs}
                            checkInput={this.checkInput.bind(this)}
                        />
                        <span>{has_error ? error : null}</span>
                    </>
                ) : (
                    this.state.checkedInputs.map((input, index) => {
                        return (
                            <span key={index}>
                                {this.props.data[input].label} {this.state.checkedInputs[index + 1] ? ", " : ""}
                            </span>
                        );
                    })
                )}
            </div>
        );
    }
}

export const INPUTS = [
    {
        id: 0,
        name: "affiliation_customer",
        label: "Customer"
    },
    {
        id: 1,
        name: "affiliation_end_customer",
        label: "End user"
    },
    {
        id: 2,
        name: "affiliation_host_user",
        label: "Host user"
    },
    {
        id: 3,
        name: "affiliation_partner",
        label: "Partner"
    },
    {
        id: 4,
        name: "affiliation_provider",
        label: "Provider"
    },
    {
        id: 5,
        name: "affiliation_site_owner",
        label: "Site owner"
    }
];

export default FiledArrayCheckbox;
