import React from 'react';
import { Field } from 'redux-form';
import { withTranslation } from 'react-i18next';
import FieldInput from './FieldInput';

class AppendChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fields: [{ name: '' }],
    };
  }

  componentWillMount() {}

  handleFieldNameChange = (index) => (event) => {
    const newShareholders = this.state.fields.map((field, sindex) => {
      if (index !== sindex) return field;
      return { ...field, name: event.target.value };
    });

    this.setState({ fields: newShareholders });
  };

  handleAddFild = (event) => {
    event.preventDefault();
    this.setState({
      fields: this.state.fields.concat([{ name: '' }]),
    });
  };

  render() {
    let { t } = this.props;
    return (
      <div>
        {this.state.fields.map((field, index) => (
          <Field
            component={FieldInput}
            type="text"
            placeholder={`${field.name}${index + 1}`}
            value={field.name}
            onChange={this.handleFieldNameChange(index)}
          />
        ))}
        <button className="btn btn-add outline" onClick={(e) => this.handleAddField(e)}>
          <span>{t('actions/add-new')}</span>
        </button>
      </div>
    );
  }
}

export default withTranslation()(AppendChild);
