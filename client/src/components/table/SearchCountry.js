import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

import SearchCountryList from './SearchCountryList';

class SearchCountry extends Component {

  renderList() {
    if(!this.props.countryList) {
      return (
        <div>
        </div>
      )
    }

    return this.props.countryList.map((eachCountry, index) => {
      return (
        <SearchCountryList
          key={index}
          menuItem={eachCountry}
        />
      )
    })
  }

  render() {
    return (
      <ButtonToolbar>
        <DropdownButton id="dropdown-size-medium" title={this.props.searchCountry ? this.props.searchCountry : "Search Country"} >
          {this.renderList()}
        </DropdownButton>
      </ButtonToolbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countryList: state.search.country,
    searchCountry: state.searchCountry.searchCountry
  }
}


export default connect(mapStateToProps)(SearchCountry);