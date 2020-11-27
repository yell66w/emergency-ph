import React, { useState } from "react";
import { AuthService } from "../../services/AuthService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../models/AuthSchema";
import { useToasts } from "react-toast-notifications";
import { motion } from "framer-motion";
import Spinner from "react-spinners/MoonLoader";
const Register = ({ setShowSignIn }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { addToast } = useToasts();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const _auth = new AuthService();
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const { username, password, firstName, lastName } = data;
      await _auth.signUp(firstName, lastName, username, password);
      addToast("Registered Successfully", {
        appearance: "success",
        autoDismiss: true,
      });
      setShowSignIn(true);
    } catch (error) {
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden flex min-h-screen tracking-wider text-gray-700">
      <div className="flex order-2 flex-col w-2/3 ">
        <motion.form
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex flex-col justify-center items-center h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-4xl font-bold  text-blue-500 ">Create Account</h1>
          <p className="text-xs text-gray-500 mt-6">
            Enter your personal details and start your journey with us
          </p>
          <input
            className={`
            ${errors.firstName ? "border border-red-600" : null} 
            focus:outline-none focus:bg-gray-200  font-medium bg-gray-100 w-2/5 h-14 px-6 py-4 text-sm mt-4`}
            type="text"
            placeholder="First Name"
            name="firstName"
            ref={register}
          />
          {errors.firstName ? (
            <small className="text-xs w-2/5 text-red-600 font-medium my-1">
              {errors.firstName?.message}
            </small>
          ) : null}

          <input
            className={`
            ${errors.lastName ? "border border-red-600" : null} 
            focus:outline-none focus:bg-gray-200 font-medium bg-gray-100 w-2/5 h-14 px-6 py-4 text-sm mt-3`}
            type="text"
            name="lastName"
            placeholder="Last Name"
            ref={register}
          />
          {errors.lastName ? (
            <small className="text-xs w-2/5 text-red-600 font-medium my-1">
              {errors.lastName?.message}
            </small>
          ) : null}
          <input
            className={`
            ${errors.username ? "border border-red-600" : null} 
            focus:outline-none focus:bg-gray-200 font-medium bg-gray-100 w-2/5 h-14 px-6 py-4 text-sm mt-3`}
            type="text"
            name="username"
            placeholder="Username"
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
          <input
            className={`
            ${errors.confirmPassword ? "border border-red-600" : null} 
            focus:outline-none focus:bg-gray-200 font-medium bg-gray-100 w-2/5 h-14 px-6 py-4 text-sm mt-3`}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            ref={register}
          />
          {errors.confirmPassword ? (
            <small className="text-xs w-2/5 text-red-600 font-medium my-1">
              {errors.confirmPassword?.message}
            </small>
          ) : null}

          <button
            className="transition duration-500 w-48 flex justify-center ease-in-out focus:bg-blue-600 bg-blue-500 focus:outline-none hover:bg-blue-600 mt-9 cursor-pointer text-white font-semibold tracking-widest px-16 py-3 rounded-full text-sm"
            type="submit"
          >
            {isSubmitting ? (
              <Spinner color={"#fff"} size={15}></Spinner>
            ) : (
              "SIGN UP"
            )}
          </button>
        </motion.form>
      </div>

      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex order-1 w-1/3 flex-col bg-gradient-to-bl from-blue-500 to-purple-600 min-h-screen h-full text-white justify-center items-center"
      >
        <h1 className="text-4xl font-bold">Hello, Friend!</h1>

        <p className="mt-9 w-3/4 text-center tracking-normal">
          To keep connected with us please login with your personal info
        </p>

        <input
          onClick={() => setShowSignIn(true)}
          className="transition duration-500 ease-in-out hover:bg-white hover:text-blue-500 bg-transparent border border-white focus:outline-none mt-9 cursor-pointer text-white font-semibold tracking-widest px-16 py-3 rounded-full text-sm"
          type="submit"
          value="SIGN IN"
        />
      </motion.div>
    </div>
  );
};

export default Register;
