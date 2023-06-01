import React, { forwardRef, useId } from 'react';

import './LogInModal.css';
import { Modal } from '../Modal';
import { Button } from '../Button';

export const LogInModal = forwardRef(function LogInModal(_, ref) {
  const emailId = useId();
  const passwordId = useId();

  return (
    <Modal ref={ref} title="Log In">
      <form className="log-in">
        <label className="log-in__label" htmlFor={emailId}>
          Email
        </label>
        <input
          className="log-in__text-field"
          id={emailId}
          type="email"
          placeholder="Email"
        />
        <label className="log-in__label" htmlFor={passwordId}>
          Password
        </label>
        <input
          className="log-in__text-field"
          id={passwordId}
          type="password"
          placeholder="Password"
        />
        <Button className="log-in__button" color="primary">
          Log In
        </Button>
      </form>
    </Modal>
  );
});
