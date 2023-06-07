import { PATH } from '../../services/constants/paths';

export const menu = [
  {
    id: 'for-you',
    title: 'For You',
    iconHref: '#home',
    upper: false,
    href: PATH.index,
  },
  {
    id: 'following',
    title: 'Following',
    iconHref: '#users',
    upper: false,
    href: '#',
  },
  {
    id: 'live',
    title: 'Live',
    iconHref: '#camera',
    upper: true,
    href: '#',
  },
];
