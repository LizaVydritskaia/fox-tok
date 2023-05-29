import React, { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { App } from '../components/App';
import { Posts } from '../pages/Posts';

import { PAGE, PATH } from '../services/constants/paths';
import { SystemLayout } from '../components/SystemLayout';

const About = lazy(() => import('../pages/About'));
const Careers = lazy(() => import('../pages/Careers'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route path={PATH.index} element={<App />}>
        <Route index element={<Posts />} />
        <Route path={PAGE.about} element={<About />} />
        <Route path={PAGE.contacts} element={<Contacts />} />
        <Route path={PAGE.careers} element={<Careers />} />
      </Route>
    </Route>,
  ),
);
