import React, { Component } from 'react';
import '../reset.css';
import '../App.css';
import axios from 'axios';


class Employees extends Component {
    constructor() {
        super();

        this.state = {
            employees: []
        }
    }



    fireOnClick(event) {
        this.setState({ employees: event.target.value })
    }

    render() {
        return (
            <div>
                <h2 className='employeesTitle'>CURRENT EMPLOYEES</h2>
                <div className="Employees">
                    <button className="fireButton"
                        onClick={this.hireOnClick}
                    >Fire</button>
                </div>
            </div>
        );
    }
}

export default Employees;
