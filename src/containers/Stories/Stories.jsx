import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler, showStory }) => {

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story) => {
            const profileData = getUserHandler(story.userId);

            return (
              <button key={story.id} className='user__thumb user__thumb--hasNew'>
                <div className="user__thumb__wrapper">
                  {profileData?.avatar 
                    ? <img src={profileData?.avatar} alt={profileData?.name} />
                    : <img src="https://cdn.frankerfacez.com/emoticon/417309/4" alt={profileData?.name} />
                  }
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {showStory && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
