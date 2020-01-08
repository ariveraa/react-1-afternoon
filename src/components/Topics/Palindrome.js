import React, {Component} from 'react'

class Palindrome extends Component{
    
    constructor(){
        super()
        this.state = { 
            userInput: '', 
            Palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput:val}); 
    }

    palindromeCheck(input){
        let forwards = input; 
        let backwards= input;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if(forwards === backwards){
            this.setState({Palindrome:'true'})
        }
        else{
            this.setState({Palindrome:'false'})
        }
    }

    render(){
        return( 
    <div className = 'puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input className= 'inputLine' onChange = {(e)=> this.handleChange(e.target.value)}></input>
        <button className =  'confirmationButton' onClick = {()=> this.palindromeCheck(this.state.userInput)}>Check</button>
        <span className = 'resultsBox'>Palindrome: {this.state.Palindrome}</span>
    </div>
        )
    } 
}

export default Palindrome;