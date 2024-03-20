import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Discussion Fourm',
    path: '/',
    icon: <Icon icon="lucide:discussion" width="24" height="24" />,
  },
  {
    title: 'Market Stories',
    path: '/projects',
    icon: <Icon icon="lucide:" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Sentiment', path: '/' },
      { title: 'Market', path: '/' },
      { title: 'Sector', path: '/' },
      { title: 'Watchlist', path: '/' },
      { title: 'Events', path: '/' },
      { title: 'News/interview', path: '/' },
      
    ],
  },
  
];
