import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import LayoutPage from '@pages/layout';

const HomePage = lazy(() => import('@pages/home'));
const MyPortfolioPage = lazy(() => import('@pages/myportfolio'));
const NotFoundPage = lazy(() => import('@pages/404'));

const homeRoute = [
  {
    path: 'home',
    element: <HomePage />,
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
        ...myPortfolioRoute,
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

export default RenderRouter;
