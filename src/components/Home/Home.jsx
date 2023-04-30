import React from 'react';
import './Home.css';
import { FaAppStoreIos,FaApple,FaCcJcb,FaConfluence } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <div className='Header-bg text-white'>
                <h3 className='display-4'>The Best Software</h3>
                <h3>For you in One Place</h3>
            </div>
            <div className='mt-4 container'>
                <h3 className='mb-3'>Trending Content</h3>
                <div className='trendCardGrid gap-2'>
                    <div className='trendcard'>
                      <span><FaAppStoreIos/></span>  <span className='ms-2'>Roblox Games</span>
                    </div>
                    <div className='trendcard '>
                      <span><FaApple/></span>  <span className='ms-2'>FaAmilia Games</span>
                    </div>
                    <div className='trendcard '>
                      <span><FaCcJcb/></span>  <span className='ms-2'>FaCcJcb Games</span>
                    </div>
                    <div className='trendcard '>
                      <span><FaConfluence/></span>  <span className='ms-2'>FaConfluence Games</span>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default Home;
