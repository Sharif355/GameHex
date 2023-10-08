import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  const loadedData = useLoaderData();

  const findData = loadedData.find((data) => data.id == id);
  console.log(findData);

  return (
    <div>
      <h2>{findData.name}</h2>
      <img src={findData.image} alt="" />
    </div>
  );
};

export default ServiceDetails;
