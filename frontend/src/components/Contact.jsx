import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { UserData } from '../context/UserContext';
import banner from "../../public/banner2222.png";
function Contact() {
    const { isAuth } = UserData();
  return (
    <>
    <Navbar isAuth={isAuth}/>

    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="mt-6 md:mt-32 md:w-1/2">
          <img src={banner} className="w-90 h-92" alt="" />
        </div>



    <div className="w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold items-center text-center">
              Contact
            </h1>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <input
              type="text"
              placeholder="Write your query..."
              className="input input-bordered flex input-lg w-full max-w h-28"
            />
          </div>

          <div className="items-end text-right">
            {/* <Link to='/signup'> */}
            <button className="text-white btn btn-primary mt-6">
              Get Started
            </button>
            {/* </Link> */}
          </div>
        </div>
        </div>

    <Footer/>
    
    
    </>
  )
}

export default Contact