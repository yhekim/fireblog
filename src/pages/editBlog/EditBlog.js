import React, { useEffect, useState } from "react";
import "./EditBlog.css";
import logom3 from "../../assets/Logom2.png";

import { useNavigate, useParams } from "react-router-dom";
import { updateInfo, useFetch } from "../../helpers/functions";

const EditBlog = () => {
  const [info, setInfo] = useState([]);

  const { languageList } = useFetch();
  console.log(languageList);
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  useEffect(() => {
    setInfo(languageList?.find((t) => t.id === id));
  }, [languageList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateInfo(info);
    navigate("/");
    console.log(info);
  };

  const handleInfoChange = (e) => {
    console.log("value", e.target.value);
    console.log("name", e.target.name);

    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="newblog-form">
      <form className="newblog-container" onSubmit={handleSubmit}>
        <div className="input-container ic2">
          <img alt="" src={logom3} />
        </div>
        <div className="input-container ic2 newblogTitle">
          <h1>{`──── EDIT BLOG ────`}</h1>
        </div>
        <div className="input-container ic1">
          <input
            id="title"
            name="title"
            className="input"
            type="text"
            placeholder=" "
            value={info?.title}
            onChange={handleInfoChange}
          />
          <div className="cut"> </div>
          <label for="title" className="placeholder">
            Title
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="image"
            name="image"
            className="input"
            type="text"
            placeholder=" "
            value={info?.image}
            onChange={handleInfoChange}
          />
          <div className="cut"> </div>
          <label for="image" className="placeholder">
            Image URL
          </label>
        </div>
        <div className="input-container ic2">
          <textarea
            id="content"
            name="overlay"
            rows="50"
            className="input"
            type="text"
            placeholder=" "
            value={info?.overlay}
            onChange={handleInfoChange}
          />
          <div className="cut"> </div>
          <label for="content" className="placeholder">
            Content
          </label>
        </div>
        <button type="text" className="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
