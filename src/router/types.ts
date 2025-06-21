import { RouteObject } from 'react-router-dom'


// 所有页面。用于跳转
export enum Pages {
  HOME = '/',
  TEST_REDUX = '/test-redux',
  TEST_REDUX_ZUSTAND = '/test-redux/zustand',
  TEST_REDUX_ZUSTAND_MD = '/test-redux/zustand/master-data',
  TEST_REDUX_JOTAI = '/test-redux/jotai',
  TEST_REDUX_JOTAI_MD = '/test-redux/jotai/master-data',
  TEST_REDUX_PROXY = '/test-redux/proxy',
  TEST_REDUX_PROXY_MD = '/test-redux/proxy/master-data',
  TEST_AUTH = '/test-auth',
  TEST_FUNCTIONAL_UPDATE = '/test-functional-update',
}

export type Route = RouteObject & {
  path: Pages | string;
  children?: Route[];
};
