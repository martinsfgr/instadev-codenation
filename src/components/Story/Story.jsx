import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [metadata, setMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const updateProgress = useCallback(() => {
    if (metadata?.duration !== null && currentTime !== null) {
      const elapsedTime = ((currentTime / metadata.duration) * 100);
      return `${elapsedTime.toFixed(2)}%`;
    }

    return '0%';
  }, [metadata, currentTime])

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
             <Link to={`/users/${user.username}`} className="user__thumb">
                <img src={user.avatar} alt={user.name} />
              </Link>

              <Link to={`/users/${user.username}`} className="user__name">{user.name}</Link>
          </div>

          <button
            className="story__close"
            onClick={() => handleClose()}
          >
            <i className="fas fa-times" />
          </button>
        </header>
      </div>
    </section>
  );
};

export default Story;
