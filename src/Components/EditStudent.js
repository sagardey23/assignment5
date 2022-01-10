// import React from 'react'
import './styling.css'
import React, { useContext, useState } from "react";
import {  NavLink  } from 'react-router-dom'
import { StudentContext } from './StudentContext'


const EditStudent = () => {

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
    return (
        <div className='addstuparent'>
            <div className='addstuchild'>
            <div>
                <label >Name:</label>
                <input className="namestyle" id="name" type={'text'} name="name"  value={Name} onChange={(e) => setName(e.target.value)}/> 
                </div>
                <div>
                <label>Age:</label>
                <input className="agestyle" id="Age" type={'number'} name="name" value={Age} onChange={(e) => setAge(e.target.value)}/> 
                </div>
                <div>
                <label >Course:</label>
                <input className="coursestyle" id="Course" type={'text'} name="Course" value={Course} onChange={(e) => setCourse(e.target.value)}/> 
                </div>
                <div>
                <label >Batch:</label>
                <input  className="batchstyle" id="Batch" type={'text'} name="Batch" value={Batch} onChange={(e) => setBatch(e.target.value)}/> 
                </div>
                <div>
                   <button><NavLink to="/student" className='cancel'>Cancel</NavLink></button> 
                   <button> <NavLink to="/student" onClick={handleAddClick} className='click'>Submit</NavLink></button> 
                </div>
            </div>
         </div>
    )
}

export default EditStudent
