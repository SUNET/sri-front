import React from "react";
import moment from "moment";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import { formatDate, parseDate } from "react-day-picker/moment";

import "../style/RangeDayPicker.scss";

const DateInput = (props) => {
    return (
        <>
            <label>{props.label}</label>
            <InputGroup className="mb-3">
                <Form.Control
                    {...props}
                    onClick={(e) => props.onClick(e)}
                    onFocus={(e) => props.onFocus(e)}
                    onBlur={(e) => props.onBlur(e)}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    );
};

class RangeDayPicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
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

    handleFromChange(from) {
        // Change the from date and focus the "to" input field
        this.setState({ from });
    }

    handleToChange(to) {
        this.setState({ to }, this.showFromMonth);
    }

    render() {
        console.log(this.state);
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div className="InputFromTo">
                <Row>
                    <Col>
                        <DayPickerInput
                            value={from}
                            placeholder="From"
                            formatDate={formatDate}
                            parseDate={parseDate}
                            dayPickerProps={{
                                selectedDays: [from, { from, to }],
                                disabledDays: { after: to },
                                toMonth: to,
                                modifiers,
                                numberOfMonths: 2,
                            }}
                            onDayChange={this.handleFromChange}
                            component={(props) => (
                                <DateInput {...props} label="From" />
                            )}
                        />
                    </Col>
                    <Col>
                        <span className="InputFromTo-to">
                            <DayPickerInput
                                ref={(el) => (this.to = el)}
                                value={to}
                                placeholder="To"
                                formatDate={formatDate}
                                parseDate={parseDate}
                                dayPickerProps={{
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
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RangeDayPicker;
