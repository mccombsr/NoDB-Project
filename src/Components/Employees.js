import React, { Component } from 'react';
import '../reset.css';
import '../App.css';
import axios from 'axios';


class Employees extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div>
                <h2 className='employeesTitle'>CURRENT EMPLOYEES</h2>
                <div className="Employees">
                    <h2>
                        {/* {this.props.employees[0] && this.props.employees.map((employee) => <img src={employee.picture.large} />)} */}
                        {this.props.employees[0] && this.props.employees.map((employee) =>
                            <div>
                                <img src={employee.picture.large} />
                                {employee.name.first.toUpperCase() + " " + employee.name.last.toUpperCase()}
                                <button className="fireButton" onClick={this.props.fire}>Fire</button>
                                <button className="tenureButton" onClick={this.props.tenure}>Tenure</button>
                            </div>)}
                    </h2>
                </div>
            </div>

        );
    }
}

export default Employees;
