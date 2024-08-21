import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";

function Login() {
  const {isAuth}=UserData();
  const navigate = useNavigate()
  const{ btnLoding, loginUser } = UserData()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {fetchMyCourse} = CourseData()
  const submitHandler=async(e)=>{
    e.preventDefault()
    await loginUser(email, password, navigate, fetchMyCourse);
  }
  return (
    <>
      <Navbar isAuth={isAuth} />

      <div className="hero bg-slate-50 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:px-16 px-0 ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shadow-2xl shrink-0 md:mt-0 mt-7">
            <form onSubmit={submitHandler} className="card-body">
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
                  <a
                    href="#"
                    className="label-text-alt flex justify-between w-full"
                  >
                    Forgot password?
                    <Link to="/signup">
                      <span className="cursor-pointer underline text-blue-500 hover:text-blue-800">
                        SignUp
                      </span>
                    </Link>
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button disabled={btnLoding} type="submit" className="btn btn-primary text-white">
                  {btnLoding ? "Please Wait..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
