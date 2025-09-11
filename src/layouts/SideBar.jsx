
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

export default function SideBar() {
  return (
    <div className="sidebar bg-dark rounded-start flex-column  mx-auto" style={{width: '250px', height: '100vh'}}>
      <div><h5 className="text-white p-4"><span className="bg-white text-black fw-bold rounded-circle d-inline-flex justify-content-center align-items-center me-2 fs-3" style={{width: '45px', height: '45px'}}>M</span>Mahmoud</h5></div>
      <ul className="nav flex-column">
        <li className="nav-item "><a href="#" className="nav-link d-flex flex-row align-items-center text-white fs-5"><AiTwotoneHome className=" mx-3"/>Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link d-flex flex-row align-items-center text-white fs-5"><AiOutlineUser className=" mx-3"/>Users</a></li>
        <li className="nav-item"><a href="#" className="nav-link d-flex flex-row align-items-center text-white fs-5"><AiFillSetting className=" mx-3"/>Settings</a></li>
      </ul>
      </div>
  )
}