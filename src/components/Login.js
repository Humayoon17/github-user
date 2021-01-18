import { Button } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import GithubLogo from '../image/github.png';
import React from 'react';
import '../styles/Login.css';
import auth, { provider } from '../firebase';

export default function Login({ setCurrentUser, setUserInfo }) {
  const signInWithGithub = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user full info.
        const currentUser = result.user;
        const userInfo = result.additionalUserInfo.profile;

        setCurrentUser(currentUser);
        setUserInfo(userInfo);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='login'>
      <div className='github-logo'>
        <img src={GithubLogo} alt='' />
        <div className='github-title'>
          <h2>Login With Github Account</h2>
        </div>
      </div>
      <div className='loging-btn'>
        <Button onClick={signInWithGithub}>
          <GitHub className='github-icon' />
          Sign in with Github
        </Button>
      </div>
    </div>
  );
}
