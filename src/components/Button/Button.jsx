import React from 'react';
import classNames from 'classnames';

import './Button.css';

export const Button = ({
  variant,
  color,
  upper,
  className,
  href,
  type = 'button',
  children,
  ...props
}) => {
  const variants = {
    outlined: variant === 'outlined',
    text: variant === 'text',
    icon: variant === 'icon',
  };

  const colors = {
    primary: color === 'primary',
  };

  if (href) {
    return (
      <a
        className={classNames('btn', className, {
          upper,
          ...variants,
          ...colors,
        })}
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames('btn', className, {
        upper,
        ...variants,
        ...colors,
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
