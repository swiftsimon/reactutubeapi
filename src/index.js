// React is a JS library that is used to produce HTML
// a compnent is written in JS but produces HTML
// JSX is a subset of JS

// Redux holds all the application data in a single 'application state' object

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyARBgwrsDblJJRIVVBo-e_pRZIDWqjgBwE'

// create new component/view - ie. snippet of code that produces html
class App extends Component {  // app is a type of component, we can have many 'instances' of app
    constructor(props) {
        super(props)

        this.state = { 
            videos: [],
            selectedVideo: null
        }

        YTSearch({ key: API_KEY, term: 'travel' }, (returnedVideos) => {  // youtube API call, callback
            this.setState({   // setting state rerenders this component, now with returned videos
                videos: returnedVideos,
                selectedVideo: returnedVideos[0]
            })
        }) // this component might try and render before this call comes back, resulting in null props to VideoDetail or VideoList
    }

    // <VideoList videos={this.state.videos} />  passes props 'videos' from App parent state to child VideoList
    render() {
        return (  // first line here must be ( or <div>
            <div>
                <h2>React</h2>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} //pass as props to VideoList
                    videos={this.state.videos} />  
            </div>
        )
    }
}

// render this generated html and put it on the page (in the DOM)
let root = document.querySelector('.container')
ReactDOM.render(<App />, root)