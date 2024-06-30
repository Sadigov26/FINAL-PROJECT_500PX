// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import styles from './PhotoUploadForm.module.scss';  
// import { removePhoto, setPhotos } from '../../redux/slices/photoSlice';
// import { useGetPhotosQuery, useDeletePhotoMutation } from '../../redux/slices/photoApiSlice';

// const Dashboard = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { data, error, isLoading } = useGetPhotosQuery();
//   const [deletePhoto] = useDeletePhotoMutation();

//   useEffect(() => {
//     if (!userInfo) {
//       navigate('/login');
//     }
//     if (data && Array.isArray(data)) { 
//       setTimeout(() => {
//         dispatch(setPhotos(data));
//       }, 2000);
//     }
//   }, [navigate, userInfo, data, dispatch]);

//   const handleDelete = async (id) => {
//     try {
//       await deletePhoto(id).unwrap();
//       setTimeout(() => {
//         dispatch(removePhoto(id));
//       }, 1500);

//     } catch (err) {
//       console.error('Failed to delete the todo:', err);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <button onClick={() => navigate('/profile')} className={styles.profileButton}>Go to Profile</button>
//         <button onClick={() => navigate('/add-new-todo')} className={styles.addButton}>Add new task</button>
//       </div>
//       <div className={styles.todoList}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error loading </p>}
//         {data && Array.isArray(data) && data.map(item => (
//           <div key={item._id} className={styles.todoItem}>
//             <h3>{item.title}</h3>
//             <p>{item.body}</p>
//             <button onClick={() => handleDelete(item._id)} className={styles.deleteButton}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
