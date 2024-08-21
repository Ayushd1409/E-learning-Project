import React, { useEffect, useState } from "react";
import { UserData } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { server } from "../main";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import toast from "react-hot-toast";

function Lecture({ user }) {
  const { isAuth } = UserData();
  const [lectures, setLectures] = useState([]);

  const [selectedLectureIndex, setSelectedLectureIndex] = useState(0);

  const [lecture, setLecture] = useState();
  const [loading, setLoading] = useState(true);
  const [lecLoading, setLecLoading] = useState(false);
  const [show, setShow] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle]= useState("");
  const [description, setDescription] =useState("");
  const [video,setvideo]= useState("");
  const [videoPrev,setVideoPrev]= useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  if(user && user.role !== "admin" && !user.subscription.includes(params.id)) return navigate('/');
  async function fetchLectures() {
    try {
      const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLectures(data.lectures);
      
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function fetchLecture(id) {
    setLecLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/lecture/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLecture(data.lecture);
      setLecLoading(false);
    } catch (error) {
      console.log(error);
      setLecLoading(false);
    }
  }

  const changeVideoHandler = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader()

    reader.readAsDataURL(file);

    reader.onloadend = ()=>{
      setVideoPrev(reader.result);
      setvideo(file);
    }
  }
  const submitHandler = async(e) => {
    setBtnLoading(true);
    e.preventDefault()
    const myForm = new FormData()

    myForm.append("title",title)
    myForm.append("description",description)
    myForm.append("file",video)

    try {
      const {data} = await axios.post(`${server}/api/course/${params.id}`, myForm, {
        headers:{
          token: localStorage.getItem("token"),
        },
      });

      toast.success(data.message)
      setBtnLoading(false)
      setShow(false)
      fetchLectures();
      setTitle("");
      setDescription("");
      setvideo("");
      setVideoPrev("");
    } catch (error) {
      toast.error(error.response.data.message)
      setBtnLoading(false)
    }

  };


  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this lecture")) {
      try {
        const { data } = await axios.delete(`${server}/api/lecture/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchLectures();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };




  useEffect(() => {
    fetchLectures();
  }, []);
  return (
    <>
      <Navbar isAuth={isAuth} />

      {loading ? (
        <Loading />
      ) : (
        <>
          {lectures.length > 0 ? (
            <>
              <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row ">
                  <video
                    src={`${server}/${lectures[selectedLectureIndex].video}`}
                    width={"100%"}
                    controls
                    controlsList="nodownload noremoteplayback"
                    className="max-w-5xl rounded-lg shadow-2xl md:w-3/4"
                    disablePictureInPicture
                    disableRemotePlayback
                    autoPlay
                  ></video>
                  <div className="md:w-1/2 md:mx-4">
                    {user && user.role === "admin" && (
                      // <h1 className="text-5xl font-bold "> LECTURES </h1>

                      <button onClick={()=>setShow(!show)} className="mb-6 btn btn-primary text-white w-full text-2xl mt-2">{show ? "Close":"Add lecture"}</button>
                    )}
                    {show && (
                      <div>
                        <h1 className="text-2xl font-bold mt-3">ADD LECTURES </h1>
                        <form onSubmit={submitHandler}>
                          <label className="form-control w-full max-w-xs">
                            <div className="label">
                              <span className="label-text">
                                Title
                              </span>
                            </div>
                            <input
                              type="text"
                              value={title}
                              onChange={(e)=>setTitle(e.target.value)}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                          <label className="form-control w-full max-w-xs">
                          <div className="label">
                              <span className="label-text">
                                Description
                              </span>
                            </div>
                          <textarea
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            className="textarea textarea-bordered textarea-md w-full max-w-xs"
                          ></textarea>
                          </label>
                          <input type="file" onChange={changeVideoHandler} className="mt-3 file-input file-input-bordered w-full max-w-xs text-sm" />
                          {
                            videoPrev && <video src={videoPrev} alt="" width={300} controls></video>
                          }
                          <button disabled={btnLoading} type="submit" className="mt-3 btn btn-primary text-white">{btnLoading ? "Please Wait...":"Add"}</button>

                        </form>
                      </div>
                    )}

                    {
                       lectures.map((e,i)=>(
                        <>
                          <div onClick={()=>setSelectedLectureIndex(i)} className={`${selectedLectureIndex === i ? "active" : ""} cursor-pointer mt-3 rounded-lg p-2 mb-1 bg-slate-100 text-xl text-black font-"Poppins" hover:bg-yellow-400 font-medium hover:text-white text-center justify-center outline hover:outline-black`}>
                            {i+1}.{e.title}
                          </div>
                          {/* {
                            user && user.role==="admin" && (<button className="btn bg-red-600 text-white">Delete {e.title}</button>)
                          } */}
                          <button className="btn bg-red-600 w-full text-white mt-2 hover:bg-red-800 font-normal" onClick={() => deleteHandler(e._id)}>Delete {e.title}</button>
                        </>
                      )) 
                    }
                  </div>
                </div>
              </div>
            </>
          ) : (

<div className="hero min-h-screen flex items-center justify-center flex-col">
          <h1 className="text-5xl mb-10">Please select a video</h1>
          {user && user.role === "admin" && (
            <div>
              <h1 className="text-2xl font-bold mt-3 ">ADD LECTURES</h1>
              <form onSubmit={submitHandler}>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Title</span>
                  </div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Description</span>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="textarea textarea-bordered textarea-md w-full max-w-xs"
                  ></textarea>
                </label>
                <input
                  type="file"
                  onChange={changeVideoHandler}
                  className="mt-3 file-input file-input-bordered w-full max-w-xs text-sm"
                />
                {videoPrev && (
                  <video src={videoPrev} alt="" width={300} controls></video>
                )} <br />
                <button
                  disabled={btnLoading}
                  type="submit"
                  className="mt-3 btn btn-primary text-white"
                >
                  {btnLoading ? "Please Wait..." : "Add"}
                </button>
              </form>
            </div>
          )}
        </div>            
          )}
        </>
      )}

      <Footer />
    </>
  );
}

export default Lecture;
