import React, { Component } from 'react'
// import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import './styling.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className='headerparent'>
                <ul type='none' className='headerchild'>
                        <li><Link to='./home' className='headerli'>Home</Link></li>
                        <li><Link to='/students' className='headerli'>Students</Link></li>
                        <li><Link to='/contactus' className='headerli'>ContactUs</Link></li>
                </ul>
            </div>
        )
    }
}
export default Header