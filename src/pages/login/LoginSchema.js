import * as Yup from "yup";

export default Yup.object({
  email: Yup.string().email().required("Please enter email"),
  password: Yup.string().required("Please enter password"),
});
