import React from 'react';

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
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleCardData;
