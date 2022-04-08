import React from 'react'
import { Link } from "react-router-dom";
import useDocumentTitle from '../pure-functions/useDocumentTitle';

function User() {
    useDocumentTitle(`User's Details`)
    return (
        <div className='userClass' >


            <Link to='/address-management' className='pTectColor'> <p className='f24px '>Address Management   </p>  </Link>

        </div>
    )
}

export default User