import React, { Fragment } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { PostContextProvider } from '../../contexts/Post.context';

import { Post } from '../../components/Post';

export const Posts = () => {
  const { posts: postsPromise } = useLoaderData();

  return (
    <Await resolve={postsPromise}>
      {(posts) => (
        <PostContextProvider>
          {posts.map((data, index) => (
            <Fragment key={data.id}>
              <Post {...data} />
              {posts.length - 1 > index ? <hr /> : null}
            </Fragment>
          ))}
        </PostContextProvider>
      )}
    </Await>
  );
};
