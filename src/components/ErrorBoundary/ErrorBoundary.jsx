import React from 'react';
import { useRouteError } from 'react-router-dom';

import { Icon } from '../Icon';

import './ErrorBoundary.css';

export const ErrorBoundary = () => {
  const error = useRouteError();
  let message = 'Something went wrong';

  if (error.message === '204') {
    message = 'No data to display';
  }

  if (error.message === '404') {
    message = '404. Page not found';
  }

  return (
    <div className="error-boundary">
      <Icon className="error-boundary__icon" hrefIconName="#error" />
      <h3 className="error-boundary__message">{message}</h3>
    </div>
  );
};
