import React from 'react';
import { Link } from 'react-router-dom';

const SingleCardData = ({ swt }) => {
    const { id, name, image, description, price } = swt;
    return (
        <div class="col">
            <div class="card h-100">
                <div className='text-center'>
                    <img src={image} class="card-img-top w-50 text-center" alt="SmMunna" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h5>Price: {price == 0 ? <span className='text-success'>Free</span> : <span className='text-danger'>${price}</span>}</h5>
                    <p class="card-text">{description.length > 50 ? <>{description.slice(0, 50)}...</> : description}</p>
                </div>
                <div className=' p-2'>
                    <Link to={`/app/${id}`}><button className="btn btn-primary">Download Now</button></Link>
                </div>
            </div>
        </div>
    );
}

export default SingleCardData;
