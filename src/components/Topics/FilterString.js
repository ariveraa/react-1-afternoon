import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()
        this.state = { 
            unFilteredArray: ['this', 'is', 'react'], 
            userInput: '', 
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput:val}); 
    }

    filterStrings(input){
        let list = this.state.unFilteredArray; 
        let filteredList  = []; 
        for(let i = 0; i < list.length; i++ ){
            if(list[i].includes(input)){
                filteredList.push(list[i]); 
            }
        }
        this.setState({filteredArray: filteredList}); 
    }
    
    render(){
        return(
            <div className = 'puzzleBox filterStringPB'>
                <h4>Filter String</h4>
        <span className = 'puzzleText'>{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className= 'inputLine' onChange = {(e)=> this.handleChange(e.target.value)}></input>
                <button className =  'confirmationButton' onClick = {()=> this.filterStrings(this.state.userInput)}>Filter</button>
                <span className = 'resultBox filterStringRB'>Filtered Array:{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    } 
}

export default FilterString;