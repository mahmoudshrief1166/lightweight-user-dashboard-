// import "./App.css";
import { Provider } from "react-redux";
import SideBar from "./layouts/SideBar";
import TopBar from "./layouts/TopBar";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="d-flex flex-row p-5 mx-auto">
          <SideBar></SideBar>
          <TopBar></TopBar>
          {/* Toast Container */}
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={true}
            draggable={true}
            pauseOnHover={true}
            theme="light"
          />
        </div>
      </Provider>
    </>
  );
}

export default App;
