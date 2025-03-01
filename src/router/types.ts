import { RouteObject } from 'react-router-dom'


// 所有页面。用于跳转
export enum Pages {
  HOME = '/',
  TEST_REDUX = '/test-redux',
  TEST_REDUX_ZUSTAND = '/test-redux/zustand'
}

export type Route = RouteObject & {
  title: string;
  path: Pages | string;
  children?: Route[];
};
