import Input from "../components/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export default function Authentication() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    try {
      dispatch(login(formData));
      setErrors("");
      toast.success("Login successful!");
    } catch (err) {
      setErrors(err.message);
      toast.error("Login failed. Please try again.");
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ height: "100vh" }}
    >
      <div className="card shadow-sm border-0 p-4" style={{ width: "350px" }}>
        <h3 className="text-center fw-bold mb-4 text-dark">Authentication</h3>
        <form className="d-flex flex-column gap-3" onSubmit={handleChange}>
          {/* Username */}
          <div>
            <label className="form-label fw-semibold text-dark">Username</label>
            <Input
              placeholder="Enter username"
              className="form-control"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div>
            <label className="form-label fw-semibold text-dark">Password</label>
            <Input
              type="password"
              placeholder="Enter password"
              className="form-control"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-dark w-100">
            Login
          </button>
        </form>
        {errors && (
          <div className="alert alert-danger text-center mt-3" role="alert">
            {errors}
          </div>
        )}
      </div>
    </div>
  );
}
