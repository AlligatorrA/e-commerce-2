import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../Pages/context-folder/auth-context";

function LoginForm() {
    const { LoginFunc, loginData, setLoginData } = useAuth()
    const [eye, setEye] = useState(false)
    const [password, setPassword] = useState('password')
    const [passwordError, setPasswordError] = useState(false)

    const ToogleEye = () => {
        setEye(eye => !eye)
        if (eye) {
            setPassword('text')
        } else {
            setPassword('password')
        }
    }
    return (
        <div className='userClass dis-flex align-center just-center'>
            <div className="card_container marginL2em   pDetWid">
                <form onSubmit={(e) => e.preventDefault()}>
                    <section className="card_body dis-flex coln-flex just-center align-center ">
                        <h2>Login Form</h2>
                        <div className='card-footer padTob'>
                            <label className="search_label " htmlFor="search">

                                <input
                                    className="outline search-input" type="text" name='email'
                                    value={loginData.email}
                                    onChange={(e) => setLoginData(e.target.value)}
                                />
                                <span className=" pTectColor">
                                    <i className="fa-solid fa-at"></i>
                                </span>
                            </label>
                        </div>
                        <div className='card-footer padTob'>
                            <label className="search_label " htmlFor="search">

                                <input
                                    className="outline search-input" type={password} name='password'
                                    value={loginData.password}
                                    onChange={(e) => setLoginData(e.target.value)}
                                />
                                <span className=" pTectColor" onClick={ToogleEye}>
                                    {
                                        eye ?
                                            <i className="fa-solid fa-eye"></i> :

                                            <i className="fa-solid fa-eye-slash"></i>
                                    }
                                </span>
                            </label>
                        </div>
                        <p className=" card-footer asideAlink">
                            <span><Link to=''>forgot</Link></span>
                            <Link to=''>Sign Up</Link>
                        </p>
                        {
                            passwordError && <p>password is incorrect</p>
                        }
                        <div className='card-footer padTob  '>

                            <button onClick={LoginFunc} type='submit' className='  font1en  pTectColor    btn'>Login <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
                        </div>


                    </section>


                    <div className="spacer"></div>

                </form>
            </div >
        </div>
    )
}

export default LoginForm;