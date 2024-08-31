import { useEffect, useState } from "react";
import { CustomLoader } from "../../components/CustomLoader";
import { ServiceCard } from "../../components/ServiceCard";
import { useGetInitalServicesQuery } from "../../redux/features/services/servicesApi";
import { TService } from "../../types/service.type";
import { ServiceFilterSection } from "./ServiceFilterSection";

export const Services = () => {
  const initailQuery = {
    limit: 10,
    isDeleted: false,
  };
  const [filters, setFilters] = useState(initailQuery);
  const {
    data: services,
    error,
    isLoading,
    refetch,
  } = useGetInitalServicesQuery(filters);

  const handleFilterClick = (filter: any) => {
    setFilters((prevQuery) => ({
      ...prevQuery,
      ...filter,
    }));
  };
  console.log(filters);
  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  return (
    <section className=" flex flex-col mx-0 items-center">
      <div className=" flex flex-col items-center justify-center mt-3">
        <h1 className=" text-xl lg:text-2xl font-bebas font-bold">
          All Services
        </h1>
        <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      </div>
      <div className=" py-5 px-2 bg-sky-100 rounded-md lg:w-[700px] w-[300px]">
        <ServiceFilterSection onFilterButtonClick={handleFilterClick} />
      </div>
      <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      <div className=" flex flex-col">
        {isLoading ? (
          <CustomLoader />
        ) : error ? (
          <h1 className=" p-2 text-lg text-red-600 text-center">
            Error occured while loading data
          </h1>
        ) : (
          services?.data?.map((service: TService, index: any) => {
            return (
              <ServiceCard
                key={index}
                name={service.name}
                desc={service.description}
                price={service.price}
                duration={service.duration}
              />
            );
          })
        )}
      </div>
    </section>
  );
};
