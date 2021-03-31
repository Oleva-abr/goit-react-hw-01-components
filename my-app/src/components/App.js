import React from 'react';
import Profile from './Profile/Profole';
import user from './Profile/user.json';

const App = () => (
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
);
export default App;
