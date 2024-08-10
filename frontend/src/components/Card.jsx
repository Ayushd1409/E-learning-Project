import React from "react";
import banner from "../../public/banner2222.png";
import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardsData from "./CardsData";
import { GiResize } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

function Card() {
  const filterData = list.filter((data) => data.category === "test");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16 md:mt-28">
        <h1 className="font-semibold text-xl pb-2 items-center text-center m-2">
          Features
        </h1>
        <Slider {...settings}>
          <div className="p-3 transition-all duration-200 ease-in-out">
            <div className="card w-92 m-4 card-bordered border-opacity-100 border-gray-950 bg-slate-50 hover:shadow-xl cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110">
              <div className="card-body items-center justify-center">
                <div className="card-actions w-36 h-36 rounded-full items-center justify-center bg-yellow-400 ">
                <GiResize style={{ fontSize: '100px', color: 'white' }} />
                </div>
                <h2 className="card-title text-center justify-center  m-4">Responsive Design</h2>
                <p className="text-center justify-center">If a dog chews shoes whose shoes does he choose?</p>
                
              </div>
            </div>
          </div>

          <div className="p-3 transition-all duration-200 ease-in-out">
            <div className="card w-92 m-4 card-bordered border-opacity-100 border-gray-950 bg-slate-50 hover:shadow-xl cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110">
              <div className="card-body items-center justify-center">
                <div className="card-actions w-36 h-36 rounded-full items-center justify-center bg-yellow-400 ">
                <MdOutlineSecurity  style={{ fontSize: '100px', color: 'white' }} />
                </div>
                <h2 className="card-title text-center justify-center  m-4">Authentication</h2>
                <p className="text-center justify-center">If a dog chews shoes whose shoes does he choose?</p>
                
              </div>
            </div>
          </div>

          <div className="p-3 transition-all duration-200 ease-in-out">
            <div className="card w-92 m-4 card-bordered border-opacity-100 border-gray-950 bg-slate-50 hover:shadow-xl cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110">
              <div className="card-body items-center justify-center">
                <div className="card-actions w-36 h-36 rounded-full items-center justify-center bg-yellow-400 ">
                <FaUserFriends style={{ fontSize: '100px', color: 'white' }} />
                </div>
                <h2 className="card-title text-center justify-center  m-4">Dual User</h2>
                <p className="text-center justify-center">If a dog chews shoes whose shoes does he choose?</p>
                
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 mt-24">
        <h1 className="font-semibold text-xl pb-2 items-center text-center m-2">
          Free Offered Courses
        </h1>
        <Slider {...settings}>
          {filterData.map((item) => (
            <CardsData item={item} key={item.id} />
          ))}
        </Slider>
      </div>

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
    </>
  );
}

export default Card;
