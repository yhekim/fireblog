import React, { useContext } from "react";
import "./LanguageCard.css";
import { useNavigate } from "react-router-dom";
import { BiComment } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { HiUserCircle } from "react-icons/hi";
import { AuthContext } from "../../contexts/AuthContext";
import { errorNote } from "../../helpers/toastNotify";

const LanguageCard = ({ language }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    currentUser
      ? navigate(`/dashboard/${language.id}`)
      : errorNote("Please Enter the Login");
  };

  return (
    <div className="llanguage">
      <div className="llink-cart" onClick={() => handleSubmit()}>
        <div className="llanguage-image lcard">
          <img
            src={language.image}
            className="llogoimage"
            alt={language.title}
          />
        </div>

        <div className="llanguage-info lcard">
          <h2>{language.title}</h2>
          <h5>{`${language.month}  ${language.day},  ${language.year}`}</h5>
          <p className="loverlay">{language.overlay}</p>
        </div>
      </div>

      <div className="language-info mailcard lcard">
        <div className="mail">
          <span className="HiUserCircle">
            <HiUserCircle />
          </span>
          <h6>{language.mail}</h6>
        </div>
        <div className="comment-like">
          <p className="firstSpan">
            <span>
              <FcLike />
            </span>
            22
          </p>
          <p>
            <span>
              <BiComment />
            </span>
            11
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
