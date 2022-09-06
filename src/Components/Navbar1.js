import React from 'react'
import "../App.css";
// import {Link} from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
    <nav className='main-nav' >
        {/* 1st logo part */}
        <div className='logo'>
            <h1>
                <span>S</span>port
                <span>E</span>vents
            </h1>
        </div>
        {/* menu part */}
        <div className='menu-link'>
            <ul>
                <ol>
                   <h3 ><a href='/'> Home </a></h3> 
                </ol>
                {/* <ol>
                   <h3 ><a href='/Details'>Details </a></h3> 
                </ol> */}
                <ol>
                  <h3> <a href='/about'>About </a></h3>
                </ol>
                <ol>
                  <h3> <a href='/contactus'>ContactUs </a></h3>
                </ol>
</ul></div></nav>
    </>
  );
};

export default Navbar1;
