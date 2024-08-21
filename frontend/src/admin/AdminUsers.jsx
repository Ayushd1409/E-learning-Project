import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../main";
import Layout from "./Layout";
import toast from "react-hot-toast";
import { UserData } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminUsers({ user }) {
    const { isAuth } = UserData();
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);


  const updateRole = async (id) => {
    if (confirm("are you sure you want to update this user role")) {
      try {
        const { data } = await axios.put(
          `${server}/api/user/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        toast.success(data.message);
        fetchUsers();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };



  return (
    <>
    <Navbar isAuth={isAuth}/>

    <Layout>
    <h1 className="text-center pt-32 md:pt-28 mb-20 text-3xl">ALL USERS</h1>
        
    
      <div className="hero-content ">
        
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Update Role</th>
              </tr>
            </thead>

            {users &&
              users.map((e, i) => (
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.role}</td>
                    <td>
                    <button
                      onClick={() => updateRole(e._id)}
                      className="btn btn-warning"
                    >
                      Update Role
                    </button>
                  </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
      
    </Layout>

    <Footer/>
    </>
  );
}

export default AdminUsers;
