import React, { useId } from 'react';

import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';

import './LoginPage.css';

export const LoginPage = () => {
  const emailId = useId();
  const passwordId = useId();

  return (
    <div className="login">
      <Icon className="login__logo" hrefIconName="#logo" />
      <form className="login__form">
        <h1>Login</h1>
        <label className="login__label" htmlFor={emailId}>
          Email
        </label>
        <input
          className="login__text-field"
          id={emailId}
          type="email"
          placeholder="Email"
        />
        <label className="login__label" htmlFor={passwordId}>
          Password
        </label>
        <input
          className="login__text-field"
          id={passwordId}
          type="email"
          placeholder="Password"
        />
        <Button className="login__button" color="primary">
          Log In
        </Button>
      </form>
    </div>
  );
};
