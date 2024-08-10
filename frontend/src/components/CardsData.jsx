import React from "react";

function CardsData({ item }) {
  return (
    <>
      <div className="p-3">
        <div className="card bg-base-100 w-92 shadow-xl mt-3">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-primary text-white">
                {item.category}
              </div>
            </h2>
            <p>{item.time}</p>
            <div className="card-actions justify-between mt-3">
              <div className="badge badge-outline p-3">{item.price}</div>
              <div className="badge badge-outline p-3 cursor-pointer hover:bg-blue-600 hover:text-white duration-300">
                Products
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsData;
