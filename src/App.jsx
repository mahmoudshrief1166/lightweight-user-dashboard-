// import "./App.css";
import { Provider } from "react-redux";
import SideBar from "./layouts/SideBar";
import TopBar from "./layouts/TopBar";
import {store} from "./redux/store";

function App() {
  return (
    <>

      <Provider store={store}>
      <div className="d-flex flex-row p-5 mx-auto">
        <SideBar></SideBar>
        <TopBar></TopBar>
      </div>
      </Provider>
      
    </>
  );
}

export default App;
