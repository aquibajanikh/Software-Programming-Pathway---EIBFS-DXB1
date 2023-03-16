import React from 'react';

class CurrencyConverter extends React.Component{
    state={
        aed:'',
        convertTo:'',
        usdAmount:'',
        inrAmount:''
    }

    convertCurrency = ()=>{
        if(this.state.convertTo=="USD"){
            this.setState({
                usdAmount: this.state.aed*3.8
            });
        } else {
            this.setState({
                inrAmount: this.state.aed*22.6
            });
        }
    }
render(){
        return(
        <div id='currencyConverter'>
            <input type="text" placeholder='Enter value in AED' onChange={(e)=>{this.setState({aed:e.target.value})}}/>
            <select onChange={(e)=>{this.setState({convertTo:e.target.value})}}>
                <option selected disabled>Choose a currency</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
            </select>
            <button onClick={this.convertCurrency}>Convert</button>
            <h1>Result : {this.state.convertTo=="USD"? this.state.usdAmount : this.state.inrAmount}</h1>
        </div>);
    }
}

export default CurrencyConverter;