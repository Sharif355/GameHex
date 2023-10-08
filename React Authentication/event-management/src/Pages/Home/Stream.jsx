import { FaPlayCircle } from "react-icons/fa";

const Stream = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center font-bold">Our Streaming</h1>
      <p className="text-base text-slate-400 text-center py-2">
        We also Provide Streaming Services for both Organizer & Gamer&apos;s to
        stream their Events across world.
      </p>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/jkVDd4Q/Stream.png" className="w-full" />
          <FaPlayCircle className="text-6xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/jkVDd4Q/Stream.png" className="w-full" />
          <FaPlayCircle className="text-6xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/jkVDd4Q/Stream.png" className="w-full" />
          <FaPlayCircle className="text-6xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/jkVDd4Q/Stream.png" className="w-full" />
          <FaPlayCircle className="text-6xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
