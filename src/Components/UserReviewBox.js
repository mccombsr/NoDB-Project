import React, { Component } from 'react';
import SubmitReview from './SubmitReview';

export default class UserReviewBox extends Component {
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
    }
    render() {
        return (
            <div >
                <textarea
                className='UserReviewBox'
                onChange={this.updateText}
                value={this.state.text}
                placeholder='Type your review here!'
                >
                </textarea>
                <SubmitReview/>
            </div>
        )

    }

}