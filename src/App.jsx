// import "./App.css";
import SideBar from "./layouts/SideBar";
import TopBar from "./layouts/TopBar";

function App() {
  return (
    <>
      <div className="d-flex flex-row p-5 mx-auto">
        <SideBar></SideBar>
        <TopBar></TopBar>
      </div>
    </>
  );
}

export default App;
