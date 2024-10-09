import svgLogo from "@/assets/logo.svg";
import githubLogo from "@/assets/github_logo.svg";
import googleLogo from "@/assets/google_logo.svg";
import loginDetails from "@/assets/login_detail.svg";
import InversePrimaryButton from "@/components/InversePrimaryButton";
import PrimaryButton from "@/components/PrimaryButton";

import { loginRequest, saveAccessToken } from "../../services/authService";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<Inputs>();

  const validSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    login(data);
  };

  const login = async (data: Inputs) => {
    await loginRequest(data)
      .then((res) => {
        saveAccessToken(res.data.access_token);
        navigator("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const invalidSubmit: SubmitHandler<FieldErrors> = (data) => {};

  return (
    <div className="flex items-center justify-center w-full font-quicksand">
      <div className="flex text-color w-10/12  h-5/6 pb-24">
        <div className=" w-full flex flex-col items-center">
          <div className="flex my-7 text-white items-center text-6xl font-bold gap-3">
            <img src={svgLogo} alt="" />
            <h2>Kanban</h2>
          </div>

          <form
            className="border p-5 rounded-xl"
            onSubmit={handleSubmit(validSubmit, invalidSubmit)}
          >
            <div className="w-full flex justify-center mb-5">
              <p>Login into your account</p>
            </div>

            <div className="mt-5 w-80 ">Username</div>

            <Input
              className={`${
                touchedFields.username && errors.username
                  ? "border-red-800"
                  : ""
              }
                text-base focus:outline-none`}
              placeholder="example@gmail.com"
              {...register("username", {
                required: "Username is required",
                pattern: { value: emailRegex, message: "Invalid email" },
              })}
            />

            <div className="mt-3">Password</div>
            <Input
              className={`${
                touchedFields.password && errors.password
                  ? "border-red-800"
                  : ""
              }
              text-base focus:outline-none`}
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />

            <div className="w-full justify-end flex mt-1.5 mb-7">
              <a className="text-base underline">Forgot password?</a>
            </div>

            <PrimaryButton text="Login" />

            <div className="w-full flex justify-around items-center">
              <div className="h-px bg-border w-full mr-1.5"></div>
              <p className="text-lg">or</p>
              <div className="h-px bg-border w-full ml-1.5"></div>
            </div>
            <InversePrimaryButton text="Sign up" onClick={() => {}} />
            <div className="flex w-full justify-center items-center gap-5 p-7">
              <div className="rounded-md bg-primary h-10 w-10 flex items-center justify-center">
                <img src={googleLogo} alt="" />
              </div>
              <div className="rounded-md bg-primary h-10 w-10 flex items-center justify-center">
                <img src={githubLogo} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-screen">
        <img src={loginDetails} alt="" />
      </div>
    </div>
  );
};

export default Login;
