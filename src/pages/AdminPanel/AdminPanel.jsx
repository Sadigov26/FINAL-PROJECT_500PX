import React, { useState, useEffect } from 'react';
import { useGetAllUsersQuery, useDeleteUserMutation, useUpdateUserByAdminMutation } from '../../redux/slices/usersApiSlice';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import styles from './AdminPanel.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUserTie } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const AdminPanel = () => {
  
  const { data: users, refetch } = useGetAllUsersQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUserByAdminMutation] = useUpdateUserByAdminMutation();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userIdToEdit, setUserIdToEdit] = useState(null);
  const [userData, setUserData] = useState({ name: '', surname: '', email: '', isAdmin: false });
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [newUsersTodayCount, setNewUsersTodayCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'surname', 'email', 'createdAt', 'updatedAt'

  useEffect(() => {
    if (users) {
      const activeUsers = users.filter(user => user.isActive);
      setActiveUsersCount(activeUsers.length);

      const today = new Date();
      const newUsersToday = users.filter(user => {
        const userCreatedAt = new Date(user.createdAt);
        return userCreatedAt.getDate() === today.getDate() &&
          userCreatedAt.getMonth() === today.getMonth() &&
          userCreatedAt.getFullYear() === today.getFullYear();
      });
      setNewUsersTodayCount(newUsersToday.length);

      // Apply search and filters
      let filtered = users.filter(user => {
        const fullName = `${user.name} ${user.surname}`.toLowerCase();
        const email = user.email.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        return (
          fullName.includes(searchTermLower) ||
          email.includes(searchTermLower)
        );
      });

      // Sort filtered users based on sortBy and sortOrder
      filtered.sort((a, b) => {
        const fieldA = sortBy === 'createdAt' || sortBy === 'updatedAt' ? new Date(a[sortBy]) : a[sortBy];
        const fieldB = sortBy === 'createdAt' || sortBy === 'updatedAt' ? new Date(b[sortBy]) : b[sortBy];
        if (sortOrder === 'asc') {
          return fieldA > fieldB ? 1 : -1;
        } else {
          return fieldA < fieldB ? 1 : -1;
        }
      });

      setFilteredUsers(filtered);
    }
  }, [users, searchTerm, sortBy, sortOrder]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId).unwrap();
      toast.success(`User with ID ${userId} deleted successfully.`);
      refetch(); // Refetch users after deletion
    } catch (error) {
      toast.error(`Failed to delete user with ID ${userId}. ${error.message}`);
    }
  };

  const handleEditUser = (user) => {
    setUserIdToEdit(user._id);
    setUserData({ name: user.name, surname: user.surname, email: user.email, isAdmin: user.isAdmin });
    setIsEditModalOpen(true);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await updateUserByAdminMutation({ id: userIdToEdit, ...userData }).unwrap();
      toast.success(`User with ID ${userIdToEdit} updated successfully.`);
      setIsEditModalOpen(false);
      refetch(); // Refetch users after update
    } catch (error) {
      toast.error(`Failed to update user with ID ${userIdToEdit}. ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <ToastContainer />
        <div className={styles.main}>
          <div className={styles.proContainer}>
            <div className={styles.headBox}>
              <button className={styles.btnhead} onClick={() => navigate('/')}>
                Back<FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: "7px" }} />
              </button>
              <button className={styles.Btn} onClick={handleLogout}>
                Logout
              </button>
            </div>
            <h1>Admin Panel - All Users</h1>
            <div className={styles.summary}>
              {users && <p>Total Users: {users.length}</p>}
              <p>New Users Today: {newUsersTodayCount}</p>
              <p>Active Users: {activeUsersCount}</p>
            </div>
            <div className={styles.filterContainer}>
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="surname">Surname</option>
                <option value="email">Email</option>
                <option value="createdAt">Created At</option>
                <option value="updatedAt">Updated At</option>
              </select>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </div>
            <div className={styles.userList}>
              {filteredUsers.map((user) => (
                <div key={user._id} className={styles.user}>
                  <h3>Name: {user.name}</h3>
                  <h3>Surname: {user.surname}</h3>
                  <p>User id: {user._id}</p>
                  <p>Email: {user.email}</p>
                  <p>isAdmin: {user.isAdmin ? 'Yes' : 'No'}</p>
                  <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
                  <p>Updated At: {new Date(user.updatedAt).toLocaleString()}</p>
                  <div className={styles.adminpanelbtn}>
                    <button onClick={() => handleDeleteUser(user._id)}>Delete User</button>
                    <button onClick={() => handleEditUser(user)} style={{ background: "green" }}>Edit User</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Edit User Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            maxWidth: "400px",
            width: "80%",
            padding: "20px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h2>Edit User</h2>
        <form onSubmit={handleUpdateUser} className={styles.adminpanelform}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Surname</label>
            <input
              type="text"
              value={userData.surname}
              onChange={(e) => setUserData({ ...userData, surname: e.target.value })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={userData.isAdmin}
                onChange={(e) => setUserData({ ...userData, isAdmin: e.target.checked })}
                style={{ marginRight: "10px", width: "15px", height: "15px", overflow: "clip" }}
              />
              Is Admin <FontAwesomeIcon icon={faUserTie} style={{ marginLeft: "10px" }} />
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Update User
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AdminPanel;
