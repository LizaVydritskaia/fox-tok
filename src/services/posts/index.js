import axios from 'axios';

import { postsURL } from '../constants/apiUrls';

const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });

export const getPosts = async () => {
  await delay();

  const { data: posts } = await axios.get(postsURL);

  return posts;
};
