import React from 'react';
import web from "../src/images/cafe.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return (
    <>
    <Common 
     name="Welcome To Food Mania Restaurent"
     imgsrc={web} 
     visit="/contact" 
     btname="Order Now"
     />
     </>
    );
};
export default Home;