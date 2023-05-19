import React, { useState } from "react";

const AllToys = () => {
  return (
    <div>
      <div className='w-1/2 mx-auto text-center space-y-4 mb-6 '>
        <h1 className='text-center text-4xl font-bold tracking-wide'>
          My Toys
        </h1>
        <p>
          {" "}
          MyToys allows you to curate and organize your very own toy shop. Add
          your favorite toys Discover the joy of building your personal toy
          empire, all in one place.
        </p>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <div className='flex items-center justify-between py-4 bg-white '>
          <div></div>
          <label for='table-search' className='sr-only'>
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <input
              type='text'
              id='table-search-users'
              className='block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search for users'
            />
          </div>
        </div>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-all-search'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label for='checkbox-all-search' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </th>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Position
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-table-search-1'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label for='checkbox-table-search-1' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
              >
                <img
                  className='w-10 h-10 rounded-full'
                  src='/docs/images/people/profile-picture-1.jpg'
                  alt='Jese image'
                />
                <div className='pl-3'>
                  <div className='text-base font-semibold'>Neil Sims</div>
                  <div className='font-normal text-gray-500'>
                    neil.sims@flowbite.com
                  </div>
                </div>
              </th>
              <td className='px-6 py-4'>React Developer</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-500 mr-2'></div>{" "}
                  Online
                </div>
              </td>
              <td className='px-6 py-4'>
                <a
                  href='#'
                  type='button'
                  onClick={() => setModalOpen(!modalOpen)}
                  data-modal-target='editUserModal'
                  data-modal-show='editUserModal'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Edit user
                </a>
              </td>
            </tr>
            <div>
              {/*<tr className='border-b text-gray-500 bg-base-200'>
                <td className='w-4 font-bold p-4'>{++i}</td>
                <td className='flex items-center justify-center py-4 text-gray-900 whitespace-nowrap'>
                  <img
                    className='w-16 h-16 rounded-full'
                    src={picture}
                    alt='Jese image'
                  />
                  <div className='pl-3'>
                    <div className='text-base font-semibold'>{sellerName}</div>
                    <div className='font-normal text-gray-500'>
                      {sellerEmail}
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4'>{toyName}</td>
                <td className='px-6 py-4'>{category}</td>
                <td className='px-6 py-4'>${price}</td>
                <td className='px-6 py-4'>
                  {/*<!-- Modal toggle -->*/}
              {/*<a
                    href='#'
                    type='button'
                    onClick={() => setModalOpen(true)}
                    className='font-medium text-[#08a5eb] hover:underline'
                  >
                    Edit
                  </a>
                </td>
              </tr>*/}
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
