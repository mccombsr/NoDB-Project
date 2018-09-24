import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import GenerateApplicants from './Components/GenerateApplicants';
import Applicants from './Components/Applicants';
import Employees from './Components/Employees';
import TenuredEmployees from './Components/TenuredEmployees';



class App extends Component {
  constructor() {
    super();
    this.state = {
      applicantOne: {},
      applicantTwo: {},
      employees: [],
      tenuredEmployees: []
    }

    this.getApplicants = this.getApplicants.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.fireOnClick = this.fireOnClick.bind(this);
  }

  getApplicants(data) {
    this.setState({ applicantOne: data[0], applicantTwo: data[1] })
  }

  addEmployee(employee) {
    axios.post(`/api/employees`, employee)
      .then((employees) => this.setState({ employees: employees.data }))
  }

  componentDidMount() {
    axios.get(`/api/employees`)
      .then(res => this.setState({ employees: res.data }))
  }

  fireOnClick(index) {
    axios.delete(`/api/employees/${index}`)
      .then(res => this.setState({ employees: res.data }))
    console.log(this.fireOnClick)
  }

  tenureOnClick(id) {
    axios.put(`/api/employees/${id}`)
      .then(res => this.setState({ employees: res.data }))
    console.log(this.fireOnClick)
  }


  render() {
    return (
      <div className="App">
        <Header />
        <GenerateApplicants getApplicants={this.getApplicants} />
        <div className="ApplicantContainer">
          <Applicants applicant={this.state.applicantOne}
            addEmployee={this.addEmployee}
          />
          <Applicants applicant={this.state.applicantTwo}
            addEmployee={this.addEmployee}
          />
        </div>
        <div className='EmployeeContainer'>
          <Employees tenure={this.tenureOnClick} fire={this.fireOnClick} employees={this.state.employees} />
        </div>
        <div className='tenuredEmployees'>
          <TenuredEmployees />
        </div>
      </div>
    );
  }
}

export default App;
