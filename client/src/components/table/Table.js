import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import TableList from './TableList';

class TableHome extends Component {

  renderList(page) {
    if(!this.props.tableData) {
      return null;
    }

    let listCounter = page;

    if(!page) {
      listCounter = 1;
    }

    let pageData = this.props.tableData.filter((eachData, index) => {
      return index >= ((listCounter - 1) * 15) && index < (((listCounter - 1) * 15) + 15);
    })

    return pageData.map((eachData, index) => {
      return (
        <TableList
          key={index}
          companyName={eachData.company_name}
          quarterEnding={eachData.quarter_ending}
          sales={eachData.sales}
          salesYoy={eachData.sales_yoy_pct}
          earning={eachData.earnings}
          earningYoy={eachData.earnings_yoy_pct}
          ebitda={eachData.ebitda}
          ebitdaMargin={eachData.ebitda_margin}
          profitMargin={eachData.net_profit_margin}
        />
      )
    })
  }

  render() {

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Quarter Ending</th>
            <th>Sales</th>
            <th>Sales YoY %</th>
            <th>Earning</th>
            <th>Earning YoY %</th>
            <th>Ebita</th>
            <th>Ebita Margin</th>
            <th>Net Profit Margin</th>
          </tr>
        </thead>

        <tbody>
          {this.renderList(this.props.activePage)}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activePage: state.activePage.activePage,
    tableData: state.tableData.tableData
  };
};

export default connect(mapStateToProps)(TableHome);