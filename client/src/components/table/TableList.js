import React from 'react';

const TableList = (props) => {
  return (
    <tr>
      <td>
        {props.companyName}
      </td>
      <td>
        {props.quarterEnding}
      </td>
      <td>
        {props.sales}
      </td>
      <td>
        {props.salesYoy}
      </td>
      <td>
        {props.earning}
      </td>
      <td>
        {props.earningYoy}
      </td>
      <td>
        {props.ebitda}
      </td>
      <td>
        {props.ebitdaMargin}
      </td>
      <td>
        {props.profitMargin}
      </td>
    </tr>
  )
}

export default TableList;