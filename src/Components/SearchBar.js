import React, { Component } from 'react';
import SearchButton from './SearchButton';
import axios from 'axios';


export default class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
        }
        this.updateText = this.updateText.bind(this);
    }

    updateText(event) {
        this.setState({
            text: event.target.value
        })
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
       axios.post(`api/review`, {
           title: this.state.text
       }).then(data =>{
           console.log(data.data)
       })

    }

    render() {
        return (
            <div>
                <input type="text" className='SearchBar' placeholder="Search for a book" onChange={this.updateText} value={this.state.text}
                />
                <button className="SearchButton"
                onClick={this.handleOnClick}
                >Go</button>
            </div>
        )
    }
}