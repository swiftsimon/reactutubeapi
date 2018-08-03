// React is a JS library that is used to produce HTML
// a compnent is written in JS but produces HTML
// JSX is a subset of JS

import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyARBgwrsDblJJRIVVBo-e_pRZIDWqjgBwE'


// create new component/view - ie. snippet of code that produces html
const App = () => {  // app is a type of component, we can have many 'instances' of app
    return (  // first line here must be ( or <div>
        <div>
            <h2>React</h2>
            <SearchBar />
        </div>
    )
}

// render this generated html and put it on the page (in the DOM)
let root = document.querySelector('.container')
ReactDOM.render(<App />, root)