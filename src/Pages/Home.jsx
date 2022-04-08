import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from './pure-functions/useFetch'
import loadingImg from '../images/circleSpin.gif'

import './Styles/Home.css'
import './Styles/cart.css'
import './Styles/Product.css'
import './Styles/Asides.css'
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'
import useDocumentTitle from './pure-functions/useDocumentTitle';

function Home() {

    const { data, loader } = useFetch('/api/categories')
    useDocumentTitle('A TIME SHOP - Buy Your Time, Buy Your Desire')
    return (
        <div>

            <div>
                <div className="homContainer">
                    <div className="leftSideBox marginAll dis-flex coln-flex  just-center align-center">
                        <div className="spacerhalf"></div>
                        <h1>Time</h1>
                        <h2 className='marginAll'>No Seiously! What is Time..?</h2>
                        <div className="spacerhalf"></div>
                        <h2>Is Time Linear, Spiral or a 'Never Ending Circle'...?</h2>
                        <p className='marginAll'><b><i>'The end is the beginning, and the beginning is the end.'</i>...#Dark</b></p>
                        <h3>lets Explore Together</h3>
                        <div className="spacerhalf"></div>
                        <h1 className='marginAll'>60% off on 1st buy.</h1>
                        <div className="  dis-flex just-center ">
                            <Link to='/Product'
                                className=' btn' >

                                <button className='  pTectColor  btn '>  Buy Watch </button>
                            </Link>
                            <Link to='/Product'
                                className=' btn'>
                                <button className='pTectColor  btn '>  Travel Through Time   </button>
                            </Link>
                        </div>
                    </div>
                    <div className="rightSideBox marginAll">
                        <img className='img-div' src='https://cdnb.artstation.com/p/assets/images/images/011/015/455/large/syed-ali-qaiser-time5.jpg?1527439615' width='100%' alt="" />
                    </div>
                </div>
                <hr className='marginAll' />
                <div className="spacer01 dis-flex align-center coln-flex">
                    <h1>Categories</h1>
                    <hr />
                    {
                        loader &&
                        <img src={loadingImg} width={400} alt='Loading...' />
                    }
                </div>
            </div>

            {data.categories &&
                data?.categories.map(items => (
                    <div key={items.id}>
                        <h1 className='dis-flex align-center coln-flex '>{items.categoryName}</h1>
                        <div className="spacerhalf"></div>
                        <Link to='/Product'>
                            <div className="homContainer">
                                <div className=" leftSideBox ">
                                    <img className='img-div' src={items.imgUrl} width='80%' height="80%" alt="" />
                                </div>
                                <div className=" rightSideBox marginAll">
                                    <div className="leftSideBox dis-flex coln-flex  just-center align-center">
                                        <img src={items.iconUrl} width='340px' alt="" />
                                        <div className="spacer01"></div>
                                        <h2 className='pTectColor'>   {items.description}</h2>
                                        <div className="spacerhalf"></div>
                                        <h3 className='marginAll pTectColor'>{items.detail}</h3>
                                        <div className="spacerhalf"></div>
                                        <h2 className='marginAll pTectColor'>{items.discount}</h2>
                                        <div className="spacerhalf"></div>
                                        <div className="  dis-flex just-center ">
                                            <button className='  pTectColor  btn '>  Buy Watch </button>
                                        </div>
                                        <div className="spacerhalf"></div>
                                    </div>

                                </div>

                            </div>
                        </Link>
                        <hr />
                    </div>
                ))
            }

        </div>
    )
}

export default Home