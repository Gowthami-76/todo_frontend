// components/SignUp.jsx
import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignUp = ({ signup, setSignup }) => {
  return (
    <div>
      <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded transition-all">
        <IoPerson className="text-gray-700 text-xl" />
        <input
          type="text"
          className="bg-transparent border-none outline-none"
          placeholder="Your Name"
          value={signup.name}
          onChange={(e) => setSignup({ ...signup, name: e.target.value })}
        />
      </div>
      <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
        <MdEmail className="text-gray-700 text-xl" />
        <input
          type="email"
          className="bg-transparent border-none outline-none"
          placeholder="Your Email"
          value={signup.email}
          onChange={(e) => setSignup({ ...signup, email: e.target.value })}
        />
      </div>
      <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
        <RiLockPasswordFill className="text-gray-700 text-xl" />
        <input
          type="password"
          className="bg-transparent border-none outline-none"
          placeholder="Your Password"
          value={signup.password}
          onChange={(e) => setSignup({ ...signup, password: e.target.value })}
        />
      </div>
    </div>
  );
};

export default SignUp;
