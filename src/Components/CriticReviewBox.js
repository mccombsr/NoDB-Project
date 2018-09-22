import React, { Component } from 'react';

export default class CriticReviewBox extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    updateText(event) {
        this.setState({
            text: event.target.value
        })
    }
    render(){
        return (
            <div >
                <textarea
                className='CriticReviewBox'
                placeholder="Critic's Review"
                ></textarea>
            </div>
        )
    }

}