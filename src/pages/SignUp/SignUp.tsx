import { FormEvent, useState } from "react";
import { HeaderLogo } from "../../components/HeaderLogo";
import { InputText } from "../../components/InputText";
import { CustomTextArea } from "../../components/CustomTextArea";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserCreateMutation } from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpass, setConfPass] = useState("");
  const [address, setAddress] = useState("");
  const navigation = useNavigate();
  const [userCreate, { isError }] = useUserCreateMutation();
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signUpData = {
      name,
      phone: phoneNo,
      email,
      role: "user",
      password,
      address,
    };
    if (confpass !== password) {
      toast.error("Password Mismatch");
    } else {
      const res = await userCreate(signUpData).unwrap();
      console.log(res);
      if (res.statusCode === 200) {
        toast.success("User created successfilly");
        navigation("/sign-in");
      }
    }
    if (isError) {
      toast.error("Error occured while signing up!");
    }
  };
  return (
    <div>
      <div>
        <HeaderLogo />
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <form
          onSubmit={handleSignUp}
          className="  w-[400px] md:w-[500px] h-[650px] shadow-lg rounded-lg absolute top-[50px] "
        >
          <div className=" flex flex-col items-center w-full justify-center pt-[10%]">
            <h1 className=" font-bold text-2xl p-3">Sign Up</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-[300px] md:w-[450px]">
              <InputText
                textType="text"
                inputLabel="Name"
                onChangeFunc={setName}
                styles="w-full"
              />
              <InputText
                textType="text"
                inputLabel="Phone"
                onChangeFunc={setPhoneNo}
                styles="w-full"
              />
            </div>
            <div className=" grid grid-cols-1 gap-2 w-[300px] md:w-[450px]">
              <InputText
                textType="email"
                inputLabel="Email"
                onChangeFunc={setEmail}
                styles="w-full"
              />
              <InputText
                textType="password"
                inputLabel="Password"
                onChangeFunc={setPassword}
                styles="w-full"
              />
              <InputText
                textType="password"
                inputLabel="Confirm Password"
                onChangeFunc={setConfPass}
                styles="w-full"
              />
              <CustomTextArea
                title="Address"
                id="address"
                placeholder="Your Address"
                onChangeFunc={setAddress}
              />
            </div>
            <Button type="submit" className="my-2 w-[200px]">
              Sign Up
            </Button>
            <div className=" flex flex-col text-center p-2">
              <p>
                Already have an account?
                <Link to={"/sign-in"}>
                  <span className=" text-blue-500"> Sign In </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
