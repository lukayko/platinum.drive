import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3500);

  return (
    <div className="mt-32 mb-16 w-[90%] h-[60vh] mx-auto text-tertiary">
      <h1 className="text-2xl font-bold pb-4 md:pb-2 md:text-4xl">
        Oops, it looks like the page you're trying to access doesn't exist.
      </h1>
      <p className="text-lg md:text-xl">
        Please wait, shortly you'll be redirected back to the home page.
      </p>
    </div>
  );
};

export default ErrorPage;
