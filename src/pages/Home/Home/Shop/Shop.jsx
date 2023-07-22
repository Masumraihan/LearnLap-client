import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "./ShopCard";
import ToyDetailsModal from "../../../../components/ToyDetailsModal/ToyDetailsModal";

const Shop = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Math");
  const [singleToy, setSingleToy] = useState({});


  const getSingleToy = (toy) => {
    setSingleToy(toy);
  };

  useEffect(() => {
    fetch(
      `https://learlab-server-assignement.vercel.app/toys?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category]);

  return (
    <div className='container mx-auto text-center my-20 px-3 md:px-0'>
      <div className='divider text-gray-400'>Let&apos; Shopping</div>
      <h1 className='text-4xl text-center font-bold mb-10'>
        Shop by Category
      </h1>
      <Tabs>
        <TabList>
          <Tab style={{ color: "#08a5eb" }} onClick={() => setCategory("Math")}>
            Math Toys
          </Tab>
          <Tab
            style={{ color: "#08a5eb" }}
            onClick={() => setCategory("Science")}
          >
            Science Toys
          </Tab>
          <Tab
            style={{ color: "#08a5eb" }}
            onClick={() => setCategory("Engineer")}
          >
            Engineer Toys
          </Tab>
        </TabList>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {toys.map((toy) => (
            <ShopCard key={toy._id} toy={toy} getSingleToy={getSingleToy} />
          ))}
        </div>
      </Tabs>
      <ToyDetailsModal singleToy={singleToy} />
    </div>
  );
};

export default Shop;
