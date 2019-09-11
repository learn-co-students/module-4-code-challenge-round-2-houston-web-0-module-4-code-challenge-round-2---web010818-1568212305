import React from 'react'

const TransactionsList = (props) => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
         
           
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        <td>{props.transactions.posted_at}</td>
        <td>{props.transactions.description}</td>
        <td>{props.transactions.category}</td>
        <td>{props.transactions.amount}</td>





      </tbody>
    </table>
  )
}

export default TransactionsList
