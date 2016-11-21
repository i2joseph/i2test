import React, { Component } from 'react';

import RetailEmployment from './RetailEmployment';
import RetailSales from './RetailSales';

const Retail = (props) => {
  return (
    <div>
      <h3>Retail Trends</h3>
      <div id="sales">
        <RetailSales
          labels={props.labels}
          data={props.data}
          yLabelString={props.yLabelString}
        />
      </div>

      <div id="employment">
        <RetailEmployment
          datasets={props.datasets}
        />
      </div>
    </div>
  )
}

export default Retail;