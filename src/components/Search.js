import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input" onChange={props.showResult}>
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => props.handleChange(e)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
