import React, { useEffect, useState } from "react";
import SingleToyRow from "./SingleToyRow";
import ToyDetailsModal from "../../components/ToyDetailsModal/ToyDetailsModal";
import { ClipLoader } from "react-spinners";

const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const [allToys, setAllToys] = useState([]);
  const [singleToy, setSingleToy] = useState({});

  const loadSingToy = (id) => {
    fetch(`https://learlab-server-assignement.vercel.app/toyDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleToy(data);
      });
  };

  useEffect(() => {
    fetch(
      `https://learlab-server-assignement.vercel.app/allToys?searchText=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, [searchText]);

  return (
    <div className='my-10 container mx-auto'>
      <div className='md:w-1/2 mx-auto text-center space-y-4 mb-6 '>
        <h1 className='text-center text-4xl font-bold tracking-wide'>
          Toys Galore: Find the Perfect Playmate
        </h1>
      </div>

      <form className='lg:w-1/3 md:w-1/2 mx-auto mb-10'>
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>

          <input
            type='search'
            id='default-search'
            onChange={(e) => setSearchText(e.target.value)}
            className='block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 border-[#08a5eb] focus:ring-2 focus:ring-[#08a5eb] focus:outline-none'
            placeholder='Search Toys...'
            required
          />
        </div>
      </form>
      {allToys.length === 0 && (
        <div className='text-center'>
          <ClipLoader color='#08a5eb' />
        </div>
      )}

      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, i) => (
              <SingleToyRow
                key={toy._id}
                toy={toy}
                i={i}
                loadSingToy={loadSingToy}
              />
            ))}
          </tbody>
        </table>
      </div>
      <ToyDetailsModal singleToy={singleToy} />
    </div>
  );
};

export default AllToys;
