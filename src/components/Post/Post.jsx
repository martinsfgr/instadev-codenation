import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);

  return (
    <article className="post" data-testid="post">
      {userInfo && (
        <header className="post__header">
          <div className="user">
            <Link to={`/users/${userInfo.username}`} className="user__thumb">
              <img src={userInfo.avatar} alt={userInfo.name} />
            </Link>

            <Link to={`/users/${userInfo.username}`} className="user__name">
              {userInfo.name}
            </Link>
          </div>

          <button className="post__context" onClick={() => setFollow(!follow)}>
            {follow
              ? <span className="follow-btn is-following">Seguindo</span>
              : <span className="follow-btn">Seguir</span>
            }
          </button>
        </header>
      )}

      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>

      {userInfo && (
        <nav className="post__controls">
          <button className="post__control" onClick={() => setLike(!like)}>
            {like ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
          </button>

          <div className="post__status">
            <div className="user">
              <span>Curtido por {like ? postInfo.comments.length + 1 : postInfo.comments.length} pessoas.</span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
