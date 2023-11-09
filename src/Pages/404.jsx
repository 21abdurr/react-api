import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold text-slate-600">Oops!</h1>
      <p className="text-slate-500 my-5 text-5xl">Halaman Tidak Ditemukan</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
