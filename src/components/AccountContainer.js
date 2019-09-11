import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    this.state={
      // defaultTransactions:transactions,
      incomingTrans: [],
      searchTerm: "",
      displayTrans: [],
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(data => {
      this.setState({
        incomingTrans: data,
        displayTrans: data,

      })
    })
  }

///SEARCH BY CATEGORY /// 

  searchTerm = (term) => {
    
    this.setState({
      searchTerm: term.charAt(0).toUpperCase() + term.slice(1)
    })
  }

  searchByTerm = () =>{
    let arr = this.state.displayTrans.filter(trans => {
      return trans.category === this.state.searchTerm
    })

    this.setState({
      displayTrans: arr,
    })
  }


  render() {

    return (
      <div>
        <Search searchTerm={this.searchTerm} search={this.searchByTerm}/>
        {/* {this.state.defaultTransactions.map(trans => <TransactionsList transactions={trans}/>)} */}
        {this.state.displayTrans.map(trans => <TransactionsList transactions={trans}/>)}
      </div>
    )
  }
}

export default AccountContainer
