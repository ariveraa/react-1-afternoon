import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1:0,
            number2:0,
            sum:null
        }
    }
    input1(input1){
        this.setState({number1: parseInt(input1,10)});
    }

    input2(input2){
        this.setState({number2: parseInt(input2,10)});
    }

    getSum(num1, num2){
        this.setState({sum:num1 + num2})
    }

    render(){
        return(
        <div className = 'puzzleBox sumPB'>
            <h4>Sum</h4>
            <input className= 'inputLine' onChange = {(e)=> this.input1(e.target.value)}></input>
            <input className= 'inputLine' onChange = {(e)=> this.input2(e.target.value)}></input>
            <button className =  'confirmationButton' onClick = {()=> this.getSum(this.state.number1, this.state.number2)}>getSum</button>
            <span className = 'resultsBox'>Sum: {this.state.sum}</span>
        </div>
        )
    } 
}

export default Sum;