import React from "react";
import moment from "moment";
import { Form } from "react-bootstrap";

import DayPickerInput from "react-day-picker/DayPickerInput";

import MomentLocaleUtils, { formatDate, parseDate } from "react-day-picker/moment";

import "moment/locale/en-gb";
import "moment/locale/es";
import "moment/locale/sv";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import "react-day-picker/lib/style.css";
import "../style/RangeDayPicker.scss";

const DateInput = (props) => {
    return (
        <div className="day-picker-wrap">
            <label>{props.label}</label>
            <Form.Control
                {...props}
                onClick={(e) => props.onClick(e)}
                onFocus={(e) => props.onFocus(e)}
                onBlur={(e) => props.onBlur(e)}
                onChange={(e) => props.onChange(e)}
            />
            <span>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
        </div>
    );
};

class RangeDayPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: undefined,
            to: undefined
        };
    }

    showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), "months") < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    }
    //
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log("prevS", prevState);
    //     console.log("thisS", this.state);
    //     console.log("prevP", prevProps);
    //     console.log("thisP", this.props);
    // }

    handleFromChange = (from) => {
        // Change the from date and focus the "to" input field
        this.setState({ from }, this.props.dateFrom(from));
    };

    handleToChange = (to) => {
        this.setState({ to }, this.showFromMonth, this.props.dateTo(to));
    };

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div className="InputFromTo">
                <DayPickerInput
                    value={from}
                    placeholder="dd/mm/yy"
                    format="MM/DD/YY"
                    formatDate={formatDate}
                    parseDate={parseDate}
                    dayPickerProps={{
                        locale: "en",
                        localeUtils: MomentLocaleUtils,
                        selectedDays: [from, { from, to }],
                        disabledDays: { after: to },
                        toMonth: to,
                        modifiers,
                        numberOfMonths: 2
                    }}
                    onDayChange={this.handleFromChange}
                    component={(props) => (
                        <DateInput {...props} label="From" />
                    )}
                />
                <span className="InputFromTo-to">
                    <DayPickerInput
                        ref={(el) => (this.to = el)}
                        value={to}
                        placeholder="dd/mm/yy"
                        format="MM/DD/YY"
                        formatDate={formatDate}
                        parseDate={parseDate}
                        dayPickerProps={{
                            locale: "en",
                            localeUtils: MomentLocaleUtils,
                            selectedDays: [from, { from, to }],
                            disabledDays: { before: from },
                            modifiers,
                            month: from,
                            fromMonth: from,
                            numberOfMonths: 2
                        }}
                        onDayChange={this.handleToChange}
                        component={(props) => (
                            <DateInput {...props} label="To" />
                        )}
                    />
                </span>
            </div>
        );
    }
}

export default RangeDayPicker;
