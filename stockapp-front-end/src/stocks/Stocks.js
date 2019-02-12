import React, { Component } from 'react';
import axios from 'axios'

class Stocks extends Component {
    constructor() {
        super()
        
        this.state={
            stockData:[]
        }
    }

    componentDidMount () {
        console.log('component mounted')
        axios.get('http://localhost:4001')
          .then(res => res.json())
          .then (json => {
              this.setState({
                  stocksData: json
              })
              console.log(this.state.stockData)
          })
          .catch((err) => {
            console.log(err)
          })
        }
    render() {
        // const items = this.state.stocks.map( (stock, i) => {
        //     return <h1 key={i}>{stock.symbol}</h1>;
        //     }
        // )

        return (
            <div>
                {this.state.stockData.symbol}
            </div>
        );
    }
}

export default Stocks;



// componentDidMount () {
//     console.log('component mounted')
//     axios.get('http://localhost:4001')
//       .then((res) => {
//         console.log(res)
//         this.setState({
//           stocks: res.data
//         })
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//     }

//   render() {
//     const items = this.state.stocks.map( (stock, i) => {
//       return <h1 key={i}>{stock.symbol}</h1>;
//       }
//       );