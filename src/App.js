import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

export default function App() {
  const showSpinner = useSelector((state) => state.ui.showSpinner);

  return (
    <BrowserRouter>
      <Toaster containerStyle={{ fontSize: "16px" }} position="bottom-center" />

      <GridLoader
        color="#84D2C5"
        loading={showSpinner}
        className="spinner"
        cssOverride={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% , -50%)",
        }}
      />
      {!showSpinner && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
