import { RouteObject } from 'react-router-dom'


// 所有页面。用于跳转
export enum Pages {
  HOME = '/',
  DEMO_REDUX = '/demo-redux',
  DEMO_REDUX_ZUSTAND = '/demo-redux/zustand',
  DEMO_REDUX_ZUSTAND_MD = '/demo-redux/zustand/master-data',
  DEMO_REDUX_JOTAI = '/demo-redux/jotai',
  DEMO_REDUX_JOTAI_MD = '/demo-redux/jotai/master-data',
  DEMO_REDUX_PROXY = '/demo-redux/proxy',
  DEMO_REDUX_PROXY_MD = '/demo-redux/proxy/master-data',
  DEMO_AUTH = '/demo-auth',
  DEMO_FUNCTIONAL_UPDATE = '/demo-functional-update',
  DEMO_LOAD_MORE = '/demo-promise-sequence',
}

export type Route = RouteObject & {
  path: Pages | string;
  children?: Route[];
};
