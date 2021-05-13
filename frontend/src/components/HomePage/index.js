import "./index.css";
import { useSelector } from "react-redux";
import keepimg from "./images/keep.jpeg";


const Home = () => {
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  return (
      <>
      <div>
      </div>
      <div><h1>This is the homepage when you log in to your account</h1></div>
      </>
  );
  };

export default Home;