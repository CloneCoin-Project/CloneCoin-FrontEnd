import { Route } from 'react-router-dom';

const WrappedRouteComponent = ({ auth, ...props }) => {
  const RouteComponent = auth ? Route : Route; //추후 로그인 인증시 auth일경우 Private Route 분기 처리 필요
  return <RouteComponent {...props} />;
};

export default WrappedRouteComponent;
