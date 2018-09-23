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

  }

  render() {
    return (
      <div className="App">
        <Header />
        <GenerateApplicants/>
        <div className="ApplicantContainer">
          <Applicants />
          <Applicants />
        </div>
        <div className='EmployeeContainer'>
          <Employees/>
        </div>
      </div>
    );
  }
}

export default App;
