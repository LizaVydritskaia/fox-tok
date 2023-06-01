import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { Container } from '../Container';
import { FormSearch } from '../FormSearch';
import { Icon } from '../Icon';
import { LogInModal } from '../LogInModal';

import { PATH } from '../../services/constants/paths';

import './Header.css';

export const Header = () => {
  const logInRef = useRef(null);

  return (
    <>
      <header className="header">
        <Container className="header__container">
          <Link to={PATH.index}>
            <Icon className="logo" hrefIconName="#logo" />
          </Link>
          <FormSearch />
          <div className="header__buttons">
            <Button href="#" variant="outlined">
              <Icon hrefIconName="#plus" />
              Upload
            </Button>
            <Button color="primary" onClick={() => logInRef.current.open()}>
              Log in
            </Button>
          </div>
        </Container>
      </header>
      <LogInModal ref={logInRef} />
    </>
  );
};
