import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserData } from "../context/UserContext.jsx";
import { CourseData } from "../context/CourseContext.jsx";
import { server } from "../main.jsx";
import axios from "axios";
import Loading from "../components/Loading.jsx";
import toast from "react-hot-toast";
function CourseDescription({ user }) {
  const { isAuth } = UserData();
  const { id } = useParams();
  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();
  const navigate = useNavigate();
  const {fetchUser}= UserData();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchCourse(id);
  }, [id]);

  // useParams.id

  // const checkoutHandler = async () => {
  //   const token = localStorage.getItem("token");
  //   setLoading(true);

  //   const {
  //     data: { order },
  //   } = await axios.post(
  //     `${server}/api/course/checkout/${id}`,
  //     {},
  //     {
  //       headers: {
  //         token,
  //       },
  //     }
  //   );

  //   const options = {
  //     key: "rzp_test_yOMeMyaj2wlvTt", // Enter the Key ID generated from the Dashboard
  //     amount: order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     currency: "INR",
  //     name: "E learning", //your business name
  //     description: "Learn with us",
  //     order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

  //     handler: async function (response) {
  //       const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  //         response;

  //       try {
  //         const { data } = await axios.post(
  //           `${server}/api/verification/${id}`,
  //           {
  //             razorpay_order_id,
  //             razorpay_payment_id,
  //             razorpay_signature,
  //           },
  //           {
  //             headers: {
  //               token,
  //             },
  //           }
  //         );

  //         await fetchUser();
  //         await fetchCourses();
  //         // await fetchMyCourse();
  //         toast.success(data.message);
  //         setLoading(false);
  //         navigate(`/payment-success/${razorpay_payment_id}`);
  //       } catch (error) {
  //         toast.error(error.response.data.message);
  //         setLoading(false);
  //       }
  //     },
  //     theme: {
  //       color: "#8a4baf",
  //     },
  //   };
  //   const razorpay = new window.Razorpay(options);

  //   razorpay.open();
  // };
  return (
    <>
      <Navbar isAuth={isAuth} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {course && (
            <div className="hero bg-base-50 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={`${server}/${course.image}`}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-4xl mb-3 font-bold">{course.title}</h1>
                  <p className="py-2">Instructor: {course.createdBy}</p>
                  <p className="py-2">Duration: {course.duration}</p>
                  <p className="py-2">Duration: Rs.{course.price}</p>
                  {user && user.subscription.includes(course._id) ? (
                    // <Link to='/payment-success/:id'>
                    <button
                      onClick={() => navigate(`/course/study/${course._id}`)}
                      className=" w-full btn text-white btn-primary"
                    >
                      Study
                    </button>
                    // </Link >
                  ) : (
                    // <Link to='/payment-success/:id'>
                    <button
                      // onClick={checkoutHandler}
                      onClick={() => navigate(`/payment-success/${course._id}`)}
                      className="text-white w-full btn btn-primary"
                    >
                      Buy Now
                    </button>
                    // </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </>
  );
}

export default CourseDescription;
