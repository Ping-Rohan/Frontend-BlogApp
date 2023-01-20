import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile/profile.jsx";
import ProtectedRoute from "./pages/ProtectedRoute";
import SingleBlog from "./Blog/singleBlog";

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
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
