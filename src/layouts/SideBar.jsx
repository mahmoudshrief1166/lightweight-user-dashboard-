import { AiTwotoneHome, AiOutlineUser, AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-dark d-md-none m-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar bg-dark rounded-start flex-column pt-3  
          ${isOpen ? "d-flex" : "d-none"} d-md-flex`}
        style={{
          width: "250px",
          height: "100vh",
          position: "fixed", 
          top: 0,
          left: 0,
          zIndex: 1050, 
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <div>
          <h5 className="text-white p-3">
            <span
              className="bg-white text-black fw-bold rounded-circle d-inline-flex justify-content-center align-items-center me-2 fs-3"
              style={{ width: "45px", height: "45px" }}
            >
              M
            </span>
            Mahmoud
          </h5>
        </div>

        {/* Navigation */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to="/home"
              className="nav-link d-flex flex-row align-items-center text-white fs-5"
              onClick={() => setIsOpen(false)} // auto close on click
            >
              <AiTwotoneHome className="mx-3" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/users"
              className="nav-link d-flex flex-row align-items-center text-white fs-5"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineUser className="mx-3" />
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/settings"
              className="nav-link d-flex flex-row align-items-center text-white fs-5"
              onClick={() => setIsOpen(false)}
            >
              <AiFillSetting className="mx-3" />
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1040,
          }}
        />
      )}
    </>
  );
}
