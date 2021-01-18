import { Button } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import GithubLogo from '../image/github.png';
import React from 'react';
import '../styles/Login.css';

export default function Login() {
  const signInWithGithub = () => {
    /// sign in with github
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
        <Button>
          <GitHub className='github-icon' />
          Sign in with Github
        </Button>
      </div>
    </div>
  );
}
