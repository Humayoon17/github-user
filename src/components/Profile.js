import { Avatar } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookIcon from '@material-ui/icons/Book';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import React from 'react';
import '../styles/Profile.css';

export default function Profile() {
  return (
    <div className='profile'>
      <div className='top'>
        <div className='user-pic'>
          <Avatar
            src='https://avatars1.githubusercontent.com/u/59541560?s=460&u=88307faa892882633594e8497782c4dfb238380b&v=4'
            className='user-avatar'
          />
        </div>
        <div className='user-info'>
          <div className='account'>
            <div className='name'>
              <h3>Humayoon Muhammadi</h3>
              <div className='location'>
                <LocationOnIcon />
                <p>Kabul, Afghanistan</p>
              </div>
            </div>
            <div className='account-details'>
              <div className='follow-user'>
                Follow
                {/* <Link to="follow link" >Follow </Link> */}
              </div>
            </div>
          </div>
          <span className='user-bio'>i am a good developer</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='user-account-info'>
          <PeopleIcon className='info-icon' />
          <div className='user-account-item'>
            <h3>Followers</h3>
            <span>120</span>
          </div>
        </div>
        <div className='user-account-info'>
          <AccountCircleIcon className='info-icon' />
          <div className='user-account-item'>
            <h3>Following</h3>
            <span>20</span>
          </div>
        </div>
        <div className='user-account-info'>
          <BookIcon className='info-icon' />
          <div className='user-account-item'>
            <h3>Repos</h3>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
