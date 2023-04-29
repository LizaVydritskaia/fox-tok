import React, { Component, Fragment } from 'react';

import { getPosts } from '../../services/posts';

import { Container } from '../Container';
import { Header } from '../Header';
import { PostClass } from '../PostClass';
import { SideBar } from '../SideBar';
import { Sprite } from '../Sprite';

import './App.css';

export class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideoId: null,
      posts: [],
    };

    this.setActiveVideoId = this.setActiveVideoId.bind(this);
  }

  async componentDidMount() {
    const apiPosts = await getPosts();

    this.setState({ posts: apiPosts });
  }

  setActiveVideoId(activeVideoId) {
    this.setState({ activeVideoId });
  }

  render() {
    const { activeVideoId, posts } = this.state;

    return (
      <>
        <Sprite />
        <Header />
        <Container className="main">
          <SideBar />
          <section className="content">
            {posts.map((data, index) => (
              <Fragment key={data.id}>
                <PostClass
                  {...data}
                  activeVideoId={activeVideoId}
                  setActiveVideoId={this.setActiveVideoId}
                />
                {posts.length - 1 > index ? <hr /> : null}
              </Fragment>
            ))}
          </section>
        </Container>
      </>
    );
  }
}
