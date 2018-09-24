import React, { Component } from 'react';
import '../reset.css';
import '../App.css';
import axios from 'axios';


class GenerateApplicants extends Component {
    constructor() {
        super();

        this.state = {
            applicants: []
        }
        this.GenerateOnClick = this.GenerateOnClick.bind(this);
    }



    GenerateOnClick() {
        return (
            axios.get(`https://randomuser.me/api/?results=2`)
            .then(res => console.log(res.data)||this.props.getApplicants(res.data.results)) 
        )
    }

    render() {
        return (
            <div className="NavBar">
                <button className='GenerateApplicantsButton'
                    onClick={this.GenerateOnClick}>Generate Applicants</button>
            </div>
        );
    }
}

export default GenerateApplicants;
