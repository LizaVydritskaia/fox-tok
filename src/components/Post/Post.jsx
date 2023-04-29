import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import { Button } from '../Button';
import { Icon } from '../Icon';

import './Post.css';

const videoStatus = {
  Stopped: 'stopped',
  Playing: 'playing',
  Paused: 'paused',
};

export const Post = ({ id, avatar, altText, author, video }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState(videoStatus.Stopped);

  const handlePlay = () => {
    setStatus(videoStatus.Playing);
    videoRef.current.play();
  };

  const handlePause = () => {
    setStatus(videoStatus.Paused);
    videoRef.current.pause();
  };

  const handleEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <article className="post">
      <img className="post__avatar" src={avatar} alt={altText} />
      <div className="post__content">
        <a className="post__author" href="#">
          {author}
        </a>
        <div className="player">
          <video
            ref={videoRef}
            id={id}
            className="player__video"
            src={video}
            onEnded={handleEnded}
          ></video>
          <Button
            className={classNames('player__btn', {
              active:
                status === videoStatus.Stopped || status === videoStatus.Paused,
            })}
            variant="icon"
            onClick={handlePlay}
          >
            <Icon hrefIconName="#play" />
          </Button>
          <Button
            className={classNames('player__btn', {
              active: status === videoStatus.Playing,
            })}
            variant="icon"
            onClick={handlePause}
          >
            <Icon hrefIconName="#pause" />
          </Button>
        </div>
      </div>
      <div className="post__actions">
        <Button variant="icon">
          <Icon hrefIconName="#like" />
        </Button>
        <Button variant="icon">
          <Icon hrefIconName="#comment" />
        </Button>
        <Button variant="icon">
          <Icon hrefIconName="#share" />
        </Button>
      </div>
    </article>
  );
};
