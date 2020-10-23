import React from 'react';
import { connect } from 'react-redux';
import formattedServicesData from './serviceListData';

class GenericServiceList extends React.Component {
  render() {
    console.log('formattedServicesData: ', formattedServicesData);
    console.log(this.props.match);
    const [, , entityPath] = this.props.location.pathname.split('/');
    console.log('entityPath: ', entityPath);
    const currentType = formattedServicesData.find((service) => service.path === entityPath);
    return <h1>Hello, {currentType.originalName}</h1>;
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

const GenericServiceListContainer = connect(mapStateToProps)(GenericServiceList);

export default GenericServiceListContainer;
