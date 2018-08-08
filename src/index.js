// React is a JS library that is used to produce HTML
// a compnent is written in JS but produces HTML
// JSX is a subset of JS

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyARBgwrsDblJJRIVVBo-e_pRZIDWqjgBwE'

// create new component/view - ie. snippet of code that produces html
class App extends Component {  // app is a type of component, we can have many 'instances' of app
    constructor(props) {
        super(props)

        this.state = { 
            videos: [],
        }

        YTSearch({ key: API_KEY, term: 'surfing' }, (returnedVideos) => {  // youtube API call, callback
            this.setState({ videos: returnedVideos})
        })
    }

    // <VideoList videos={this.state.videos} />  passes props 'videos' from App parent state to child VideoList
    render() {
        return (  // first line here must be ( or <div>
            <div>
                <h2>React</h2>
                <SearchBar />
                <VideoList videos={this.state.videos} />  
            </div>
        )
    }
}

// render this generated html and put it on the page (in the DOM)
let root = document.querySelector('.container')
ReactDOM.render(<App />, root)