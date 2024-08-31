import { Button } from "flowbite-react";
import { CustomLoader } from "../../components/CustomLoader";
import { InputText } from "../../components/InputText";
import { useGetSingleServiceQuery } from "../../redux/features/services/servicesApi";
import { useAppSelector } from "../../redux/hooks";
import { TQueryResult } from "../../types/query.resultType";
import { TService } from "../../types/service.type";
import { useNavigate } from "react-router-dom";

export const UpdateService = () => {
  const { serviceID } = useAppSelector((state) => state.service);
  let result: Partial<TQueryResult<TService>> = {};
  let service: Partial<TService> = {};
  let loader: boolean = false;
  const navigator = useNavigate();
  if (serviceID) {
    const { data, isLoading } = useGetSingleServiceQuery(serviceID);
    result = data || {};
    loader = isLoading;
  }
  if (result?.statusCode === 200) {
    service = result.data || {};
  }
  const handleGoAdminServicesPage = () => {
    navigator("/dashboard/admin/services");
  };
  return (
    <div className=" flex flex-col items-center w-full">
      <div className="flex flex-col items-center">
        <h2 className=" font-bold text-2xl text-sky-600">Update Service</h2>
      </div>
      <div className=" p-3 w-[500px]">
        {loader ? (
          <div className=" flex w-full flex-col items-center ">
            <CustomLoader />
          </div>
        ) : (
          <div>
            <InputText
              textType="text"
              inputLabel="Service Name"
              onChangeFunc={() => {}}
              value={service.name}
            />
            <InputText
              textType="text"
              inputLabel="Service Description"
              onChangeFunc={() => {}}
              value={service.description}
            />
            <InputText
              textType="text"
              inputLabel="Service Duration"
              onChangeFunc={() => {}}
              value={service.duration?.toString()}
            />
            <InputText
              textType="text"
              inputLabel="Service Price"
              onChangeFunc={() => {}}
              value={service.price?.toString()}
            />
            <div className=" flex flex-row gap-3">
              <Button>Update</Button>
              <Button onClick={handleGoAdminServicesPage} color="gray">
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
