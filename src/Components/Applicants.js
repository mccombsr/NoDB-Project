import React, { Component } from 'react';
import '../reset.css';
import '../App.css';
import axios from 'axios';


class Applicants extends Component {
    constructor() {
        super();

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get(``)
    }


    hireOnClick(event) {
        this.setState({ employees: event.target.value })
    }

    render() {
        return (
            <div>
                <div className="Applicant">
                    <button className="hireButton"
                        onClick={this.hireOnClick}
                    >Hire</button>
                </div>
            </div>
        );
    }
}

export default Applicants;
