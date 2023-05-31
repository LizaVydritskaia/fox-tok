import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { App } from '../components/App';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { StaticPage } from '../pages/StaticPage';
import { SystemLayout } from '../components/SystemLayout';
import { Posts } from '../pages/Posts';

import { PATH } from '../services/constants/paths';

import { getPosts } from '../services/posts';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route path={PATH.index} element={<App />}>
          <Route errorElement={<ErrorBoundary />}>
            <Route
              index
              element={<Posts />}
              loader={async () => ({ posts: getPosts() })}
            />
            <Route path=":staticPage" element={<StaticPage />} />
          </Route>
        </Route>
      </Route>
    </Route>,
  ),
);
