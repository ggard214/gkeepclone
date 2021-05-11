import "./index.css";
import { useSelector } from "react-redux";
import keepimg from "../../components/HomePage/images/keep.jpeg";

const Welcome = () => {
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  return (
    <>
      <div>
        <img className="keeplogo" src={keepimg} alt="NoteKeeper" />
      </div>
      <div>
        <h1>Welcome</h1>
      </div>
    </>
  );
};

export default Welcome;
