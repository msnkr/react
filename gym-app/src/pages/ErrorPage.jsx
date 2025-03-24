import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh px-20 text-center">
      <div>
        <p className="text-8xl font-semibold text-gray-500">404</p>
      </div>
      <p>
        There was a problem with this page. Click{" "}
        <span className="font-semibold">
          <Link to={"/musckles/"}>here</Link>
        </span>{" "}
        to go back home
      </p>
    </div>
  );
};

export default ErrorPage;
