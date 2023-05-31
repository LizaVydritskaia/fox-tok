import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { App } from '../components/App';
import { StaticPage } from '../pages/StaticPage';
import { SystemLayout } from '../components/SystemLayout';
import { Posts } from '../pages/Posts';

import { PATH } from '../services/constants/paths';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route path={PATH.index} element={<App />}>
        <Route index element={<Posts />} />
        <Route path=":staticPage" element={<StaticPage />} />
      </Route>
    </Route>,
  ),
);
