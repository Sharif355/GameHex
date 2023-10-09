import Particles from "react-tsparticles";
import particleOptions from "../ParticlesConfig/ParticleConfig";

const ParticleBg = () => {
  return (
    <div>
      <Particles params={particleOptions}></Particles>
    </div>
  );
};

export default ParticleBg;
