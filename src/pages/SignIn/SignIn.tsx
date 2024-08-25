import { FormEvent, useState } from "react";
import { InputText } from "../../components/InputText";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderLogo } from "../../components/HeaderLogo";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    console.log(loginData);

    setEmail("");
    setPassword("");
  };
  const handleGoHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <HeaderLogo />
      </div>
      <div className=" flex flex-col items-center justify-center relative ">
        <form
          className="  w-[400px] md:w-[500px] h-[450px] shadow-lg rounded-lg absolute top-[100px] "
          onSubmit={(e) => handleLogin(e)}
        >
          <div className=" flex flex-col items-center w-full justify-center pt-[15%]">
            <h1 className=" font-bold text-2xl p-3">Welcome</h1>
            <InputText
              inputLabel="Email"
              textType="email"
              onChangeFunc={setEmail}
              styles=" w-[70%]"
            />
            <InputText
              inputLabel="Password"
              textType="password"
              onChangeFunc={setPassword}
              styles=" w-[70%]"
            />
            <Button type="submit" className="my-2 w-[200px]">
              Log In
            </Button>
            <Button onClick={handleGoHomePage} className=" w-[200px]">
              Home
            </Button>
            <div className=" flex flex-col text-center p-2">
              <p>
                Dont have account?
                <Link to={"/sign-up"}>
                  <span className=" text-blue-500"> Sign Up </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
