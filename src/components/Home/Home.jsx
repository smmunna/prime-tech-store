import React from 'react';
import './Home.css';
import { FaAppStoreIos, FaApple, FaCcJcb, FaConfluence } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData();
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
            <span><FaAppStoreIos /></span>  <span className='ms-2'>Roblox Games</span>
          </div>
          <div className='trendcard '>
            <span><FaApple /></span>  <span className='ms-2'>FaAmilia Games</span>
          </div>
          <div className='trendcard '>
            <span><FaCcJcb /></span>  <span className='ms-2'>FaCcJcb Games</span>
          </div>
          <div className='trendcard '>
            <span><FaConfluence /></span>  <span className='ms-2'>FaConfluence Games</span>
          </div>

        </div>
      </div>

      <div className="my-4 container">
        <h3>Trending Apps</h3>
        <div className='row  row-cols-1 row-cols-md-4 g-4'>
          {
            data.length > 4 ?
              <>
                {
                  data.slice(0, 4).map(apps => {
                    const { id, name, price, image } = apps;
                    return <div class="col h-100" key={id}>
                      <div class="card pt-2">
                        <div className="text-center">
                          <img src={image} class="card-img-top w-25" alt="..." />
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">{name}</h5>
                          <h5>Price: {price == 0 ? <span className='text-success'>Free</span> : <span className='text-danger'>${price}</span>}</h5>
                        </div>
                        <div className=' p-2'>
                          <Link to={`/app/${id}`}><button className="btn btn-primary">Download Now</button></Link>
                        </div>
                      </div>
                    </div>
                  })
                }
              </>
              :
              <></>
          }
        </div>

        <div className='text-center mt-3'>
          <Link to="/store"><button className="btn btn-danger">Show All</button></Link>
        </div>
      </div>

    </div>
  );
}

export default Home;
