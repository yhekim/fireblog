import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Dashboard from "../pages/dashboard/Dashboard";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Profile from "../pages/profile/Profile";
import NewBlog from "../pages/newblog/NewBlog";
import Details from "../pages/detail/Details";
import EditBlog from "../pages/editBlog/EditBlog";
import NonAuthorized from "../pages/NonAuthorized/NonAuthorized";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { auth } from "../helpers/firebase";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  useEffect(() => [currentUser]);
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/about"
          element={currentUser ? <About /> : <NonAuthorized />}
        />
        <Route
          path="/profile"
          element={currentUser ? <Profile /> : <NonAuthorized />}
        />
        <Route
          path="/newblog"
          element={currentUser ? <NewBlog /> : <NonAuthorized />}
        />
        <Route
          path="/editblog/:id"
          element={currentUser ? <EditBlog /> : <NonAuthorized />}
        />
        <Route
          path="/dashboard/:id"
          element={currentUser ? <Details /> : <NonAuthorized />}
        />
        <Route path="/error" element={<NonAuthorized />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
