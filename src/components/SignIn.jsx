// components/SignIn.jsx
import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignIn = ({ userEmail, setUserEmail, userPassword, setPassword }) => {
  const emailHandler = (e) => {
    setUserEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
        <MdEmail className="text-gray-700 text-xl" />
        <input
          type="email"
          className="bg-transparent border-none outline-none"
          placeholder="Your Email"
          value={userEmail}
          onChange={emailHandler}
        />
      </div>
      <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
        <RiLockPasswordFill className="text-gray-700 text-xl" />
        <input
          type="password"
          className="bg-transparent border-none outline-none"
          placeholder="Your Password"
          value={userPassword}
          onChange={passwordHandler}
        />
      </div>
      {/* <div>
        <p>Forgot Password? <span className="text-blue-900 cursor-pointer">Click Here</span></p>
      </div> */}
    </div>
  );
};

export default SignIn;
