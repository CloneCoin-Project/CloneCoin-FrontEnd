import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import LayoutPage from '@pages/layout';

const HomePage = lazy(() => import('@pages/home'));
const LeaderListPage = lazy(() => import('@pages/leaderlist'));
const LeaderPortfolioPage = lazy(() => import('@pages/leaderportfolio'));
const MyPortfolioPage = lazy(() => import('@pages/myportfolio'));
const NotFoundPage = lazy(() => import('@pages/404'));

const homeRoute = [
  {
    path: 'home',
    element: <HomePage />,
  },
];

const leaderListRoute = [
  {
    path: 'leaderlist',
    element: <LeaderListPage />,
  },
];

const leaderPortfolioRoute = [
  {
    path: 'leader/:leaderId',
    element: <LeaderPortfolioPage />,
  },
];

const myPortfolioRoute = [
  {
    path: 'myportfolio',
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
        ...leaderListRoute,
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
