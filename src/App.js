import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import GenerateApplicants from './Components/GenerateApplicants';
import Applicants from './Components/Applicants';
import Employees from './Components/Employees';



class App extends Component {
  constructor() {
    super();
    this.state = {
      applicantOne: {},
      applicantTwo: {},
    }
      
    this.getApplicants = this.getApplicants.bind(this);
  }

  getApplicants(data){
    this.setState({applicantOne: data[0], applicantTwo: data[1]})
  }



  render() {
    return (
      <div className="App">
        <Header />
        <GenerateApplicants getApplicants={this.getApplicants}/>
        <div className="ApplicantContainer">
          <Applicants applicant={this.state.applicantOne}/>
          <Applicants applicant={this.state.applicantTwo}/>
        </div>
        <div className='EmployeeContainer'>
          <Employees/>
        </div>
      </div>
    );
  }
}

export default App;
