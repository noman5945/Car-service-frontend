import { Table } from "flowbite-react";
import { CustomLoader } from "../../components/CustomLoader";
import { useGetUserBookingsQuery } from "../../redux/features/bookings/bookingsApi";
import { useEffect, useState } from "react";

export const UserBookings = () => {
  let today: any = new Date();

  let tempSlotDate: Date;

  const [daysCount, setDaysCount] = useState(new Map());
  const {
    data: bookings,
    isError,
    error,
    isLoading,
  } = useGetUserBookingsQuery(undefined);
  useEffect(() => {
    if (bookings?.data) {
      const newDaysCount = new Map();
      bookings?.data.map((booked: any) => {
        tempSlotDate = new Date(booked?.slot?.date);
        const timeDiff = tempSlotDate.getTime() - today.getTime();
        const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
        const dateKey = booked?.slot?.date;

        if (daysLeft < 0) {
          newDaysCount.set(dateKey, `Passed`);
        } else {
          newDaysCount.set(dateKey, `${daysLeft} Days left`);
        }
      });
      setDaysCount(newDaysCount);
    }
  }, [bookings]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className=" text-center">
        <h1 className=" mt-3 font-bebas text-sky-600 font-bold text-xl md:text-2xl p-1">
          My Bookings
        </h1>
      </div>
      <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      <div className=" flex flex-col items-center p-3 w-full">
        {isLoading ? (
          <>
            <CustomLoader />
          </>
        ) : isError ? (
          <div className=" font-bold text-center text-red-600">
            {`Error Occured while loading data ${error}`}.
          </div>
        ) : (
          <Table className=" w-full">
            <Table.Head>
              <Table.HeadCell>Service Name</Table.HeadCell>
              <Table.HeadCell>Vehicle Type</Table.HeadCell>
              <Table.HeadCell>Vehicle Name</Table.HeadCell>
              <Table.HeadCell>Vehicle Reg No.</Table.HeadCell>
              <Table.HeadCell>Start Time</Table.HeadCell>
              <Table.HeadCell>End Time</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {bookings?.data?.map((booked: any) => {
                const dateKey = booked?.slot?.date;
                return (
                  <Table.Row>
                    <Table.Cell>{booked?.service?.name}</Table.Cell>
                    <Table.Cell>{booked?.vehicleType}</Table.Cell>
                    <Table.Cell>
                      {booked?.vehicleBrand + " " + booked?.vehicleModel}
                    </Table.Cell>
                    <Table.Cell>{booked?.registrationPlate}</Table.Cell>
                    <Table.Cell>{booked?.slot?.startTime}</Table.Cell>
                    <Table.Cell>{booked?.slot?.endTime}</Table.Cell>
                    <Table.Cell>{dateKey}</Table.Cell>
                    <Table.Cell className=" font-bold">
                      {daysCount.get(dateKey)}
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
