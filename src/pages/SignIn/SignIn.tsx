import { FormEvent, useState } from "react";
import { InputText } from "../../components/InputText";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderLogo } from "../../components/HeaderLogo";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { jwtDecode } from "jwt-decode";
import { TUser } from "../../types/user.type";
import { setUser } from "../../redux/features/auth/authSlice";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [login, { isError }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    console.log(loginData);
    const res = await login(loginData).unwrap();
    const user = (await jwtDecode(res.token)) as TUser;
    dispatch(setUser({ user: user, token: res.token }));
    if (res.statusCode === 200) {
      navigate("/");
    }
    if (isError) {
      alert(isError);
    }

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
