import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetch("https://learlab-server-assignement.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGalleryImages(data.slice(0,20));
      });
  }, []);

  return (
    <div className='my-20 container mx-auto '>
      <div className='divider text-gray-400'>Gallery</div>
      <h1 className='text-4xl text-center font-bold mb-10'>
        Exploring the Magic
      </h1>
      <div className=' w-ful grid grid-cols-2 md:grid-cols-4 gap-4 mx-3 md:mx-0'>
        {galleryImages.map((image) => (
          <div data-aos='fade-up' data-aos-anchor-placement="bottom-bottom" key={image._id} className='card w-full duration-700 ease-in-out hover:scale-110 transition-transform bg-gray-500 h-32 md:h-60 shadow-xl image-full'>
            <figure className="w-full">

              <img
                className="w-full h-full"
                src={image.picture}
                alt={image.toyName}
              />
            </figure>
            <div className='card-body duration-700 text-center ease-in-out delay-100 opacity-0 transition-opacity hover:opacity-100'>
              <h2 className='text-xl font-bold text-center'>{image.toyName}</h2>
              <p>{image.sellerName}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gallery;
