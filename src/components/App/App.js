import React, { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//constants
import { authStatuses } from '../../services/constants/authStatuses';
import { PATH } from '../../services/constants/paths';

//components
import { Container } from '../Container';
import { Header } from '../Header';
import { Loader } from '../Loader';
import { SideBar } from '../SideBar';
import { Sprite } from '../Sprite';

import './App.css';

export const App = () => {
  const loggedOut = useSelector(
    (state) => state.auth.status !== authStatuses.loggedIn,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate(PATH.login);
    }
  }, [loggedOut, navigate]);

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
