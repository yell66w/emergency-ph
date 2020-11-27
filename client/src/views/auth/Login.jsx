import React, { useState } from "react";
import { AuthService } from "../../services/AuthService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../models/AuthSchema";
import { useToasts } from "react-toast-notifications";
import { motion } from "framer-motion";
import Spinner from "react-spinners/MoonLoader";

const Login = ({ setShowSignIn, setIsAuth, setCheckingUser }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { addToast } = useToasts();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const _auth = new AuthService();
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const { username, password } = data;
      await _auth.signIn(username, password);
      setCheckingUser(true);
      setIsAuth(true);
      addToast("Logged In Successfully", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      setIsAuth(false);
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen tracking-wider text-gray-700 overflow-hidden">
      <div className="flex flex-col w-2/3 ">
        <motion.form
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex flex-col justify-center items-center h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-4xl font-bold  text-blue-500 ">
            Sign in to Chihuahua
          </h1>
          <p className="text-xs text-gray-500 mt-6">
            To keep connected with us please login with your personal info
          </p>
          <input
            className={`
            ${errors.username ? "border border-red-600" : null} 
            focus:outline-none focus:bg-gray-200  font-medium bg-gray-100 w-2/5 h-14 px-6 py-4 text-sm mt-4`}
            type="text"
            placeholder="Username"
            name="username"
            ref={register}
          />
          {errors.username ? (
            <small className="text-xs w-2/5 text-red-600 font-medium my-1">
              {errors.username?.message}
            </small>
          ) : null}
          <input
            className={`
            ${errors.password ? "border border-red-600" : null} 
            focus:outline-none focus:bg-gray-200 font-medium bg-gray-100 w-2/5 h-14 px-6 py-4 text-sm mt-3`}
            type="password"
            name="password"
            placeholder="Password"
            ref={register}
          />
          {errors.password ? (
            <small className="text-xs w-2/5 text-red-600 font-medium my-1">
              {errors.password?.message}
            </small>
          ) : null}

          <a
            className="border-b font-semibold tracking-wide  border-gray-700 mt-5"
            href="/"
          >
            Forgot your password?
          </a>

          <button
            className="transition duration-500 w-48 flex justify-center ease-in-out focus:bg-blue-600 bg-blue-500 focus:outline-none hover:bg-blue-600 mt-9 cursor-pointer text-white font-semibold tracking-widest px-16 py-3 rounded-full text-sm"
            type="submit"
          >
            {isSubmitting ? (
              <Spinner color={"#fff"} size={15}></Spinner>
            ) : (
              "SIGN IN"
            )}
          </button>
        </motion.form>
      </div>

      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex w-1/3 flex-col bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen h-full text-white justify-center items-center"
      >
        <h1 className="text-4xl font-bold">Hello, Friend!</h1>

        <p className="mt-9 w-2/4 text-center tracking-normal">
          Enter your personal details and start your journey with us
        </p>

        <input
          onClick={() => setShowSignIn(false)}
          className="transition duration-500 ease-in-out hover:bg-white hover:text-blue-500 bg-transparent border border-white focus:outline-none mt-9 cursor-pointer text-white font-semibold tracking-widest px-16 py-3 rounded-full text-sm"
          type="submit"
          value="SIGN UP"
        />
      </motion.div>
    </div>
  );
};

export default Login;
