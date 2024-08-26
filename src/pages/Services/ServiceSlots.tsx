import { Button, Checkbox, Table } from "flowbite-react";

export const ServiceSlots = () => {
  return (
    <div className=" overflow-x-auto md:w-[700px] ">
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox disabled />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {`2024-06-16`}
            </Table.Cell>
            <Table.Cell>08:30</Table.Cell>
            <Table.Cell>09:30</Table.Cell>
            <Table.Cell>available</Table.Cell>
            <Table.Cell>
              <Button className="font-medium text-white h-[40px] w-[90px]">
                Book
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {`2024-06-16`}
            </Table.Cell>
            <Table.Cell>08:30</Table.Cell>
            <Table.Cell>09:30</Table.Cell>
            <Table.Cell>available</Table.Cell>
            <Table.Cell>
              <Button
                className="font-medium text-white h-[40px] w-[90px]"
                disabled
              >
                Book
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
