import React, { Component } from 'react';

import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      stocks: []
    }
  }

  componentDidMount () {
    console.log('component mounted')
    axios.get('http://localhost:4001')
      .then((res) => {
        console.log(res)
        this.setState({
          stocks: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }

  render() {
    const items = this.state.stocks.map( (stock, i) => {
      return <h1 key={i}>{stock.symbol}</h1>;
      }
      );
    return (
      <div>
        {items}
      </div>
    );
  }
}

export default App;

