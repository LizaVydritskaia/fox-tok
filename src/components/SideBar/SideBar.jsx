import React from 'react';

import { Button } from '../Button';
import { Footer } from '../Footer/Footer';
import { Icon } from '../Icon';

import './SideBar.css';

import { menu } from './config';

export const SideBar = () => (
  <aside className="side-bar">
    <div>
      <nav className="menu">
        {menu.map(({ id, href, title, iconHref, color, upper }) => (
          <Button
            key={id}
            href={href}
            className="menu__btn"
            variant="text"
            color={color}
            upper={upper}
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
      <Button className="side-bar__btn" variant="outlined" color="primary">
        Log in
      </Button>
      <hr />
    </div>
    <Footer />
  </aside>
);
