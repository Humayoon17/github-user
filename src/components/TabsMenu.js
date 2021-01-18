import { Tab, Tabs, Box, Typography, Card } from '@material-ui/core';
import React from 'react';
import Profile from './Profile';

function TabPanel({ children, value, index }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function TabsMenu() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='user-details-tabs'>
        <Tabs
          value={value}
          onChange={handleChange}
          className='hide-bottom-line'
        >
          <Tab label='Followers' />
          <Tab label='Followings' />
          <Tab label='Repos' />
        </Tabs>
      </div>

      <div className='container'>
        <TabPanel value={value} index={0}>
          <Card className='profile-card'>
            <Profile />
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card className='profile-card'>
            <Profile />
          </Card>
          <Card className='profile-card'>
            <Profile />
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card className='profile-card'>
            <Profile />
          </Card>
          <Card className='profile-card'>
            <Profile />
          </Card>
          <Card className='profile-card'>
            <Profile />
          </Card>
        </TabPanel>
      </div>
    </>
  );
}

export default TabsMenu;
