import React, { Component } from 'react';
import axios from 'axios'

class Stocks extends Component {
    constructor() {
        super()
        
        this.state={
            stocksData: []
        }
    }

    componentDidMount () {
        console.log('component mounted')
        axios.get('http://localhost:4001')
          
          .then(json => {
              this.setState({

                  stocksData: json.data

              }, () => console.log(this.state))
              console.log(json)
              console.log(this.state.stocksData)// this wont work async wont return
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
        let stocksTest = null
        if (this.state.stocksData.length > 0) {
            stocksTest = this.state.stocksData[0].symbol
        }
        return (
            <div className="stockData">
                <h1>{stocksTest}</h1>  
                <h2>hi</h2>
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