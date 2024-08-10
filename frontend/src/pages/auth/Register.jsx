import React, { useState } from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';

function Register() {
  const {isAuth} = UserData();
  const navigate = useNavigate()
  const{ btnLoding, registerUser } = UserData()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler=async(e)=>{
    e.preventDefault()
    await registerUser(name, email, password, navigate);
  }
  return (
    <>
    <Navbar isAuth={isAuth}/>

    <div className="hero bg-slate-50 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:px-16 px-0">
            <h1 className="text-5xl font-bold">Register!! SignUp</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:mt-0 mt-7">
            <form onSubmit={submitHandler} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                  required
                />
                <label className="label mt-8">
                  <a href="#" className="label-text-alt flex justify-between w-full">
                    Forgot password?
                    <Link to='/login'>
                      <span className="cursor-pointer underline text-blue-500 hover:text-blue-800">Back to Login</span>
                    </Link>                  </a>
                </label>
              </div>
              <div className="form-control">
                <button type='submit' disabled={btnLoding} className="btn btn-primary text-white">
                {btnLoding ? "Please Wait..." : "SignUp"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    <Footer/>
    </>
  )
}

export default Register