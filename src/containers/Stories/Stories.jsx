import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  const findStoryById = (id) => stories.find(story => story.id === id);

  const handleStory = (story) => {
    const foundStory = findStoryById(story.id);
    const profileData = getUserHandler(story.userId);

    setSelectedProfile(profileData);
    setSelectedHistory(foundStory);
    setShowStory(!showStory);
  };

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story) => {
            const profileData = getUserHandler(story.userId);

            return (
              <button 
                key={story.id} 
                className='user__thumb user__thumb--hasNew' 
                onClick={() => handleStory(story)}
              >
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
        <Story
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => setShowStory(!showStory)}
        />
        )}
    </React.Fragment>
  );
};

export default Stories;
