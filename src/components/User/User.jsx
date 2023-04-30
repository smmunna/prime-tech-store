import React, { useContext } from 'react';
import { Card, Image, Spinner } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const User = () => {
    const{user}=useContext(AuthContext)
    if(!user){
        return <div className='text-center my-5'>
            <Spinner animation="border" variant="warning" />
        </div>
    }
    return (
        <div className='d-flex justify-content-center mt-4 p-2'>
            <Card className='w-lg-50'>
            <div className='text-center my-3'>
            <Image className='my-image ms-2 img-fluid' style={{width:""}} src={user?.photoURL} roundedCircle />
            </div>
                <Card.Body>
                    <Card.Title>Welcome, {user.displayName}</Card.Title>
                    <Card.Text>
                        Now you can download all of our software from the authenticate Website. Click on the 'Download Now' button and you will get the link of Downloadable software.
                    </Card.Text>
                <Card.Text><span className='text-danger '>Note:</span> <span>Here <a style={{fontSize:"16px",color:"blue"}} href="www.facebook.com/smmunna21">Admin</a> was trying to learn how authentication system work.</span></Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default User;
