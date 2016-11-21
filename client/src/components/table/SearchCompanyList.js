import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MenuItem } from 'react-bootstrap';

import { searchCompany } from '../../actions/index';

class SearchCompanyList extends Component {
  render() {
    return (
      <MenuItem onSelect={(eventKey) => {this.props.searchCompany(eventKey)}} eventKey={this.props.menuItem}>{this.props.menuItem}</MenuItem>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchCompany }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchCompanyList);