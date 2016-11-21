import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MenuItem } from 'react-bootstrap';

import { searchSector } from '../../actions/index';

class SearchSectorList extends Component {
  render() {
    return (
      <MenuItem onSelect={(eventKey) => {this.props.searchSector(eventKey)}} eventKey={this.props.menuItem}>{this.props.menuItem}</MenuItem>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchSector }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchSectorList);