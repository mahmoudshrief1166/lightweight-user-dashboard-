import Modal from "../components/ui/Modal";
import Input from "../components/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import { addNewUser } from "../redux/userSlice";
import { useState } from "react";

export default function ModalPage() {
  const isModelOpen = useSelector((state) => state.modal.isModelOpen);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    dispatch(addNewUser(formData));
    setFormData({ name: "", username: "", email: "" });
    dispatch(closeModal());
  };
  return (
    <Modal
      title="Add User"
      isOpen={isModelOpen}
      onClose={handleCloseModal}
      onSave={handleSaveChanges}
    >
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <Input
            name="name"
            type="text"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>

          <Input
            name="username"
            type="text"
            placeholder="User name"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </Modal>
  );
}
