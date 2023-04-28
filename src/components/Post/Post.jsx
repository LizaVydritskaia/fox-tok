import React from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';

import './Post.css';

export const Post = ({ id, avatar, altText, author, video }) => (
  <article className="post">
    <img className="post__avatar" src={avatar} alt={altText} />
    <div className="post__content">
      <a className="post__author" href="#">
        {author}
      </a>
      <div className="player js-player">
        <video id={id} className="player__video js-video" src={video}></video>
        <Button className="player__btn active js-play" variant="icon">
          <Icon hrefIconName="#play" />
        </Button>
        <Button className="player__btn js-pause" variant="icon">
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
