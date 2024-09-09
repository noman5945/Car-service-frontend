import { Button } from "flowbite-react";
import { CustomLoader } from "../../components/CustomLoader";
import { InputText } from "../../components/InputText";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "../../redux/features/services/servicesApi";
import { useAppSelector } from "../../redux/hooks";
import { TQueryResult } from "../../types/query.resultType";
import { TService } from "../../types/service.type";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const UpdateService = () => {
  const { serviceID } = useAppSelector((state) => state.service);
  let result: Partial<TQueryResult<TService>> = {};
  let service: Partial<TService> = {};
  let loader: boolean = false;
  const [updateService, { isLoading: updateLoader }] =
    useUpdateServiceMutation();
  const navigator = useNavigate();
  const [serviceName, setServiceName] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDuration, setServiceDuration] = useState("");
  const [serviceImg, setServiceImg] = useState("");

  if (serviceID) {
    const { data, isLoading } = useGetSingleServiceQuery(serviceID);
    result = data || {};
    loader = isLoading;
  }
  useEffect(() => {
    if (result?.statusCode === 200) {
      service = result.data || {};
      setServiceName(service?.name || "");
      setServiceDesc(service?.description || "");
      setServiceDuration(service?.duration?.toString() || "");
      setServicePrice(service?.price?.toString() || "");
      setServiceImg(service?.img?.toString() || "");
    }
  }, [result]);

  const handleGoAdminServicesPage = () => {
    navigator("/dashboard/admin/services");
  };
  const handleServiceUpdate = async () => {
    const updatedData = {
      serviceID,
      name: serviceName,
      description: serviceDesc,
      price: Number(servicePrice),
      duration: Number(serviceDuration),
      img: serviceImg,
    };
    if (serviceID) {
      const res = await updateService(updatedData).unwrap();
      if (res.statusCode === 200) {
        toast.success(res.message);
        navigator("/dashboard/admin/services");
      } else {
        toast.error(res.message);
      }
    }
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
              onChangeFunc={setServiceName}
              value={serviceName}
            />
            <InputText
              textType="text"
              inputLabel="Service Description"
              onChangeFunc={setServiceDesc}
              value={serviceDesc}
            />
            <InputText
              textType="text"
              inputLabel="Service Duration"
              onChangeFunc={setServiceDuration}
              value={serviceDuration}
            />
            <InputText
              textType="text"
              inputLabel="Service Price"
              onChangeFunc={setServicePrice}
              value={servicePrice}
            />
            <InputText
              textType="text"
              inputLabel="Service image link"
              onChangeFunc={setServiceImg}
              value={serviceImg}
            />
            <div className=" flex flex-col gap-3">
              {updateLoader ? (
                <CustomLoader />
              ) : (
                <div className=" flex flex-row gap-3">
                  <Button onClick={handleServiceUpdate}>Update</Button>
                  <Button onClick={handleGoAdminServicesPage} color="gray">
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
