import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/LoadingOverlay";
import Message from "../components/Message";
import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";
import { register } from "../actions/userActions";
import logo from "../images/logo.svg";

// TODO: Move classNames to a utility file
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RegisterScreen({ history }) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(first_name, last_name, email, password));
    }
  };

  return (
    <div className="xl:mt-20 mt-16">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
          Create a new account
        </h2>
      </div>

      {error && { error }}
      {loading && <Loader />}

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-12 shadow sm:rounded-lg sm:px-10">
          {error && <Message message={message} />}

          <form
            className={classNames(message ? "mt-8" : "", "space-y-6")}
            onSubmit={submitHandler}
            method="POST"
          >
            <TextInput
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              required
            />

            <TextInput
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              required
            />

            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              label="Email"
              name="email"
              autoComplete="email"
              required
            />

            <TextInput
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              required
            />

            <TextInput
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              autoComplete="current-password"
              required
            />

            <Button type="submit" fullWidth>
              Register
            </Button>
          </form>
          <Link
            to={redirect ? `/login?redirect=${redirect}` : "/login"}
            className="block my-6 text-center font-medium text-gray-600 hover:text-gray-900"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
