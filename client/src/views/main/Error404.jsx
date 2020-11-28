import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { photoSchema } from "../../models/PostSchema";
import { RiImageAddFill } from "react-icons/ri";
import { API } from "../../utils/API";

const Error404 = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(photoSchema),
  });
  const onSubmit = async (data) => {
    // setIsSubmitting(true);
    const formData = new FormData();
    const photo = data.photo[0];
    formData.append("file", photo);
    console.log(formData);
    try {
      await API.post("posts/file", formData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      // await _post.createPost(data);
      // setPostUpdated(true);
      // setShowModal(false);
    } catch (error) {
    } finally {
      // setIsSubmitting(false);
    }
  };
  return (
    <div className="w-9/12  px-4 pt-2">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex  items-center justify-center">
          <label className="w-full bg-gray-100 mt-4 flex flex-col items-center justify-center px-4 py-6  text-blue rounded-lg tracking-wide uppercase  cursor-pointer hover:bg-gray-200 hover:text-white">
            <RiImageAddFill size={30} />
            <span className="mt-2 text-base leading-normal">Add a photo</span>
            <input ref={register} type="file" className="hidden" name="photo" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Error404;
