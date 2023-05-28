import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '../Container';
import { Header } from '../Header';
import { Loader } from '../Loader';
import { SideBar } from '../SideBar';
import { Sprite } from '../Sprite';

import './App.css';

export const App = () => {
  return (
    <>
      <Sprite />
      <Header />
      <Container className="main">
        <SideBar />
        <section className="content">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </Container>
    </>
  );
};
