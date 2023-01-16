import "./App.css";
import Signup from "./pages/signup/signup";
import { Circles } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showSpinner = useSelector((state) => state.ui.showSpinner);
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      {showSpinner && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="spinner"
          visible={true}
        />
      )}
      {!showSpinner && (
        <>
          <Signup />
        </>
      )}
    </div>
  );
}

export default App;
