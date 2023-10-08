import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Services from "./Services";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  return (
    <div>
      <Helmet>
        <title>GameHex | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-full">
        {loadedData?.map((data) => (
          <Services key={data.id} data={data}></Services>
        ))}
      </div>
      <h2 className="text-3xl font-bold">This is Home</h2>
    </div>
  );
};

export default Home;
