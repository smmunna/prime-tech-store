import React from 'react';
import './oneItemData.css';
import { Link, useLoaderData } from 'react-router-dom';

const OneItemData = () => {
    const data = useLoaderData();
    const { id, name, image, description, price,dlink } = data;
    return (
        <div className='d-flex justify-content-center my-4'>
            <div class="card">
                <div className='text-center'>
                    <img src={image} class="card-img-top w-25" alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <p className='text-secondary'>For signed in user , Price doesn't matter</p>
                    <p>Download Link:<Link className='dlink ms-2' to={`"dlink":"https://www.office.com/"`}> {dlink}</Link></p>
                </div>
            </div>
        </div>
    );
}

export default OneItemData;
