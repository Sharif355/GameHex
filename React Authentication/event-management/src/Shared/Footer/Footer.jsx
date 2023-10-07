const Footer = () => {
  return (
    <div>
      <footer className=" flex flex-col footer-center  bg-slate-200 text-primary-content mt-20 py-5">
        <div className="flex border w-full flex-col md:flex-row gap-2 items-center justify-around">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-16"
                src="https://i.ibb.co/YtqYcXm/Gaming-logo-template-on-transparent-background-PNG-removebg-preview.png"
                alt=""
              />
              <p className="text-3xl font-bold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent bg-clip-text">
                GAMEHEX
              </p>
            </div>
            <nav>
              <div className="flex flex-col gap-2 text-black text-base">
                <p>
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent bg-clip-text">
                    GAMEHEX
                  </span>{" "}
                  Gaming Ltd.
                </p>
                <p>Providing Reliable Services Since 2002.</p>
                <p>All Rights Reserved to &copy;GAMEHEX. </p>
              </div>
            </nav>
          </div>
          <div>
            <form>
              <header className="footer-title text-black mt-4 text-center md:text-left">
                Newsletter
              </header>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-transparent text-white absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
