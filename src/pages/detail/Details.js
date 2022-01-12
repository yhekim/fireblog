import React from "react";
import "./Details.css";
import { BiComment } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { useParams, useNavigate } from "react-router-dom";
import { deleteInfo, useFetch } from "../../helpers/functions";
import { HiUserCircle } from "react-icons/hi";

const Details = () => {
  const navigate = useNavigate();

  const { languageList } = useFetch();
  //console.log(languageList)
  const { id } = useParams();
  //console.log(title)

  if (languageList !== undefined) {
    var result = languageList.find((t) => t.id === id);
    console.log(result);
  } else return null;

  const deletedInfo = (id) => {
    deleteInfo(id);
    navigate("/");
  };
  const editInfo = (id) => {
    navigate(`/editblog/${id}`);
  };

  return (
    <>
      <div className="details">
        <h1>{`──── DETAILS ────`}</h1>
        <div className="languages">
          <div className="language-image card">
            <img src={result.image} className="logoimage" alt={result.title} />
          </div>

          <div className="language-info card">
            <h2>{result.title}</h2>
            <h5>{`${result.month}  ${result.day},  ${result.year}`}</h5>
            <p>{result.overlay}</p>
          </div>
          <div className="language-info mailcard card">
            <div className="mail">
              <span className="HiUserCircle">
                <HiUserCircle />
              </span>
              <h6>{result.mail}</h6>
            </div>
            <div className="comment-like">
              <p>
                <span>
                  <BiComment />
                </span>
                11
              </p>
              <p>
                <span className="FcLike">
                  <FcLike />
                </span>
                22
              </p>
            </div>
          </div>
        </div>
        <div className="detail-button">
          <button
            className="detail-delete buttondelete"
            onClick={() => deletedInfo(result.id)}
          >
            Delete
          </button>
          <button
            className="detail-update buttonupdate"
            onClick={() => editInfo(result.id)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
