import React, { Fragment } from 'react';

import { PostContextProvider } from '../../contexts/Post.context';
import { usePosts } from '../../hooks/usePosts';

import { Container } from '../Container';
import { Header } from '../Header';
import { Post } from '../Post';
import { SideBar } from '../SideBar';
import { Sprite } from '../Sprite';

import './App.css';

export const App = () => {
  const posts = usePosts();

  return (
    <>
      <Sprite />
      <Header />
      <Container className="main">
        <SideBar />
        <PostContextProvider>
          <section className="content">
            {posts.map((data, index) => (
              <Fragment key={data.id}>
                <Post {...data} />
                {posts.length - 1 > index ? <hr /> : null}
              </Fragment>
            ))}
          </section>
        </PostContextProvider>
      </Container>
    </>
  );
};
