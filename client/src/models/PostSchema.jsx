import * as yup from "yup";

export const postSchema = yup.object().shape({
  description: yup
    .string()
    .required("Description is required")
    .min(3, "Description is too short"),
  tags: yup.array().of(yup.string()),
  category: yup.string().required("Category is required"),
});
