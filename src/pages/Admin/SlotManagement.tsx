import { Button, Pagination, Table } from "flowbite-react";
import { useGetAllSlotsQuery } from "../../redux/features/slots/slotsApi";
import { CustomLoader } from "../../components/CustomLoader";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { releaseServiceID } from "../../redux/features/services/serviceSlice";
import { setSlotID } from "../../redux/features/slots/slotsSlice";

export const SlotManagement = () => {
  const { serviceID } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState({});
  const {
    data: slots,
    isError,
    error,
    isLoading,
  } = useGetAllSlotsQuery(filter);
  const navigation = useNavigate();
  useEffect(() => {
    if (serviceID === null) {
      setFilter({});
    } else {
      setFilter({ serviceId: serviceID });
    }
  }, [serviceID]);

  const handleGoToSlotDetails = (id: string) => {
    dispatch(setSlotID(id));
    navigation("/dashboard/admin/slot-details");
  };

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    setFilter((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const handleGetAll = () => {
    dispatch(releaseServiceID());
  };
  const handleGoToNewSlots = () => {
    navigation("/dashboard/admin/slot-create");
  };

  return (
    <div className=" flex flex-col w-full">
      <div className=" flex items-center flex-col p-4">
        <h2 className=" font-bold font-sans text-lg text-sky-600  lg:text-2xl">
          Manage Active Service Slots
        </h2>
        <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      </div>
      <div className=" flex flex-col items-start w-full">
        <div className=" font-sans font-bold p-3 flex flex-row gap-3 items-center justify-between w-full">
          <h2 className=" text-xl">Slot Table</h2>
          <div className=" flex flex-col md:flex-row gap-1">
            <Button onClick={handleGetAll}>Get All Slots</Button>
            <Button onClick={handleGoToNewSlots}>Create New Slots</Button>
          </div>
        </div>
        <div className=" w-full">
          {isLoading ? (
            <div className=" flex flex-row justify-center">
              <CustomLoader />
            </div>
          ) : isError ? (
            <div className=" text-center text-2xl text-red-500">
              Error occured while loading data {String(error)}
            </div>
          ) : (
            <>
              <Table>
                <Table.Head>
                  <Table.HeadCell>SERVICE NAME</Table.HeadCell>
                  <Table.HeadCell>DATE</Table.HeadCell>
                  <Table.HeadCell>START TIME</Table.HeadCell>
                  <Table.HeadCell>END TIME</Table.HeadCell>
                  <Table.HeadCell>STATUS</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">ACTIONS</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {slots?.data?.map((slot: any) => {
                    return (
                      <Table.Row key={slot._id} className=" font-bold">
                        <Table.Cell>{slot?.service?.name}</Table.Cell>
                        <Table.Cell>{slot.date}</Table.Cell>
                        <Table.Cell>{slot.startTime}</Table.Cell>
                        <Table.Cell>{slot.endTime}</Table.Cell>
                        <Table.Cell
                          className={
                            slot.isBooked === "booked"
                              ? ` text-red-600`
                              : ` text-green-600`
                          }
                        >
                          {slot.isBooked}
                        </Table.Cell>
                        <Table.Cell>
                          <Button
                            onClick={() => handleGoToSlotDetails(slot._id)}
                          >
                            SLOT DETAILS
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </>
          )}
        </div>
      </div>
      <div className=" flex flex-col items-center p-2">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        ></Pagination>
      </div>
    </div>
  );
};
