import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Services from "./Services";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Review from "./Review";
import Stream from "./Stream";

const Home = () => {
  const [seeAll, setSeeAll] = useState(false);

  const loadedData = useLoaderData();
  console.log(loadedData);

  return (
    <div>
      <Helmet>
        <title>GameHex | Home</title>
      </Helmet>
      <Banner></Banner>
      <h1 className="text-3xl font-bold text-center py-5">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-full">
        {seeAll
          ? loadedData.map((data) => (
              <Services key={data.id} data={data}></Services>
            ))
          : loadedData
              .slice(0, 6)
              .map((data) => <Services key={data.id} data={data}></Services>)}
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setSeeAll(!seeAll)}
          className="btn normal-case bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white  "
        >
          {seeAll ? "See Less" : "See All"}
        </button>
      </div>
      <Stream></Stream>
      <Review></Review>
    </div>
  );
};

export default Home;
