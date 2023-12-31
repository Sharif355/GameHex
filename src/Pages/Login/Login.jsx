import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { googleSingIn, logIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password does not match!",
          });
        } else if (errorCode === "auth/user-not-found") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User not Found,please check your mail again!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
          });
        }
        console.log("login error", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSingIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="mt-20 flex justify-center">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700  border shadow-md p-3">
        <h4 className="block text-center font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Sign in
        </h4>
        <p className="mt-1 block font-sans text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter your details to Sign in.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="  "
                name="email"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="password"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
          </div>

          <button
            className="mt-6 block w-full select-none rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all btn"
            type="submit"
            data-ripple-light="true"
          >
            Sign in
          </button>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Don't have an account?
            <a
              className="font-medium text-pink-500 transition-colors hover:text-blue-700"
              href="/signUp"
            >
              Sign up
            </a>
          </p>
          <hr className="my-5" />
          <div className="flex  justify-center">
            <button onClick={handleGoogleSignIn} className="btn rounded-2xl">
              <img
                className="w-10"
                src="https://i.ibb.co/wKShrTB/7123025-logo-google-g-icon.png"
                alt=""
              />
              Continue With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
