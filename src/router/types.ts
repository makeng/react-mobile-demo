import { RouteObject } from 'react-router-dom'


// 所有页面。用于跳转
export enum Pages {
  HOME = '/',
  TEST_REDUX = '/test-redux',
  TEST_REDUX_ZUSTAND = '/test-redux/zustand',
  TEST_REDUX_MASTER_DATA = '/test-redux/master-data'
}

export type Route = RouteObject & {
  path: Pages | string;
  children?: Route[];
};
