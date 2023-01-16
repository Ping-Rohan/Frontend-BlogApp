import * as Yup from "yup";

export default Yup.object({
  name: Yup.string().min(2).max(20).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter you password"),
  confirmPassword: Yup.string()
    .min(8)
    .required("Please confirm you password")
    .oneOf([Yup.ref("password"), null], "Password not matching"),
});
