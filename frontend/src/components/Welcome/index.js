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
      <div className="welcome">
        <h1>
          Welcome to NoteKeeper. This is a functioning clone of Google Keep. You
          have the ability to sign up for an account above by clicking on sign
          up. You are able to log in to your existing account if you have
          already set one up by clicking on log in, which will pop up the log in
          modal. You also can log in to take a look around without having your
          own account by using the demo login from the login modal above.
        </h1>
        <br></br>
        <h1>
          Upon accessing an account, you can view notes, add notes and delete
          notes. Enjoy viewing my application!
        </h1>
      </div>
    </>
  );
};

export default Welcome;
