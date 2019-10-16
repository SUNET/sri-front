import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import MomentLocaleUtils, { formatDate, parseDate } from "react-day-picker/moment";

import "moment/locale/en-gb";
import "moment/locale/es";
import "moment/locale/sv";

import "react-day-picker/lib/style.css";
import "../style/RangeDayPicker.scss";

class RangeDayPicker extends React.Component {
    static propTypes = {
        resetDate: PropTypes.func.isRequired
    };

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

    handleFromChange = (from) => {
        // Change the from date and focus the "to" input field
        this.setState({ from }, this.props.dateFrom(from));
        // this.setState({ from });
    };

    handleToChange = (to) => {
        this.setState({ to }, this.showFromMonth, this.props.dateTo(to));
        // this.setState({ to });
    };
    handleResetClick = () => {
        this.setState({ from: undefined, to: undefined }, this.props.resetDate(undefined, undefined));
    };

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <>
                <div className="InputFromTo">
                    <label>From</label>
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
                            numberOfMonths: 2,
                            onDayClick: () => this.to.getInput().focus()
                        }}
                        onDayChange={this.handleFromChange}
                    />

                    <span className="InputFromTo-to">
                        <label>To</label>
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
                        />
                    </span>
                </div>
                <button type="button" onClick={this.handleResetClick} className="btn outline btn-trash"></button>
            </>
        );
    }
}

export default RangeDayPicker;
