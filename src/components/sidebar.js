import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './navigation';
import UserCard from './user-card';
import RewardInfo from './reward-info';
import ProgressCard from './progress-card';

function Sidebar({routes, loggedInUser, onSwitchUser}) {
  const {profilePic, name, job, xp: xpTotal, credits: creditsTotal} = loggedInUser;

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__user-details">
          <UserCard avatar={profilePic} userName={name} jobTitle={job} />
          <RewardInfo xp={xpTotal} credits={creditsTotal} />
          <ProgressCard userXp={xpTotal} />
        </div>
        <div className="sidebar__navigation">
          <Navigation routes={routes} onSwitchUser={onSwitchUser} />
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  onSwitchUser: PropTypes.func.isRequired,
  loggedInUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    job: PropTypes.string,
    profilePic: PropTypes.string,
    credits: PropTypes.number,
    xp: PropTypes.number,
    role: PropTypes.string
  }).isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      exact: PropTypes.bool
    })
  ).isRequired
};

export default Sidebar;
