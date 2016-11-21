import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MenuItem } from 'react-bootstrap';

import { searchCountry } from '../../actions/index';

class SearchCountryList extends Component {
  render() {
    return (
      <MenuItem onSelect={(eventKey) => {this.props.searchCountry(eventKey)}} eventKey={this.props.menuItem}>{this.props.menuItem}</MenuItem>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchCountry }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchCountryList);