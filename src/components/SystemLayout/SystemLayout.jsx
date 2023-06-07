import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Sprite } from '../Sprite';

export const SystemLayout = () => (
  <>
    <ScrollRestoration />
    <Sprite />
    <Outlet />
  </>
);
