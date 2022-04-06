import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addphoto } from "./../actions/photoAction";

function AddPhoto() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [uploaded_Image, setPhoto] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.photoList);
  const { userInfo } = userRegister;

  const upload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    for (var x = 0; x < uploaded_Image.length; x++) {
      formData.append("uploaded_Image", uploaded_Image[x]);
    }

    dispatch(addphoto(formData));
  };

  let navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/view-photo');;
    }
  }, [history, userInfo]);

  return (
    <div className="App" style={{ padding: "50px", height: "200px" }}>
      <div className="jumbotron">
        <form onSubmit={upload} encType="multipart/form-data">
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              name="firstname"
              required
              className="form-control"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <br />

          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              name="lastname"
              required
              className="form-control"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
       
          <br />
          <div className="form-group">
            <input
              type="file"
              multiple
              required
              filename="uploaded_Image"
              className="form-control-file"
              onChange={(e) => {
                setPhoto(e.target.files);
              }}
            />
          </div>

          <button type="submit" className="primary" size="lg">
            Upload!
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddPhoto;
