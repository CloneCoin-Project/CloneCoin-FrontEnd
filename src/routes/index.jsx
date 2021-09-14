import { lazy } from 'react';
import { useRoutes, Route, Navigate } from 'react-router-dom';

import LayoutPage from '@pages/layout';

const HomePage = lazy(() => import('@pages/home'));

const homeRoute = [
  {
    path: "home",
    element: <WrappedRouteComponent element={<HomePage />} auth />,
  },
];

const RenderRouter = () => useRoutes([{path: "/", element: }])
