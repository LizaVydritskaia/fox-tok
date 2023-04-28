import React from 'react';

import { Button } from '../Button';
import { Container } from '../Container';
import { FormSearch } from '../FormSearch';
import { Icon } from '../Icon';

import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <Icon className="logo" hrefIconName="#logo" />
        <FormSearch />
        <div className="header__buttons">
          <Button href="#" variant="outlined">
            <Icon hrefIconName="#plus" />
            Upload
          </Button>
          <Button color="primary">Log in</Button>
        </div>
      </Container>
    </header>
  );
};
