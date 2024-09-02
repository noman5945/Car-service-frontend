import { Button, Checkbox, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

type ServiceSlotsProps = {
  items: Array<any>;
};

export const ServiceSlots = ({ items }: ServiceSlotsProps) => {
  const navigator = useNavigate();
  const handleGoToBookings = () => {
    navigator("/booking");
  };
  return (
    <div className=" overflow-x-auto md:w-[700px] shadow-md ">
      <Table hoverable>
        <Table.Head className=" bg-sky-500 border">
          <Table.HeadCell className="p-4 ">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Start time</Table.HeadCell>
          <Table.HeadCell>End time</Table.HeadCell>
          <Table.HeadCell>Availability</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only ">Action</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className=" divide-y">
          {items.map((item: any) => {
            return (
              <Table.Row
                key={item._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="p-4">
                  <Checkbox disabled={item.isBooked === "booked"} />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {`${item.date}`}
                </Table.Cell>
                <Table.Cell>{item.startTime}</Table.Cell>
                <Table.Cell>{item.endTime}</Table.Cell>
                <Table.Cell>{item.isBooked}</Table.Cell>
                <Table.Cell>
                  <Button
                    className="font-medium text-white h-[40px] w-[90px]"
                    onClick={handleGoToBookings}
                    disabled={item.isBooked === "booked"}
                  >
                    Book
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
