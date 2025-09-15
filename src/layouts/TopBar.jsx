import Input from "../components/ui/Input";
import { BsSearch, BsBell } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";
import { logout } from "../redux/authSlice";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function TopBar() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successful!");
  };

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-100 d-flex flex-column gap-3 p-3">
      {/* Top bar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 bg-light-subtle rounded-end shadow-sm gap-3">
        {/* Search */}
        <div className="input-group w-100 w-md-50">
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

        {/* Icons + Logout */}
        <div className="d-flex align-items-center gap-3 fs-5">
          <span className="bg-white rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center">
            <BsBell />
          </span>
          <button onClick={handleLogout} className="btn btn-outline-dark btn-sm">
            Logout
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-light-subtle p-3 rounded-end text-center text-md-start">
        <h5 className="mb-1">
          Welcome back, <span className="text-success">{user}</span>!
        </h5>
        <p className="mb-0 text-secondary">
          Here's what's happening with your account today.
        </p>
      </div>
    </div>
  );
}
