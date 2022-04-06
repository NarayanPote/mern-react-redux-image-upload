import {
  PHOTO_UPLOAD_REQUEST,
  PHOTO_UPLOAD_SUCCESS,
  PHOTO_UPLOAD_FAIL,
  PHOTO_LIST_FAIL,
  PHOTO_LIST_REQUEST,
  PHOTO_LIST_SUCCESS
} from "./../constants/photoConstant";

import axios from "axios";

export const addphoto = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    dispatch({ type: PHOTO_UPLOAD_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    const { data } = await axios.post("http://localhost:8080/images/add", formData , config);

    dispatch({ type: PHOTO_UPLOAD_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PHOTO_UPLOAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  } 
};

export const listPhotos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PHOTO_LIST_REQUEST,
    });

    const { data } = await axios.get('http://localhost:8080/images/');
    dispatch({
      type: PHOTO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PHOTO_LIST_FAIL,
      payload: message,
    });
  }
};