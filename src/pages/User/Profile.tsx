import { useEffect, useState } from "react";
import { InputText } from "../../components/InputText";
import { CustomTextArea } from "../../components/CustomTextArea";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { TUser } from "../../types/user.type";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "../../redux/features/auth/authApi";
import { CustomLoader } from "../../components/CustomLoader";
import toast from "react-hot-toast";

export const Profile = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const {
    data: userInfo,
    isLoading,
    isError,
  } = useGetUserInfoQuery(user.userId);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [editswitch, setEditSwitch] = useState(true);
  const [editPassSwitch, setEditPassSwitch] = useState(true);
  const navigate = useNavigate();
  const [updateUserInfo, { isLoading: updateLoader, isError: updateError }] =
    useUpdateUserInfoMutation();

  useEffect(() => {
    setName(userInfo?.data?.name);
    setPhone(userInfo?.data?.phone);
    setEmail(userInfo?.data?.email);
    setAddress(userInfo?.data?.address);
  }, [userInfo]);

  const handleGoToHome = () => {
    navigate("/");
  };
  const handleInfoUpdate = async () => {
    const updateInfo = {
      userID: user.userId,
      name,
      phone,
      email,
      address,
    };

    const res = await updateUserInfo(updateInfo).unwrap();
    console.log(res);
    if (res.statusCode === 200) {
      toast.success("User info updated successfilly");
    } else {
      toast.error("Error occured " + res.message);
    }
    if (updateError) {
      toast.error("Error occured while updating");
    }
  };

  const handlePasswordUpdate = async () => {
    const updateInfo = {
      userID: user.userId,
      password,
    };

    const res = await updateUserInfo(updateInfo).unwrap();
    console.log(res);
    if (res.statusCode === 200) {
      toast.success("Password updated successfilly");
    } else {
      toast.error("Error occured " + res.message);
    }
    if (updateError) {
      toast.error("Error occured while updating");
    }
  };

  return (
    <div className=" flex flex-col items-center w-full">
      <h2 className=" font-bold my-3 text-2xl text-sky-500">My Profile</h2>
      {isLoading ? (
        <div className=" flex flex-col items-center">
          <CustomLoader />
        </div>
      ) : isError ? (
        <div className=" text-center font-bold text-red-600">
          Error occured while fetching data.
        </div>
      ) : (
        <div className=" w-[500px] shadow-md  rounded-md p-3">
          <div className=" flex flex-row-reverse w-full">
            <Button color={"green"} onClick={() => setEditSwitch(!editswitch)}>
              Edit
            </Button>
          </div>
          <div className=" p-1">
            <InputText
              textType="text"
              inputLabel="Name"
              onChangeFunc={setName}
              value={name}
              disable={editswitch}
            />
          </div>
          <div className=" p-1">
            <InputText
              textType="email"
              inputLabel="E-mail"
              onChangeFunc={setEmail}
              value={email}
              disable={editswitch}
            />
          </div>
          <div className=" p-1">
            <InputText
              textType="text"
              inputLabel="Phone"
              onChangeFunc={setPhone}
              value={phone}
              disable={editswitch}
            />
          </div>
          <div className=" p-1">
            <CustomTextArea
              title="Address"
              placeholder="Address"
              onChangeFunc={setAddress}
              id="address"
              value={address}
              disable={editswitch}
            />
          </div>
          <div className=" flex flex-row gap-2 p-2 w-full">
            {updateLoader ? (
              <>
                <CustomLoader />
              </>
            ) : (
              <>
                <Button onClick={handleInfoUpdate} disabled={editswitch}>
                  Update
                </Button>
                <Button color="gray" onClick={handleGoToHome}>
                  Home
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      <div className=" flex flex-col border border-green-500 w-[500px] p-2 rounded-md my-4">
        <div className=" flex flex-row-reverse p-1 justify-between items-center">
          <Button
            color={"green"}
            onClick={() => setEditPassSwitch(!editPassSwitch)}
          >
            Edit
          </Button>
          <h2 className=" font-bold">Change Password</h2>
        </div>
        <div>
          <InputText
            textType="password"
            inputLabel="password"
            onChangeFunc={setPassword}
            disable={editPassSwitch}
          />
        </div>
        <div>
          {updateLoader ? (
            <>
              <CustomLoader />
            </>
          ) : (
            <Button
              className=" bg-green-400"
              color={"green"}
              disabled={editPassSwitch}
              onClick={handlePasswordUpdate}
            >
              Change Password
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
