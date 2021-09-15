import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import LayoutPage from '@pages/layout';

const HomePage = lazy(() => import('@pages/home'));
const NotFoundPage = lazy(() => import('@pages/404'));

const homeRoute = [
  {
    path: 'home',
    element: <HomePage />,
  },
];

const RenderRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <LayoutPage />,
      children: [
        ...homeRoute,
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

export default RenderRouter;
