import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GameHex | Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <h2 className="text-3xl font-bold">This is Home</h2>
    </div>
  );
};

export default Home;
