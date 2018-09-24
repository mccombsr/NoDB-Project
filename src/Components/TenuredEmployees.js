import React, { Component } from 'react';
import '../reset.css';
import '../App.css';


class TenuredEmployees extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <h2 className='employeesTitle'>CURRENT EMPLOYEES</h2>
                <div className="Employees">
                    <h1>Tenured Employees</h1>
                    <h2>
                        {this.props.tenuredEmployees[0] && this.props.tenuredEmployees.map((employee) =>
                            <div>
                                <img src={employee.picture.large} />
                                {employee.name.first.toUpperCase() + " " + employee.name.last.toUpperCase()}
                            </div>)}
                    </h2>
                </div>
            </div>

        );
    }
}

export default TenuredEmployees;
