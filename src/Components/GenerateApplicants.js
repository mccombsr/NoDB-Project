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
    }



    GenerateOnClick(event) {
        
    }

    render() {
        return (
            <div className="NavBar">
                <button className='GenerateApplicantsButton'>Generate Applicants</button>
            </div>
        );
    }
}

export default GenerateApplicants;
