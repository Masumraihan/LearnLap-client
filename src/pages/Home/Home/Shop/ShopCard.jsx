import { Rating } from "@smastrom/react-rating";
import React, { useContext } from "react";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ShopCard = ({ toy, getSingleToy }) => {
  const { _id, picture, price, rating, toyName } = toy;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    Swal.fire({
      title: "Go To Login Page",
      text: "You have to log in first to view details!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#08a5eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login", { state: location });
      }
    });
  };

  return (
    <div
      data-aos='fade-up'
      data-aos-anchor-placement="bottom-bottom"
      className='w-full rounded-lg shadow p-8 bg-base-200'
    >
      <img
        className=' h-48 w-full rounded-lg hover:scale-105 duration-500 ease-in-out transition-transform'
        src={picture}
        alt='product image'
      />
      <div className=' py-5 space-y-5'>
        <div className='flex items-center justify-between my-5'>
          <h5 className='text-2xl text-start font-semibold'>{toyName}</h5>
          <div className='flex gap-3'>
            <span className=' text-sm tracking-wide text-[#08a5eb]'>
              Rating:
            </span>
            <Rating style={{ maxWidth: "100px" }} value={rating} readOnly />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 tracking-tighter'>
            Price : ${price}
          </span>
          {user ? (
            <label
              htmlFor='my-modal-5'
              role='button'
              onClick={() => getSingleToy(toy)}
              className='btn btn-regular'
            >
              View Details
            </label>
          ) : (
            <button onClick={handleNavigate} className='btn btn-regular'>
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
