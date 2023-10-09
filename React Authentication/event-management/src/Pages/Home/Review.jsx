import { FaStar, FaRegStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-center font-bold">
        WHAT PEOPLE’S SAY ABOUT
        <span className=" font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent bg-clip-text uppercase ml-2">
          GameHex
        </span>
      </h1>
      <div className="flex flex-col md:flex-col lg:flex-row gap-3 justify-center items-center">
        <div className="relative shadow-lg flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 p-2 my-10">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
            <img
              src="https://i.ibb.co/7C8FXBq/user1.jpg"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Andrew David
                </h5>
                <div className="5 flex items-center gap-0">
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                </div>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                Marketing Head @ Walton.
              </p>
            </div>
          </div>
          <div className="mb-6 p-0">
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              &quot; I recently used GameHex for my gaming convention, and I was
              pleasantly surprised by the experience. The website made it easy
              to browse through different options for event management services.
              The team behind GameHex was responsive and helped me plan a
              memorable gaming event. The only reason I&apos;m not giving it 5
              stars is because I wish there were more customization options for
              event themes. Overall, a great platform for gamers looking to
              organize events! &quot;
            </p>
          </div>
        </div>
        <div className="relative shadow-lg flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 p-2 my-10">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
            <img
              src="https://i.ibb.co/QjMGJYg/user3.jpg"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Tania Andrew
                </h5>
                <div className="5 flex items-center gap-0">
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaRegStar className="text-yellow-400"></FaRegStar>
                </div>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                CEO @ Genera.
              </p>
            </div>
          </div>
          <div className="mb-6 p-0">
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              &quot; GameHex has been a game-changer for me! As a board game
              enthusiast, I wanted to host a gaming convention for my local
              community. The website&apos;s user-friendly interface and a wide
              range of event management features made the whole process a
              breeze. The GameHex team provided excellent support throughout,
              and my event was a huge success. I highly recommend GameHex to
              anyone in the gaming community looking to organize events.&quot;
            </p>
          </div>
        </div>
        <div className="relative shadow-lg flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 p-2 my-10">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
            <img
              src="https://i.ibb.co/f2pgZfr/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Andrew Charlie
                </h5>
                <div className="5 flex items-center gap-0">
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                </div>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                Marketing Lead @ Tencent.
              </p>
            </div>
          </div>
          <div className="mb-6 p-0">
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              &quot;I&apos;ve been using GameHex for a while now to manage
              eSports tournaments, and it&apos;s been a valuable tool for my
              business. The website offers an array of services tailored to the
              needs of gaming conventions and tournaments. The registration and
              payment processing features have saved me a lot of time, and the
              GameHex team&apos;s expertise in the gaming industry is evident in
              their service. My only suggestion would be to enhance the
              reporting and analytics section.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
