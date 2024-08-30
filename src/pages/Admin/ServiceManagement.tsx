import { Button, Table } from "flowbite-react";
import { useGetInitalServicesQuery } from "../../redux/features/services/servicesApi";
import { CustomLoader } from "../../components/CustomLoader";
import { TService } from "../../types/service.type";

export const ServiceManagement = () => {
  const {
    data: services,
    isLoading,
    isError,
  } = useGetInitalServicesQuery({ limit: 10 });

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
        <Button>Add New Service</Button>
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
                      <Button disabled={service.isDeleted} onClick={() => {}}>
                        Update
                      </Button>
                      <Button
                        disabled={service.isDeleted}
                        onClick={() => {}}
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
    </div>
  );
};
