import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPhotos } from "./../actions/photoAction";

function ListPhoto() {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { notes } = noteList;
  console.log(notes);
  const url='http://localhost:8080/'

  useEffect(() => {
    dispatch(listPhotos());
  }, [dispatch]);


  return (
    <div>
       <div style={{display: 'flex'}}> 
        {notes &&
          notes.map((repos) => (
            <div>
            <h3>{repos.firstname}</h3>
            <h3>{repos.lastname}</h3>
            {repos.uploaded_Image.map((el, key) => (
                    <img
                      src={url + el}
                      key={key}
                      style={{
                        border: "1px solid #ddd",
                        padding: " 5px",
                        width: "30%",
                      }}
                      alt="some value"
                    />
                  ))}
            </div>
          ))}
      </div>
    </div>
  );        
}

export default ListPhoto;
