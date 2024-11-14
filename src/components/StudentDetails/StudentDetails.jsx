
import React from 'react';
import { Student_data } from './StudentData';
import './Student.css';

const StudentDetails = () => {
    console.log(Student_data);  
    return (
        <>
            <div className="student-details">
                <div className="header"><h1>Student Details</h1></div>
                <div>
                    <table border={1} cellSpacing={0} cellPadding={10}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Place</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Student_data.map((data)=>{
                                    let {id, fname, lname,  place, dob} = data;
                                    let dateObj = new Date()
                                    let age = dateObj.getFullYear() - dob.split('-')[2];
                                    return (
                                       <>
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{fname}</td>
                                            <td>{lname}</td>
                                            <td>{age}</td>
                                            <td>{place}</td>
                                            <td>{dob}</td>
                                        </tr>
                                        
                                       </>
                                        
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default StudentDetails;
