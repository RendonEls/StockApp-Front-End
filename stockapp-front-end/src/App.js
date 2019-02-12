import React, { Component } from 'react';
import axios from 'axios'
import Stocks from "./stocks/Stocks"

class App extends Component {

  constructor() {
    super()
    this.state = {
      stocks: []
    }
  }

  componentDidMount () {
    // console.log('component mounted')
    // axios.get('http://localhost:4001')
    //   .then((res) => {
    //     console.log(res)
    //     this.setState({
    //       stocks: res.data
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    }

  render() {
    // const items = this.state.stocks.map( (stock, i) => {
    //   return <h1 key={i}>{stock.symbol}</h1>;
    //   }
    //   );
    return (
      <div>
        <div className="nav">
          <div className="Home">Home</div>
          <div className="Search">Search</div>
          <div className="Add">Add</div>
        </div>
        <Stocks />
      </div>
    );
  }
}

export default App;

