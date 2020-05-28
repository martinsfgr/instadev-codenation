import React from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {

  return (
    <article className="post" data-testid="post">
      <header className="post__header">
        <div className="user">
          <Link to={`/users/${userInfo.username}`} className="user__thumb">
            <img src={userInfo.avatar} alt={userInfo.name} />
          </Link>

          <Link to={`/users/${userInfo.username}`} className="user__name">
            {userInfo.name}
          </Link>
        </div>
      </header>

      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>

    </article>
  );
};

export default Post;
