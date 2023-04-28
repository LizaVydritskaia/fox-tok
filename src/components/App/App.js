import React, { Fragment } from 'react';

import { Container } from '../Container';
import { Header } from '../Header';
import { Post } from '../Post';
import { SideBar } from '../SideBar';
import { Sprite } from '../Sprite';

import './App.css';

import { posts } from './config';

export const App = () => {
  return (
    <>
      <Sprite />
      <Header />
      <Container className="main">
        <SideBar />
        <section className="content">
          {posts.map((data, index) => (
            <Fragment key={data.id}>
              <Post {...data} />
              {posts.length - 1 > index ? <hr /> : null}
            </Fragment>
          ))}
        </section>
      </Container>
    </>
  );
};
