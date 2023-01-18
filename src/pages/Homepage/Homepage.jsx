import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, []);

  return (
    <>
      <Header />
    </>
  );
}
