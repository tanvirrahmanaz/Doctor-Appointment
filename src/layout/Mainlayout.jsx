import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Mainlayout = () => {
    return (
       <>
       <Navbar/>
       <Outlet />
       <Footer />
       </>
    );
};

export default Mainlayout;