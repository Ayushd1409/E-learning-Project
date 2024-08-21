import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Account({ user }) {
  const { isAuth } = UserData();
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out Succesfully");
    navigate("/login");
  };
  return (
    <>
      <Navbar isAuth={isAuth} />
      {user && (
        <div className="hero bg-base-50 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://practicetestgeeks.com/wp-content/uploads/2021/10/id-card.png"
              className="max-w-sm rounded-lg md:px-8 px-32"
            />

            <div className="px-6">
              <h1 className="text-4xl text-center md:text-start mb-10 md:mb-20">
                My Profile
              </h1>
              <h1 className="text-xl md:mt-0 mt-8">Name - {user.name}</h1>
              <h1 className="text-xl mt-2 ">Email - {user.email}</h1>

              {/* <button
                onClick={() => navigate(`/${user._id}/dashboard`)}
                className="btn btn-primary mt-6 text-white text-base"
              >
                <MdDashboard /> Dashboard
              </button> */}

              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="btn btn-primary mt-6 text-white text-base"
              >
                <MdDashboard />Admin Dashboard
              </button>

              <button
                onClick={logoutHandler}
                className="btn btn-error mt-6 mx-5 text-white text-base"
              >
                <IoMdLogOut /> LogOut
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Account;
