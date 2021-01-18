import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Profile from './components/Profile';
import TabsMenu from './components/TabsMenu';

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login />;
  }
  return (
    <div className='App'>
      <Header />
      <Profile />
      <TabsMenu />
    </div>
  );
}

export default App;
