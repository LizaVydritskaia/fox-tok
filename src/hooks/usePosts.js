import { useEffect, useState } from 'react';

import { getPosts } from '../services/posts';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((postsData) => setPosts(postsData));
  }, []);

  return posts;
};
