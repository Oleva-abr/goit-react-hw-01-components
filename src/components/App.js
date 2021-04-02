import React from 'react';
import Profile from './Profile/Profole';
import Statistics from './Statistic/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../database/user.json';
import statisticalData from '../database/statistic-data.json';
import friends from '../database/friends.json';
import transactions from '../database/transactions.json';

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
    <TransactionHistory items={transactions} />
  </>
);
export default App;
