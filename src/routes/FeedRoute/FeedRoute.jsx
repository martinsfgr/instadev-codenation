import React, { useState, useEffect } from 'react';

import Posts from '../../containers/Posts';
import Stories from '../../containers/Stories';

import Loading from '../../components/Loading';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const getUserPostById = (id) => users.find(user => id === user.id);

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }
    
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`)
      .then((res) => res.json())
      .then(data => {
        setPosts([...posts, ...data]);
        setUsersFetched(usersFetched + 1);
      });
  }, [users, usersFetched]);

  console.log(posts)

  return (
    <div data-testid="feed-route">
      {users.length !== usersFetched
        ? (<Loading />)
        : (<Posts 
            posts={posts} 
            getUserHandler={getUserPostById} 
          />)
      }
    </div>
  );
};

export default FeedRoute;
