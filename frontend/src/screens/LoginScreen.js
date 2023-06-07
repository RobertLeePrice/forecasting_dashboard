import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingOverlay from "../components/LoadingOverlay";
import Message from "../components/Message";
import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";
import { login } from "../actions/userActions";
import { classNames } from "../helpers/utils";
import logo from "../images/logo.svg";

export default function LoginScreen({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="xl:mt-20 mt-16">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {loading && <LoadingOverlay />}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-12 shadow sm:rounded-lg sm:px-10">
          {error && <Message message={error} />}

          <form
            className={classNames(error ? "mt-8" : "", "space-y-6")}
            onSubmit={submitHandler}
            method="POST"
          >
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

            <div>
              <Button type="submit" fullWidth>
                Sign in
              </Button>
            </div>
          </form>
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
            className="block my-6 text-center font-medium text-gray-600 hover:text-gray-900"
          >
            Don't have an account yet?
          </Link>
        </div>
      </div>
    </div>
  );
}
