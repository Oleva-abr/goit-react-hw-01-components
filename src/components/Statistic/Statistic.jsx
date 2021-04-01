import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistic.module.css';

function getRandomColor() {
  const ran = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + ran() + ',' + ran() + ',' + ran() + ')';
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.stat_list}>
      {stats.map(stat => (
        <li
          className={styles.item}
          key={stat.id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
