import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropdownButton } from 'react-bootstrap';

import SearchSectorList from './SearchSectorList';

class SearchSector extends Component {

  renderList() {
    if(!this.props.sectorList) {
      return (
        <div>
        </div>
      )
    }

    return this.props.sectorList.map((eachSector, index) => {
      return (
        <SearchSectorList
          key={index}
          menuItem={eachSector}
        />
      )
    })
  }

  render() {
    return (
      <DropdownButton id="dropdown-size-medium" title={this.props.searchSector ? this.props.searchSector : "Search Sector"} >
        {this.renderList()}
      </DropdownButton>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sectorList: state.search.sector,
    searchSector: state.searchSector.searchSector
  }
}


export default connect(mapStateToProps)(SearchSector);