import { Button } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <input
        type='text'
        className='search-input'
        placeholder='Search github user'
      />
      <Button className='search-btn'>
        <SearchOutlined className='search-icon' />
      </Button>
    </div>
  );
}

export default Header;
