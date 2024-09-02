import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { servicesDesc } from "../../constants";
import { ItemCard } from "../../components/ItemCard";
import { useGetInitalServicesQuery } from "../../redux/features/services/servicesApi";
import { CustomLoader } from "../../components/CustomLoader";
import { TService } from "../../types/service.type";
import { useAppDispatch } from "../../redux/hooks";
import { setServiceID } from "../../redux/features/services/serviceSlice";

export const ServiceDemoSection = () => {
  const {
    data: demoServices,
    error,
    isLoading,
  } = useGetInitalServicesQuery({ limit: 3, isDeleted: false, page: 1 });

  const dispatch = useAppDispatch();

  const navigator = useNavigate();
  const handleGoToServices = () => {
    navigator("/services");
  };

  const handleGoToServiceDetails = (id: string) => {
    dispatch(setServiceID(id));
    navigator("/service-details");
  };
  return (
    <section className="flex flex-col items-center  my-[70px] lg:mx-10">
      <div className=" flex flex-col justify-center items-center p-4 ">
        <p className=" font-bold text-3xl underline underline-offset-2 decoration-sky-800 font-bebas">
          Services
        </p>
        <div className=" flex flex-col p-4">
          <p className=" font-light lg:text-lg text-base text-center">
            {servicesDesc}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2 p-2 my-3">
        {isLoading ? (
          <CustomLoader />
        ) : error ? (
          <h1 className=" p-2 text-lg text-red-600 text-center">
            Error occured while loading data
          </h1>
        ) : (
          demoServices?.data?.map((item: TService, index: any) => {
            return (
              <ItemCard
                key={index}
                title={item.name}
                desc={item.description}
                onItemClickFunc={() => handleGoToServiceDetails(item._id)}
              />
            );
          })
        )}
      </div>
      <CustomButton
        title="More Services"
        onClickFunc={handleGoToServices}
        styles=" w-[150px] h-[40px]"
        textStyle="text-base"
      />
    </section>
  );
};
