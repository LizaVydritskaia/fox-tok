import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authStatuses } from '../../services/constants/authStatuses';
import { PATH } from '../../services/constants/paths';
import { changeAuthStatus } from '../../store/actions';

import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';

import './LoginPage.css';

export const LoginPage = () => {
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      dispatch(changeAuthStatus(authStatuses.loggedIn));
      navigate(PATH.index);
    }
  };

  return (
    <div className="login">
      <Icon className="login__logo" hrefIconName="#logo" />
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label className="login__label" htmlFor={emailId}>
          Email
        </label>
        <input
          className="login__text-field"
          name="email"
          id={emailId}
          type="email"
          autoComplete="off"
          placeholder="Email"
        />
        <label className="login__label" htmlFor={passwordId}>
          Password
        </label>
        <input
          className="login__text-field"
          name="password"
          id={passwordId}
          type="password"
          placeholder="Password"
        />
        <Button className="login__button" color="primary" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};
