import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  const loadedData = useLoaderData();

  const findData = loadedData.find((data) => data.id == id);
  console.log(findData);

  return (
    <div className="space-y-3 card">
      <img className="w-full h-[500px]" src={findData.image} alt="" />
      <p className="text-justify">{findData.details_description}</p>
      <h2 className="text-lg font-semibold">{findData.why_choose_us}</h2>
      <p>
        <span className="text-base font-semibold">Experience:</span>{" "}
        {findData.experience}{" "}
      </p>
      <p>
        <span className="text-base font-semibold">DiverseServices:</span>{" "}
        {findData.diverseServices}.{" "}
      </p>
      <p>
        <span className="text-base font-semibold">PassionForGaming:</span>{" "}
        {findData.passionForGaming}{" "}
      </p>
      <p>
        <span className="text-base font-semibold">AttentionToDetail:</span>{" "}
        {findData.attentionToDetail}{" "}
      </p>
      <p>
        <span className="text-base font-semibold">CommunityBuilding:</span>{" "}
        {findData.communityBuilding}{" "}
      </p>
      <p>
        <span className="text-base font-semibold">Innovation:</span>{" "}
        {findData.innovation}{" "}
      </p>
    </div>
  );
};

export default ServiceDetails;
