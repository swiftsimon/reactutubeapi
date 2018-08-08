import React, { Component } from 'react'


// functional/dumb component

// const SearchBar = () => {
//     return <input />
// }

// export default SearchBar


// class based component - has internal record keeping
// state is a plain JS object used to record and react to user events
// each class based component has its own state object
// if a components state is changed the component re-renders, and all children re-render too

class SearchBar extends Component {

    constructor(props) { // called automatically
        super(props)

        this.state = {
            searchTerm: ''
        }

        this.onInputChanged = this.onInputChanged.bind(this)
        
    }
    
    // onChange is a standard JS event handler
    // wrap js variables in {}

    render() { // a method on a class 
        const prps = this.props
        return (
            <div>
                <input 
                value={this.state.searchTerm  // becomes a controlled component as value is set by state
                }
                onChange={this.onInputChanged} />
                Value of input: {this.state.searchTerm} 
                { this.props.length } 
            </div>
        )}   

    onInputChanged(event) { // event listener for input search area 
        let searchTerm = event.target.value
        this.setState({searchTerm: searchTerm})  // this sets the value of state
    }

}

export default SearchBar






