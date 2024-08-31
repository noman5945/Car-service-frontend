import { Button, Table } from "flowbite-react";
import {
  useDeleteServiceMutation,
  useGetInitalServicesQuery,
} from "../../redux/features/services/servicesApi";
import { CustomLoader } from "../../components/CustomLoader";
import { TService } from "../../types/service.type";
import { useState } from "react";
import { NewServiceModal } from "../../components/CustomModals/NewServiceModal";
import { useAppDispatch } from "../../redux/hooks";
import { setServiceID } from "../../redux/features/services/serviceSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const ServiceManagement = () => {
  const [openNewServiceModal, setOpenNewServiceModal] = useState(false);
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const {
    data: services,
    isLoading,
    isError,
    refetch,
  } = useGetInitalServicesQuery({ limit: 10 });

  const [deleteService] = useDeleteServiceMutation();

  const handleGoToUpdateServicePage = (id: string) => {
    dispatch(setServiceID(id));
    navigator("/dashboard/admin/service-update");
  };

  const handleDeleteServiceByID = async (id: string) => {
    const res = await deleteService(id).unwrap();
    if (res.statusCode === 200) {
      toast.success("Service Deactivated");
    }
    refetch();
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className=" flex items-center flex-col p-4">
        <h2 className=" font-bold font-sans text-lg text-sky-600  lg:text-2xl">
          Manage Services
        </h2>
        <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      </div>
      <div className=" flex flex-row justify-between w-full p-4">
        <h2 className=" font-bold text-xl">Services Table</h2>
        <Button onClick={() => setOpenNewServiceModal(true)}>
          Add New Service
        </Button>
      </div>
      <div className="p-2 overflow-x-auto  w-full">
        {isLoading ? (
          <div className="flex flex-row items-center justify-center w-full">
            <CustomLoader />
          </div>
        ) : isError ? (
          <div className=" text-center text-2xl text-red-500">
            Error occured while loading data
          </div>
        ) : (
          <Table>
            <Table.Head>
              <Table.HeadCell>SERVICE NAME</Table.HeadCell>
              <Table.HeadCell>DESCRIPTION</Table.HeadCell>
              <Table.HeadCell>PRICE</Table.HeadCell>
              <Table.HeadCell>DURATION</Table.HeadCell>
              <Table.HeadCell>STATUS</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">ACTIONS</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {services?.data?.map((service: TService, index: any) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {`${service.name}`}
                    </Table.Cell>
                    <Table.Cell>{service.description}</Table.Cell>
                    <Table.Cell>{service.price}</Table.Cell>
                    <Table.Cell>{service.duration}</Table.Cell>
                    <Table.Cell>
                      {service.isDeleted ? "Not Active" : "Active"}
                    </Table.Cell>
                    <Table.Cell className=" grid grid-cols-2 w-fit gap-2">
                      <Button
                        disabled={service.isDeleted}
                        onClick={() => {
                          handleGoToUpdateServicePage(service._id);
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        disabled={service.isDeleted}
                        onClick={() => {
                          handleDeleteServiceByID(service._id);
                        }}
                        className=" bg-red-500 hover:bg-red-600"
                      >
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        )}
      </div>
      <NewServiceModal
        openModal={openNewServiceModal}
        onCloseFunc={() => setOpenNewServiceModal(false)}
      />
    </div>
  );
};
