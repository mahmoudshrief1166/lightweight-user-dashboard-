import DataTable from "../ui/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserData, setCurrentPage } from "../../redux/userSlice";
import { openModal } from "../../redux/modalSlice";
import ModalPage from "../../pages/AddModalPage";
import { toast } from "react-toastify";

export default function HomeComponent() {
  const { users, loading, error, currentPage, pageSize, total } = useSelector(
    (state) => state.users
  );
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData({ page: currentPage, limit: pageSize }))
      .unwrap()
      .then(() => {
        toast.success("User data fetched successfully!");
      })
      .catch(() => {
        toast.error("Failed to fetch user data.");
      });
  }, [dispatch, currentPage, pageSize]);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalPages = Math.ceil(total / pageSize);

  // Loading state
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center bg-light-subtle"
        style={{ height: "100vh"}}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="alert alert-danger text-center my-5" role="alert">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  return (
    <div className="container-fluid bg-light-subtle py-4 w-100 p-md-4 w-md-50"
     stylye={{with: "100%"}}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-1 gap-md-3">
        <h2 className="fw-bold text-dark m-0 text-center text-md-start fs-5 fs-md-3">
          Team Members
        </h2>
        <div className="d-flex gap-1 gap-md-2">
          {/* Desktop button */}
          <button
            onClick={handleOpenModal}
            className="btn btn-outline-dark d-none d-md-block btn-sm"
          >
            Add User
          </button>
          {/* Mobile button */}
          <button
            onClick={handleOpenModal}
            className="btn btn-dark d-md-none rounded-circle btn-sm"
          >
            +
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="card shadow-sm border-0 rounded-3">
        <div className="table-responsive">
          <DataTable className="table table-hover table-striped mb-0 align-middle fs-6 fs-md-5">
            <thead className="table-dark text-center">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody className="text-center text-md-start ">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="fw-semibold">{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-muted py-4">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </DataTable>
        </div>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center align-items-center gap-1 gap-md-2 mt-3 flex-wrap">
        <button
          disabled={currentPage === 1}
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          className="btn btn-sm btn-outline-secondary rounded-circle"
        >
          ◀
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => dispatch(setCurrentPage(page))}
              className={`btn btn-sm rounded-circle ${
                currentPage === page ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              {page}
            </button>
          )
        )}

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
