import React, { useContext } from "react";
import "./NewBlog.css";
import logom3 from "../../assets/Logom8.png";
import { BlogContext } from "../../contexts/BlogContext";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const navigate = useNavigate();
  const { info, setInfo, handleFormSubmit } = useContext(BlogContext);

  //console.log(renk);

  const handleInputChange = (e) => {
    // const name=e.target.name
    // const value=e.target.value
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  console.log(info.overlay);
  //onClick={(e)=>formSubmit(e)}
  const submit = (e) => {
    e.preventDefault();
    handleFormSubmit(e);
    navigate("/");
  };
  return (
    <div className="newblog-form">
      <form className="newblog-container" onSubmit={(e) => submit(e)}>
        <div classNameName="input-container ic2">
          <img src={logom3} alt="" />
        </div>
        <div classNameName="input-container ic2 newblogTitle">
          <h1>{`──── NEW CHART ────`}</h1>
        </div>
        <div className="input-container ic1">
          <input
            id="title"
            name="title"
            className="input"
            type="text"
            placeholder=" "
            value={info.title}
            onChange={handleInputChange}
          />
          <div className="cut"></div>
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
            value={info.image}
            onChange={handleInputChange}
          />
          <div className="cut"></div>
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
            value={info.overlay}
            onChange={handleInputChange}
          />
          <div className="cut"></div>
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

export default NewBlog;
