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
    </tr>
  )
}

export default TableList;