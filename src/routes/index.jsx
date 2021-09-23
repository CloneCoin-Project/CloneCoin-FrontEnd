import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import LayoutPage from '@pages/layout';

const HomePage = lazy(() => import('@pages/home'));
const LeaderPortfolioPage = lazy(() => import('@pages/leaderportfolio'));
const MyPortfolioPage = lazy(() => import('@pages/myportfolio'));
const NotFoundPage = lazy(() => import('@pages/404'));

const homeRoute = [
  {
    path: 'home',
    element: <HomePage />,
  },
];

const leaderPortfolioRoute = [
  {
	path: 'leader',
	element: <LeaderPortfolioPage />,
  },
];

const myPortfolioRoute = [
  {
    path: 'my',
    element: <MyPortfolioPage />,
  },
];

const RenderRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <LayoutPage />,
      children: [
        ...homeRoute,
		...leaderPortfolioRoute,
        ...myPortfolioRoute,
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

export default RenderRouter;
