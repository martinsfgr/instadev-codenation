import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [profileName, setProfileName] = useState('');
  const [profileUsername, setProfileUsername] = useState('');
  const [profileAvatar, setProfileAvatar] = useState('');

  
  useEffect(() => {
    const { pathname } = window.location;
    const param = pathname.split("/")[2];

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${param}`)
      .then(response => response.json())
      .then(data => {
        setProfileName(data[0].name);
        setProfileUsername(data[0].username);
        setProfileAvatar(data[0].avatar);
      });
  }, []);

  return (
    <div>
      <UserProfile
        name={profileName}
        username={profileUsername}
        avatar={profileAvatar}
      />
    </div>
  );
};

export default ProfileRoute;
