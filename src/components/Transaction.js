import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.all.posted_at}</td>
      <td>{props.all.description}</td>
      <td>{props.all.category}</td>
      <td>{props.all.amount}</td>
    </tr>
  )
}

export default Transaction
