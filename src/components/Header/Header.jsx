import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Container } from '../Container';
import { FormSearch } from '../FormSearch';
import { Icon } from '../Icon';

import { PATH } from '../../services/constants/paths';

import './Header.css';

export const Header = () => {
  const navigate = useNavigate();

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
            <Button color="primary" onClick={() => navigate(PATH.login)}>
              Log in
            </Button>
          </div>
        </Container>
      </header>
    </>
  );
};
