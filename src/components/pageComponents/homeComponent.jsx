import DataTable from "../ui/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserData, setCurrentPage } from "../../redux/userSlice";
import { openModal } from "../../redux/modalSlice";
import ModalPage from "../../pages/AddModalPage";

export default function HomeComponent() {
  const { users, loading, error, currentPage, pageSize, total } =
    useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData({ page: currentPage, limit: pageSize }));
  }, [dispatch, currentPage, pageSize]);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const totalPages = Math.ceil(total / pageSize);

  // Loading state
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-light-subtle" style={{ height: "100vh" }}>
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  return (
    <div className="mx-auto p-5 bg-light-subtle" style={{ width: "100%" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark"> Team Members</h1>
        <div className="d-flex gap-2">
          <button onClick={handleOpenModal} className="btn btn-outline-dark">
            Add User
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="card shadow-sm rounded-3">
        <DataTable className="table table-hover table-striped mb-0">
          <thead className="table-dark text-center">
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="fw-semibold">{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </DataTable>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          className="btn btn-sm btn-outline-secondary rounded-circle"
        >
          ◀
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => dispatch(setCurrentPage(page))}
            className={`btn btn-sm rounded-circle ${
              currentPage === page ? "btn-dark" : "btn-outline-dark"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          className="btn btn-sm btn-outline-secondary rounded-circle"
        >
          ▶
        </button>
      </div>

      {/* Modal */}
      <ModalPage />
    </div>
  );
}
