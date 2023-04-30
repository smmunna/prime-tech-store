import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCardData from './SingleCardData/SingleCardData';

const Store = () => {
    const data = useLoaderData();
    return (
        <div className='container mt-3 mb-3'>

            {
                data.length < 0 ?
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            data.map(swt => <SingleCardData
                                key={swt.id}
                                swt={swt}
                            />)
                        }
                    </div>
            }


        </div>
    );
}

export default Store;
