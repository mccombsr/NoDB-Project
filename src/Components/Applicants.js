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
        console.log(this.props)
        return (
            <div>
                <div className="Applicant">
                <h2 className='applicantName'>{this.props.applicant.name?this.props.applicant.name.first.toUpperCase() : null}
                 {this.props.applicant.name ? " " + this.props.applicant.name.last.toUpperCase() : null}
                </h2>
                <img className='thumbnail' src={this.props.applicant.picture?this.props.applicant.picture.thumbnail : null}/>
                    <button className="hireButton"
                        onClick={this.hireOnClick}
                    >Hire</button>
                </div>
            </div>
        );
    }
}

export default Applicants;
