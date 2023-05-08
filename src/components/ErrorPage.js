import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorInfo = useRouteError();

  const { data, status, statusText } = errorInfo;
  console.log(errorInfo);
  return (
    <div>
      <h1>Oops something went wrong 😑</h1>
      <h1>{data}</h1>
      <h1>{status + " - " + statusText}</h1>
    </div>
  );
};

export default ErrorPage;
