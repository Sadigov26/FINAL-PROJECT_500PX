// uploadReducer.js

const initialState = {
    message: '',
    error: null,
  };
  
  const uploadReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_SUCCESS':
        return {
          ...state,
          message: action.payload.message,
          error: null,
        };
      case 'UPLOAD_FAILURE':
        return {
          ...state,
          message: '',
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default uploadReducer;
  