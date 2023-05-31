import React from 'react';
import { useParams } from 'react-router-dom';

import { STATIC_PAGE_CONTENT } from '../../services/constants/staticPageContent';

export const StaticPage = () => {
  const { staticPage } = useParams();
  const content = STATIC_PAGE_CONTENT[staticPage];

  return (
    <>
      <h1>{content.title}</h1>
      {content.text.split('\n').map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
};
