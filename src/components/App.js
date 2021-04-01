import React from 'react';
import Profile from './Profile/Profole';
import Statistics from './Statistic/Statistic';

import user from './Profile/user.json';
import statisticalData from './Statistic/statistic-data.json';

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
  </>
);
export default App;
