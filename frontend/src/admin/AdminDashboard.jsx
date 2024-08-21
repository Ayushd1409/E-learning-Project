import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './Layout';
import { UserData } from '../context/UserContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { server } from '../main';

function AdminDashboard({user}) {
    const { isAuth } = UserData();
    const navigate = useNavigate();

    if(user && user.role!== "admin") return navigate("/");

    const [stats, setStats] = useState([])

    async function fetchStats(){
        try {
            const {data} = await axios.get(`${server}/api/stats`,{
                headers:{
                    token: localStorage.getItem("token"),
                }
            });

            setStats(data.stats);
        } catch (error) {
            console
        }
    }


    useEffect(()=>{
        fetchStats();
    },[]);


  return (
    <>
    <Navbar isAuth={isAuth} />
    <div className=''>
        
        <Layout>
            <div className='md:pt-48 pt-32 md:ml-24 '>
                <div className='md:ml-5 ml-6 text-center bg-yellow-400 p-2 rounded-xl font-semibold text-white'>
                    <p>Total Courses</p>
                    <p>{stats.totalCourses}</p>
                </div>
                <div className='mt-5 md:ml-5 ml-6  text-center bg-yellow-400 p-2 rounded-xl font-semibold text-white'>
                    <p>Total Lectures</p>
                    <p>{stats.totalLectures}</p>
                </div>
                <div className='mt-5 md:ml-5 md:w-32  ml-6 text-center bg-yellow-400 p-2 rounded-xl font-semibold text-white'>
                    <p>Total Users</p>
                    <p>{stats.totalUsers}</p>
                </div>
            </div>
        </Layout>
              
        
    </div>

    <Footer />
    
    </>
  )
}

export default AdminDashboard