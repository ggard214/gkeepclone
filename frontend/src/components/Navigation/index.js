import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import bubblebop from "../HomePage/images/keep.jpeg";

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="signupbutton" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul id="top-nav-bar">
      <li>
        <NavLink exact to="/"><img className="homeicon" src={bubblebop} alt="home" /></NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;