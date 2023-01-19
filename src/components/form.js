import React, { Component } from "react";


class Form extends Component {
  constructor(props) {
  super(props);
  this.state = {
  date: '',
  category: '',
  description: '',
  amount: '',
  };
  }
  
  handleSubmit = (event) => {
  event.preventDefault();
  const { date, category, description, amount } = this.state;
  this.props.onSubmit({ date, category, description, amount });
  this.setState({ date: '', category: '', description: '', amount: '' });
  };
  
  render() {
  const { date, category, description, amount } = this.state;
  
  return (
    <div className="ui segment">
    <form className="ui form" onSubmit={this.handleSubmit}>
      <div className="inline fields">
        <input type="date" name="date" value={date} onChange={(e) => this.setState({ date: e.target.value })} />
        <input type="text" name="category" placeholder="Category" value={category} onChange={(e) => this.setState({ category: e.target.value })} />
        <input type="text" name="description" placeholder="Description" value={description} onChange={(e) => this.setState({ description: e.target.value })} />
        <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount} onChange={(e) => this.setState({ amount: e.target.value })} />
      </div>
    <button type="submit" className="ui button">Add Transaction</button>
  </form>
  </div>
);
}
}


export default Form;