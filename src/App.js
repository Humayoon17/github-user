import { Card } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
      <Header />
      <Profile />
      <div className='user-details-tabs'>
        <div className='tab-item active'>Followers</div>
        <div className='tab-item'>Followings</div>
        <div className='tab-item'>Repos</div>
      </div>
      <div className='container'>
        <Card className='profile-card'>
          <Profile />
        </Card>
        <Card className='profile-card'>
          <Profile />
        </Card>
        <Card className='profile-card'>
          <Profile />
        </Card>
        <Card className='profile-card'>
          <Profile />
        </Card>
        <Card className='profile-card'>
          <Profile />
        </Card>
        <Card className='profile-card'>
          <Profile />
        </Card>
        <Card className='profile-card'>
          <Profile />
        </Card>
        <Card className='profile-card'>
          <Profile />
        </Card>
        <Card className='profile-card'>
          <Profile />
        </Card>
        <Card className='profile-card'>
          <Profile />
        </Card>
      </div>
    </div>
  );
}

export default App;
