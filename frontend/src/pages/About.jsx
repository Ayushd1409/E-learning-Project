import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { UserData } from "../context/UserContext";

function About() {
  const {isAuth} = UserData();
  return (
    <>
      <Navbar isAuth={isAuth}/>

      <div
        className="hero min-h-screen rounded-none"
        style={{
          backgroundImage: "url(https://cdn.wallpapersafari.com/94/44/rFUMHq.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero-content text-black hero min-h-screen text-center flex-col lg:flex-row">
          
          <div className="">
            <h1 className="text-5xl font-bold">About Us</h1>
            <h1 className="text-3xl font-bold mt-12">Welcome to StudyHive!</h1>
            <h1 className="text-xl font-bold mt-12">Developed By Ayush Dewangan </h1>
            <h1 className="text-xl font-bold mt-1">and Astitva Pathak </h1>


            <p className="py-6 w-96 text-justify">
            We believe in the power of knowledge and the potential of every individual to learn, grow, and succeed. Our mission is to make high-quality education accessible to everyone, anywhere, at any time.
            Whether you're here to learn or to teach, StudyHive is the perfect place to embark on your educational journey.
            Join us today and become a part of a dynamic and supportive learning community. 
            </p>
            <Link to='/signup'>
            <button className="btn btn-primary text-white">SignUp for free</button>
            </Link>
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
}

export default About;
