import * as yup from "yup";

export const notificationSchema = yup.object().shape({
  description: yup
    .string()
    .required("Description is required")
    .min(3, "Description is too short"),
});
