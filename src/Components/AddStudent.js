import React, { useContext, useState } from "react";
import {  NavLink,  } from 'react-router-dom'
import { StudentContext } from './StudenContext'
import './styling.css'

const AddStudent = () => {

    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const [Course, setCourse] = useState('')
    const [Batch, setBatch] = useState('')


    const [students,setStudents] = useContext(StudentContext)


    const handleAddClick = () => {

        setStudents( [ ...students , 
            { 
                Name:Name, Age:Age, Course:Course, Batch:Batch 
            } 
        
        ] )
    }

        return(
        <div className='addstuparent'>
            <div className='addstuchild'>
            <div>
                <label className="name">Name:</label>
                <input className="namestyle" id="name" type={'text'} name="name"  value={Name} onChange={(e) => setName(e.target.value)}/> 
                </div>
                <div>
                <label className="age" >Age:</label>
                <input className="agestyle" id="Age" type={'number'} name="name" value={Age} onChange={(e) => setAge(e.target.value)}/> 
                </div>
                <div>
                <label className="course" >Course:</label>
                <input className="coursestyle" id="Course" type={'text'} name="Course" value={Course} onChange={(e) => setCourse(e.target.value)}/> 
                </div>
                <div>
                <label className="batch">Batch:</label>
                <input  className="batchstyle" id="Batch" type={'text'} name="Batch" value={Batch} onChange={(e) => setBatch(e.target.value)}/> 
                </div>
                <div>
                    <NavLink to="/student" className='cancel'>Cancel</NavLink>
                    <NavLink to="/student" onClick={handleAddClick} className='click'>Submit</NavLink>
                </div>
            </div>
         </div>
    )
}

export default AddStudent;