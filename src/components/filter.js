import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  render() {
    const { transactions, onDelete } = this.props;
    const { searchTerm } = this.state;
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="filter-container">
        <div className='ui large icon input'>
        <input
          type="text"
          placeholder="Search your transactions"
          value={searchTerm}
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
        />
         <i className="circular search link icon"></i>
        </div>
        <table className="transactions-table ui celled striped padded table">
          <thead>
            <tr>
              <th>
                <h3 className='ui center aligned header'>Date</h3>
              </th>
              <th>
                <h3 className='ui center aligned header'>Category</h3>
              </th>
              <th>
                <h3 className='ui center aligned header'>Description</h3>
              </th>
              <th>
                <h3 className='ui center aligned header'>Amount</h3>
              </th>
              <th>
                <h3 className='ui center aligned header'>Delete Transactions</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>
                  <button onClick={() => onDelete(transaction.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Filter;