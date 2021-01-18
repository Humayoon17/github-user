import { Button } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import '../styles/Header.css';

function Header({ setSearchInput }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    if (searchTerm.trim() !== '') {
      setSearchInput(searchTerm);
    }
  };

  return (
    <div className='header'>
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        type='text'
        className='search-input'
        placeholder='Search github user'
      />
      <Button className='search-btn' onClick={handleSearchClick}>
        <SearchOutlined className='search-icon' />
      </Button>
    </div>
  );
}

export default Header;
