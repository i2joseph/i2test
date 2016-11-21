import React, { Component } from 'react';

import RetailSales from './RetailSales';
import RetailEmployment from './RetailEmployment';

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