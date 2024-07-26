import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { login, loginSuccess } from "../redux/login/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Authenticate = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Sign Up");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const loginUser = async () => {
    setAction("Login");
    if (action === "Login" && userEmail && userPassword) {
      try {
        const response = await axios.post("http://localhost:3000/user/login", {
          emailAddress: userEmail,
          password: userPassword,
        });

        console.log(response);
        localStorage.setItem(
          "authToken",
          response.data.data.user_details.access_token
        );
        console.log(response.data.data.user_details, "data.......");
        dispatch(loginSuccess(response.data.data.user_details));
        navigate("/home");
      } catch (err) {
        console.log(err, "Error");
      }
    }
  };
  const signupUser = () => {
    setAction("Sign Up");
    if (
      action === "Sign Up" &&
      signup.email &&
      signup.name &&
      signup.password
    ) {
      axios
        .post("http://localhost:3000/user/create-user", signup)
        .then((res) => {
          console.log(res, "Res");
          setAction("Login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bg-banner-image bg-cover h-[100vh]">
      <div className="flex justify-center items-center h-full">
        <div className="lg:w-[450px] bg-white py-20 px-10 rounded-bl-[40px] rounded-se-[40px]">
          <h1 className="text-4xl text-blue-900 text-center mb-6 transition-all">
            {action}
          </h1>
          <div className="w-full">
            {action === "Login" ? (
              <SignIn
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                userPassword={userPassword}
                setPassword={setPassword}
              />
            ) : (
              <SignUp signup={signup} setSignup={setSignup} />
            )}
            <div className="flex justify-center gap-8 mt-10">
              <button
                className={`text-xl text-white py-2 w-36 rounded-3xl ${
                  action === "Sign Up" ? "bg-blue-900" : "bg-gray-200"
                }`}
                onClick={signupUser}
              >
                Sign Up
              </button>
              <button
                className={`text-xl text-white py-2 w-36 rounded-3xl ${
                  action === "Login" ? "bg-blue-900" : "bg-gray-200"
                }`}
                onClick={loginUser}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
