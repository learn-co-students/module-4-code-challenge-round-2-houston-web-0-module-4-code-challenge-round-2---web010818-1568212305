import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    this.state = {
      acct: transactions,
      displayAcct: transactions,
      queryAcct: ""
    }

  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(r => r.json())
    .then(getTrans => {
      this.setState({
        acct: getTrans,
        displayAcct: getTrans
      })
    })
  }

  handleChange = (event) => {
    // your code here
    this.setState({
      queryAcct: event.target.value
    })
  }

  showResult = () => {
    this.setState({
      displayAcct: this.state.displayAcct.filter(a => (a.description === a.description.includes(this.state.queryAcct))  || (a.category === a.category.includes(this.state.queryAcct)))
    })
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} showResult={this.showResult}/>
        <TransactionsList displayAcct={this.state.displayAcct} />
      </div>
    )
  }
}

export default AccountContainer
