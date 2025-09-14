import Input from "../components/ui/Input";
import { BsSearch, BsBell, BsPersonCircle } from "react-icons/bs";
import HomePage from "../pages/homePage";
import { useDispatch, useSelector } from "react-redux";
import {setSearchTerm} from "../redux/searchSlice"

export default function TopBar() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch=useDispatch();
  return (
    <div className="w-100 d-flex flex-column gap-3" style={{height: '100vh'}}>
    <div
      className="d-flex flex-row justify-content-between align-items-start gap-5 p-4 bg-light-subtle rounded-end"
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
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
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
