import React from 'react';
import PropTypes from 'prop-types';
import styles from './friend.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    <FriendListItem friends={friends} />
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
export default FriendList;
