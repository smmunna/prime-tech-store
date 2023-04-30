import React from 'react';
import Header from "../components/Header/Header";
import { Outlet } from 'react-router-dom';
import './Main.css';

const Main = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Main;
