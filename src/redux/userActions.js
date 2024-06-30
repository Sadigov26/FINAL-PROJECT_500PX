// uploadActions.js

export const uploadPhoto = (file) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('photo', file);
  
      const response = await fetch('http://localhost:5000/api/users/upload-profile-photo', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Dosya yüklenirken bir hata oluştu.');
      }
  
      const data = await response.json();
      dispatch({ type: 'UPLOAD_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'UPLOAD_FAILURE', payload: error.message });
    }
  };
  