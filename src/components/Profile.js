import { Avatar, CircularProgress } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookIcon from '@material-ui/icons/Book';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import React from 'react';
import '../styles/Profile.css';

export default function Profile({
  name,
  avatar_url,
  html_url,
  location,
  bio,
  followers,
  following,
  public_repos,
}) {
  return (
    <div className='profile'>
      <div className='top'>
        <div className='user-pic'>
          {!avatar_url ? (
            <CircularProgress />
          ) : (
            <Avatar src={avatar_url} className='user-avatar' />
          )}
        </div>
        <div className='user-info'>
          <div className='account'>
            <div className='name'>
              <h3>{name}</h3>
              <div className='location'>
                <LocationOnIcon />
                <p>{location}</p>
              </div>
            </div>
            <div className='account-details'>
              <a
                style={{ color: 'white' }}
                href={html_url}
                target='_blank'
                rel='noreferrer'
              >
                <div className='follow-user'>Follow </div>
              </a>
            </div>
          </div>
          <span className='user-bio'>{bio}</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='user-account-info'>
          <PeopleIcon className='info-icon' />
          <div className='user-account-item'>
            <h3>Followers</h3>
            <span>{followers}</span>
          </div>
        </div>
        <div className='user-account-info'>
          <AccountCircleIcon className='info-icon' />
          <div className='user-account-item'>
            <h3>Followings</h3>
            <span>{following}</span>
          </div>
        </div>
        <div className='user-account-info'>
          <BookIcon className='info-icon' />
          <div className='user-account-item'>
            <h3>Repos</h3>
            <span>{public_repos}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
