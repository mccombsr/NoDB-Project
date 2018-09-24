import React from 'react';
import '../reset.css';
import '../App.css';
import axios from 'axios';


function Applicants(props) {
    



console.log(props)
return (
    <div>
                <div className="Applicant">
                <h2 className='applicantName'>{props.applicant.name?props.applicant.name.first.toUpperCase() : null}
                 {props.applicant.name ? " " + props.applicant.name.last.toUpperCase() : null}
                </h2>
                <img className='thumbnail' src={props.applicant.picture?props.applicant.picture.large : null}/>
                    <button className="hireButton"
                        onClick={() => props.addEmployee(props.applicant)}
                        >Hire</button>
                </div>
            </div>
        );
        
        
    }

export default Applicants;
