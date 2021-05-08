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
      <img className="keeplogo" src={keepimg} alt="NoteKeeper" />
      </div>
      <div><h1>homepage</h1></div>
      </>
  );
  };

export default Home;