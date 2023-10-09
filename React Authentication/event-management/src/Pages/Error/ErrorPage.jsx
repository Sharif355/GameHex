import { BsEmojiFrown } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-80">
      <BsEmojiFrown className="text-9xl text-red-500 " />
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-2xl font-semibold">Page not found</p>
      <p>The page you looking for doesn&apos;t exist!</p>
    </div>
  );
};

export default ErrorPage;
