import React from 'react';

import { Icon } from '../Icon';

import './FormSearch.css';

export const FormSearch = () => (
  <form className="search">
    <input
      className="search__input"
      type="text"
      placeholder="Search accounts and videos"
    />
    <span className="search__border"></span>
    <span className="search__splitter"></span>
    <button className="search__submit" type="submit">
      <Icon className="search__icon" hrefIconName="#search" />
    </button>
  </form>
);
