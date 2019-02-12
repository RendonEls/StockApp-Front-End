import React, { Component } from 'react';
import { Link } from "react-router-dom"
import {Route} from "react-router"
import axios from 'axios'
import Stocks from "./stocks/Stocks"
import AddNewStock from './addNewStock/AddNewStock'

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
          <div className="nav-item Home"><Link to="/"> Home</Link></div>
          <div className="nav-item Search">Search</div>
          <div className="nav-item Add" ><Link to="/newstock">Add </Link> </div>
        </div>
        <Route exact path="/" render={() => <Stocks stocks={this.state.stocks} /> }/>
        <Route path="/newstock" render={() => <AddNewStock />} />
      </div>
    );
  }
}

export default App;

