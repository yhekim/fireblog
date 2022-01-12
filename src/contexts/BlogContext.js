import { createContext, useState } from "react";
import { addInfo } from "../helpers/functions";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const initialValues = {
    image: "",
    title: "",
    month: "",
    day: "",
    year: "",
    mail: "",
    overlay: "",
  };

  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) => {
    addInfo(info);
    setInfo(initialValues);
  };

  const editHandler = (id, title, content, overlay) => {
    setInfo({ id, title, content, overlay });
  };

  const values = {
    info,
    setInfo,
    handleFormSubmit,
    renk: "mavi",
  };
  return (
    <BlogContext.Provider value={values}>{props.children}</BlogContext.Provider>
  );
};

export default BlogContextProvider;
