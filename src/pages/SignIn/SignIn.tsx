import { FormEvent, useState } from "react";
import { InputText } from "../../components/InputText";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

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
    <div className=" flex flex-col items-center justify-center relative ">
      <form
        className="  w-[350px] md:w-[400px] h-[500px] shadow-lg rounded-lg absolute top-[100px] "
        onSubmit={(e) => handleLogin(e)}
      >
        <div className=" flex flex-col items-center w-full justify-center">
          <h1 className=" font-bold text-2xl p-3">Log In</h1>
          <InputText
            inputLabel="Email"
            textType="email"
            onChangeFunc={setEmail}
          />
          <InputText
            inputLabel="Password"
            textType="password"
            onChangeFunc={setPassword}
          />
          <Button type="submit" className="my-2 w-[200px]">
            Log In
          </Button>
          <Button onClick={handleGoHomePage} className=" w-[200px]">
            Home
          </Button>
        </div>
      </form>
    </div>
  );
};
