import React, { Component, createRef } from 'react';
import classNames from 'classnames';

import { Button } from '../Button';
import { Icon } from '../Icon';

import './Post.css';

const videoStatus = {
  Stopped: 'stopped',
  Playing: 'playing',
  Paused: 'paused',
};

export class PostClass extends Component {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
    this.state = {
      status: videoStatus.Stopped,
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
  }

  componentDidUpdate() {
    const { status } = this.state;
    const { id, activeVideoId } = this.props;

    if (
      this.videoRef.current &&
      status !== videoStatus.Stopped &&
      activeVideoId !== id
    ) {
      this.setState({ status: videoStatus.Stopped });
      this.videoRef.current.pause();
      this.videoRef.current.currentTime = 0;
    }
  }

  handlePlay() {
    const { id, setActiveVideoId } = this.props;
    setActiveVideoId(id);
    this.setState({ status: videoStatus.Playing });
    this.videoRef.current.play();
  }

  handlePause() {
    this.setState({ status: videoStatus.Paused });
    this.videoRef.current.pause();
  }

  handleEnded() {
    this.videoRef.current.currentTime = 0;
    this.videoRef.current.play();
  }

  render() {
    const { status } = this.state;
    const { id, avatar, altText, author, video } = this.props;

    return (
      <article className="post">
        <img className="post__avatar" src={avatar} alt={altText} />
        <div className="post__content">
          <a className="post__author" href="#">
            {author}
          </a>
          <div className="player">
            <video
              ref={this.videoRef}
              id={id}
              className="player__video"
              src={video}
              onEnded={this.handleEnded}
            ></video>
            <Button
              className={classNames('player__btn', {
                active:
                  status === videoStatus.Stopped ||
                  status === videoStatus.Paused,
              })}
              variant="icon"
              onClick={this.handlePlay}
            >
              <Icon hrefIconName="#play" />
            </Button>
            <Button
              className={classNames('player__btn', {
                active: status === videoStatus.Playing,
              })}
              variant="icon"
              onClick={this.handlePause}
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
  }
}
