import { Button, Table } from "flowbite-react";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "../../redux/features/user/userApi";
import { CustomLoader } from "../../components/CustomLoader";
import { TUserInfo } from "../../types/user.type";

export const UserManagement = () => {
  const {
    data: allUsers,
    isError,
    error,
    isLoading,
    refetch,
  } = useGetAllUsersQuery(undefined);
  const [updateUserRole, { isSuccess }] = useUpdateUserRoleMutation();
  if (isError) {
    console.log(error);
  }
  const handleMakeAdmin = (id: string) => {
    const updateBody = {
      userId: id,
      role: "admin",
    };
    updateUserRole(updateBody);
    if (isSuccess) {
      refetch();
    }
  };
  return (
    <div className=" flex flex-col items-center w-full">
      <div className=" flex items-center flex-col p-4">
        <h2 className=" font-bold font-sans text-lg text-sky-600  lg:text-2xl">
          Manage Users
        </h2>
        <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      </div>
      <div className=" p-2 overflow-x-auto  w-full">
        {isLoading ? (
          <div className=" flex flex-row items-center justify-center w-full">
            <CustomLoader />
          </div>
        ) : isError ? (
          <div className=" text-center text-2xl text-red-500">
            Error occured while loading data
          </div>
        ) : (
          <Table>
            <Table.Head>
              <Table.HeadCell>USER NAME</Table.HeadCell>
              <Table.HeadCell>EMAIL</Table.HeadCell>
              <Table.HeadCell>PHONE</Table.HeadCell>
              <Table.HeadCell>ADDRESS</Table.HeadCell>
              <Table.HeadCell>ROLE</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Update Role</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className=" divide-y-2">
              {allUsers?.data?.map((user: TUserInfo) => {
                return (
                  <Table.Row key={user._id}>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {`${user.name}`}
                    </Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.phone}</Table.Cell>
                    <Table.Cell>{user.address}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                    <Table.Cell>
                      <Button
                        disabled={user.role === "admin"}
                        onClick={() => handleMakeAdmin(user._id)}
                      >
                        Make Admin
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
