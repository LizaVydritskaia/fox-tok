import React, { Fragment } from 'react';

import { fetchData, wrapPromise } from '../../helpers/wrapPromise';
import { postsURL } from '../../services/constants/apiUrls';
import { usePosts } from '../../hooks/usePosts';

import { PostContextProvider } from '../../contexts/Post.context';

import { Post } from '../../components/Post';

export const Posts = () => {
  const posts = wrapPromise(fetchData(postsURL));
  usePosts();

  return (
    <PostContextProvider>
      {posts.map((data, index) => (
        <Fragment key={data.id}>
          <Post {...data} />
          {posts.length - 1 > index ? <hr /> : null}
        </Fragment>
      ))}
    </PostContextProvider>
  );
};
