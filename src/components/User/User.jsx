import React, { useContext } from 'react';
import { Card, Image, Spinner } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const User = () => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return <div className='text-center my-5'>
            <Spinner animation="border" variant="warning" />
        </div>
    }
    return (
        <div className='d-flex justify-content-center mt-4 p-2'>
            <Card className='w-sm-100'>
                <div className='text-center my-3'>
                    <Image className='my-image ms-2 img-fluid' src={user?.photoURL} roundedCircle />
                </div>
                <Card.Body>
                    <Card.Title>Welcome, {user.displayName}</Card.Title>
                    <Card.Text>
                        Now you can download all of our software from the authenticate Website. Click on the 'Download Now' button and you will get the link of Downloadable software.
                    </Card.Text>
                    <Card.Text title='Minhazul Abedin Munna'><span className='text-danger'>Note:</span> <span>Here <Link style={{ fontSize: "16px", color: "blue" }} to="https://www.facebook.com/smmunna21" target="_blank">Admin</Link> was trying to learn how authentication system work.</span></Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default User;
