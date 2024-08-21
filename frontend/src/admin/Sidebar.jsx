import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";

function Sidebar() {
  return (
    <>
    <div className='md:mt-24 mt-20 bg-slate-200'>
    
    <div className="bg-gray-800 text-white w-16 md:w-64 min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-12 hidden md:block">Dashboard</h2>
      <ul>
        <li className=" mb-10 md:mb-6 md:mt-0 mt-8">
          <Link to="/admin/dashboard" className="text-lg">
          <div className='block md:hidden'>
          <IoHome />
          </div>
           <span className='hidden md:block'>Home</span>
          </Link>
        </li>


        <li className="mb-12 md:mb-6">
          <Link to="/admin/course" className="text-lg">
            <div className='block md:hidden'>
            <FaRegEdit />
            </div>
            <span className='hidden md:block'>Edit Course</span>
          </Link>
        </li>



        <li className="mb-12 md:mb-6">
          <Link to="/admin/users" className="text-lg">
            <div className='block md:hidden'>
            <FaUser />
            </div>
            
            <span className='hidden md:block'>Users</span>
          </Link>
        </li>

        <li className="mb-12 md:mb-6">
          <Link to="/account" className="text-lg">
            <div className='block md:hidden'>
            <SlLogout />
            </div>
            
            <span className='hidden md:block'>Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Sidebar