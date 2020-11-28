import React, { useEffect, useState } from "react";
import { MdCall, MdNotifications } from "react-icons/md";
import Modal from "../../components/misc/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Spinner from "react-spinners/MoonLoader";
import { NotificationService } from "../../services/NotificationService";
import { notificationSchema } from "../../models/NotificationSchema";
import { calculateDistance } from "../../services/Haversine";

const VolunteerExtra = ({ volunteer, currentUser }) => {
  const {
    firstName,
    cellphone_number,
    lastName,
    role,
    address,
    lat,
    lng,
  } = volunteer;
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(notificationSchema),
  });
  const [distance, setDistance] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const _notification = new NotificationService();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(function (pos) {
      setDistance(
        calculateDistance(pos.coords.longitude, pos.coords.latitude, lng, lat)
      );
    });
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await _notification.alertVolunteer(
        data,
        volunteer.id,
        currentUser.address,
        currentUser.cellphone_number
      );
      setShowModal(false);
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="flex flex-row  border-b px-4 py-2">
        <div className="mr-2 flex justify-center items-center text-white cursor-pointer focus:outline-none w-10 h-10 bg-red-600 bg-transparent rounded-full">
          <p className="text-lg">{firstName[0].toUpperCase()}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-medium cursor-default">{`${firstName} ${lastName}`}</h1>
          <p className="text-xs text-gray-500 cursor-default">
            {distance.toFixed(2)} km away
            {/* {address.length > 25 ? address.substring(0, 25) + "..." : address} */}
          </p>
        </div>
        <div className="ml-auto flex items-center ">
          <MdNotifications
            onClick={() => setShowModal(true)}
            size={30}
            className="text-red-600 cursor-pointer"
          />
        </div>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        contentLabel="HelpModal"
      >
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-2xl text-center">
            Ask {volunteer.firstName} for Help
          </h1>
          <p className="text-sm text-gray-600 text-center">{address}</p>
          <p className="text-sm text-gray-600 text-center">
            {cellphone_number}
          </p>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className={`
            ${errors.description ? "border border-red-600" : null} 
            focus:outline-none h-64 focus:bg-gray-200  font-medium rounded-lg bg-gray-100 w-full px-6 py-4 text-sm mt-4`}
              type="text"
              placeholder="What's wrong?"
              name="description"
              rows="4"
              cols="50"
              ref={register}
            />
            {errors.description ? (
              <small className="text-xs w-2/5 text-red-600 font-medium my-1">
                {errors.description?.message}
              </small>
            ) : null}
            <button
              className="transition duration-500 w-full flex justify-center ease-in-out focus:bg-red-600 bg-red-500 focus:outline-none hover:bg-red-600 mt-9 cursor-pointer text-white font-semibold tracking-widest px-16 py-3 rounded-lg text-sm"
              type="submit"
            >
              {isSubmitting ? (
                <Spinner color={"#fff"} size={15}></Spinner>
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default VolunteerExtra;
