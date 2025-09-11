import Input from "../components/ui/Input";
import { BsSearch, BsBell, BsPersonCircle } from "react-icons/bs";
import HomePage from "../pages/homePage";

export default function TopBar() {
  return (
    <div className="w-100 d-flex flex-column justify-content-between" style={{height: '100vh'}}>
    <div
      className="d-flex flex-row justify-content-between align-items-start gap-5 p-4 bg-white rounded-end"
      style={{height: '100vh', width: "100%" }}
    >
      {/* Search */}
      <div className="input-group w-50">
        <span className="input-group-text bg-body-secondary">
          <BsSearch />
        </span>
        <Input
          type="search"
          placeholder="Search..."
          className="form-control form-control-md bg-body-secondary"
          style={{fontSize: "1.2rem" }}
        />
      </div>

      {/* Icons */}
      <div className="d-flex align-items-center gap-3 fs-4">
        <span className="bg-white rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center">
          <BsBell />
        </span>
        <span className="bg-white rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center">
          <BsPersonCircle />
        </span>
      </div>
    </div>
    <HomePage></HomePage>

    </div>
  );
}
