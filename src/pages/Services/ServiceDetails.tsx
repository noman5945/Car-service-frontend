import { Navigate, useNavigate } from "react-router-dom";
import defaultpic from "../../assets/HeroSection-Carwash-cover1.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ServiceSlots } from "./ServiceSlots";
import { useGetSingleServiceQuery } from "../../redux/features/services/servicesApi";
import { Button } from "flowbite-react";
import { CustomLoader } from "../../components/CustomLoader";
import { releaseServiceID } from "../../redux/features/services/serviceSlice";
import { useGetAllSlotsQuery } from "../../redux/features/slots/slotsApi";
export const ServiceDetails = () => {
  const { serviceID } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  if (serviceID === null) {
    return <Navigate to={"/services"} />;
  }
  const {
    data: service,
    isLoading,
    isSuccess,
  } = useGetSingleServiceQuery(serviceID);
  const { data: querySlots, isLoading: slotLoader } = useGetAllSlotsQuery(
    {
      serviceId: serviceID,
    },
    { skip: !isSuccess }
  );
  console.log(querySlots);
  const handleGoBack = () => {
    dispatch(releaseServiceID());
    navigator("/services");
  };
  return (
    <div className=" flex flex-col items-center ">
      {isLoading ? (
        <div className=" flex flex-col items-center h-[500px] justify-center">
          <CustomLoader />
        </div>
      ) : (
        <>
          <div className=" text-center">
            <h1 className=" mt-3 font-bebas text-sky-600 font-bold text-xl md:text-3xl p-1">
              {service?.data?.name}
            </h1>
          </div>
          <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
          <div className=" flex flex-col md:flex-row items-start justify-between md:w-[600px] ">
            <img
              src={defaultpic}
              className=" md:w-[350px] md:h-[300px] rounded-md w-[250px] h-[200px]"
            />
            <div className=" block p-3">
              <h2 className=" text-sky-600 font-bebas font-bold text-xl">
                Price: {service?.data?.price} (Taka)
              </h2>
              <h2 className=" text-sky-600 font-bebas font-bold text-xl">
                Duration: {service?.data?.duration} (hours)
              </h2>
              <div className=" font-normal mt-3">
                <p>{service?.data?.description}</p>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <h1 className=" mt-3 font-bebas text-sky-600 font-bold text-xl md:text-2xl p-1">
              Slots
            </h1>
          </div>
          <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
          {slotLoader ? (
            <div className=" flex flex-col items-center  justify-center h-[50px]">
              <CustomLoader />{" "}
            </div>
          ) : (
            <>
              <ServiceSlots items={querySlots?.data} />
            </>
          )}

          <div className=" my-2 p-3">
            <Button onClick={handleGoBack}>Back</Button>
          </div>
        </>
      )}
    </div>
  );
};
