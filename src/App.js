import { Divider } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  const [otherUser, setOtherUser] = useState(null);

  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    type: false,
    message: '',
  });

  const searchUserByUsername = (username) => {
    setLoading(true);
    setError({
      type: false,
      message: '',
    });
    setOtherUser(null);
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        if ('message' in result) {
          setError({
            type: true,
            message: `${username} does't exist!`,
          });
        } else {
          setOtherUser(result);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError({
          type: true,
          message: error.message,
        });
        console.log(error);
      });
  };

  useEffect(() => {
    if (searchInput !== '') {
      searchUserByUsername(searchInput);
    }
  }, [searchInput]);

  if (!currentUser) {
    return <Login setUserInfo={setUserInfo} setCurrentUser={setCurrentUser} />;
  }

  let searchedElement = <span>{''} </span>;

  if (loading) {
    searchedElement = <Loading />;
  }
  if (error.type) {
    searchedElement = (
      <div
        style={{
          marginTop: '3rem',
        }}
      >
        <Alert severity='error'>{error.message}</Alert>
      </div>
    );
  }

  if (otherUser && otherUser) {
    searchedElement = (
      <Profile
        name={otherUser.name}
        avatar_url={otherUser.avatar_url}
        html_url={otherUser.html_url}
        location={otherUser.location}
        bio={otherUser.bio}
        followers={otherUser.followers}
        following={otherUser.following}
        public_repos={otherUser.public_repos}
      />
    );
  }

  return (
    <div className='App'>
      <Profile
        name={userInfo.name}
        avatar_url={userInfo.avatar_url}
        html_url={userInfo.html_url}
        location={userInfo.location}
        bio={userInfo.bio}
        followers={userInfo.followers}
        following={userInfo.following}
        public_repos={userInfo.public_repos}
      />
      <Divider className='divider' />
      <Header setSearchInput={setSearchInput} />

      {searchedElement}
    </div>
  );
}

export default App;
