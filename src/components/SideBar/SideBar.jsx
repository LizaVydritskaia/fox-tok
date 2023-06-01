import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Footer } from '../Footer/Footer';
import { Icon } from '../Icon';

import './SideBar.css';

import { menu } from './config';
import { LogInModal } from '../LogInModal';

export const SideBar = () => {
  const logInRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <aside className="side-bar">
        <div>
          <nav className="menu">
            {menu.map(({ id, href, title, iconHref, upper }) => (
              <Button
                key={id}
                className="menu__btn"
                variant="text"
                color={location.pathname === href ? 'primary' : ''}
                upper={upper}
                onClick={() => navigate(href)}
              >
                <Icon className="menu__icon" hrefIconName={iconHref} />
                {title}
              </Button>
            ))}
          </nav>
          <hr />
          <p className="side-bar__text">
            Log in to follow creators, like videos and view comments
          </p>
          <Button
            className="side-bar__btn"
            variant="outlined"
            color="primary"
            onClick={() => logInRef.current.open()}
          >
            Log in
          </Button>
          <hr />
        </div>
        <Footer />
      </aside>
      <LogInModal ref={logInRef} />
    </>
  );
};
