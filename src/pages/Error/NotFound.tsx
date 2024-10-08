import { Button } from "flowbite-react";
import { ErrorSVGIConn } from "../../components/Icon/ErrorSVGIConn";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className=" flex flex-col items-center h-[700px] justify-center">
      <div className=" flex flex-col items-center gap-2 rounded-md shadow-lg p-3">
        <ErrorSVGIConn />

        <h2 className="  text-red-700 font-bold text-2xl">404 Not found</h2>
        <p className=" font-bold">Seems like the page doesn't exist....</p>
        <Button color={"red"} onClick={handleGoHome}>
          Go Home
        </Button>
      </div>
    </div>
  );
};
