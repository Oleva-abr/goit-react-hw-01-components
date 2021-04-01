import React from 'react';
import Profile from './Profile/Profole';
import Statistics from './Statistic/Statistic';
import FriendList from './FriendList/FriendList';

import user from './Profile/user.json';
import statisticalData from './Statistic/statistic-data.json';
import friends from './FriendList/friends.json';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />;
    <FriendList friends={friends} />,
  </>
);
export default App;
