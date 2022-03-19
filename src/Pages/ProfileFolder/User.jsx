import React from 'react'
import { FormDisplay } from './AddressManagment'
import { Routes, Route, Link } from "react-router-dom";

function User() {
    return (
        <div className='userClass' >


            <Link to='/address-management' className='pTectColor'> <p className='f24px '>Address Management   </p>  </Link>

        </div>
    )
}

export default User