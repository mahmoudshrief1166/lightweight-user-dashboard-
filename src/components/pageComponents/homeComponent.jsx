import DataTable from '../ui/DataTable'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchUserData } from "../../redux/userSlice"; 

export default function HomeComponent() {
  const { users, loading, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (loading) return (
    <div className="d-flex justify-content-center align-content-center bg-white p-4" style={{height: '100vh'}}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="me-auto">Error Message</strong>
        <small>Now</small>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">
        Sorry, Error occurred: {error}
      </div>
    </div>
  );

  return (
    <div className="mx-auto p-5 bg-white" style={{width: '100%'}}>
      <DataTable className="table table-striped w-75 mx-auto">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </div>
  );
}
