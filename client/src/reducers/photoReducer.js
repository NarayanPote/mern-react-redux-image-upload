import {
  PHOTO_UPLOAD_REQUEST,
  PHOTO_UPLOAD_SUCCESS,
  PHOTO_UPLOAD_FAIL,
  PHOTO_LIST_FAIL,
  PHOTO_LIST_REQUEST,
  PHOTO_LIST_SUCCESS,
} from "./../constants/photoConstant";

export const photoReducer = (state = {}, action) => {
  switch (action.type) {
    case PHOTO_UPLOAD_REQUEST:
      return { loading: true };
    case PHOTO_UPLOAD_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case PHOTO_UPLOAD_FAIL:
      return { loading: false, error: action.payload };
    case 'LOAD_PHOTOS':
      return action.photos;
    default:
      return state;
  }
};

export const photoListReducer = (state = { notes: [] }, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case PHOTO_LIST_REQUEST:
      return { loading: true };
    case PHOTO_LIST_SUCCESS:
      return { loading: false, notes: action.payload};
    case PHOTO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
      
  }
};

