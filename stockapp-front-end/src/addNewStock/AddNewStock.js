import React, { Component } from 'react';
import axios from 'axios'

class AddNewStock extends Component {
    constructor(){
        super()

        this.handleChange = this.handleChange.bind(this)
        this.submit=this.submit.bind(this)

    }
    submit(e) {
        e.preventDefault()
        console.log(e.target.value)
        axios.post('http://localhost:4001/addStock', this.state)
          .catch((err) => {
            console.log(err)
          })
    }

    handleChange(evt) {
        const variable = evt.target.name
        this.setState({[variable]: evt.target.value })
    }
  
    render() {
        return (
            <div className="inputFields">
                <form onSubmit= {this.submit} >
                    <h2>Symbol:</h2>
                    <div><input type="text" name="symbol" onChange={this.handleChange}/></div>
                    <h2>Company Name:</h2>
                    <div><input type="text" name="companyName" onChange={this.handleChange}/></div>
                    <h2>Current Price:</h2>
                    <div><input type="text" name="currentPrice" onChange={this.handleChange}/></div>
                    <h2>Opening Price:</h2>
                    <div><input type="text" name="openPrice" onChange={this.handleChange}/></div>
                    <div><input type="submit" name="submit" /></div>
                </form>
            </div>
        );
    }
}

export default AddNewStock;


// this.state = {
//     symbol: '',
//     companyName: '',
//     currentPrice: '',
//     openPrice: '',
// }