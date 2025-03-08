import { createHashRouter } from 'react-router-dom'
import { Pages } from './types'
import { createRoute } from '@/router/utils/tool'
import Home from '@/pages/home'

import TestRedux from '../pages/test-redux'
import TestReduxZustand from '../pages/test-redux/zustand'
import TestZustandMasterData from '../pages/test-redux/zustand/master-data'
import TestReduxJotai from '../pages/test-redux/jotai'
import TestJotaiMasterData from '@/pages/test-redux/jotai/master-data'
import TestReduxProxy from '../pages/test-redux/proxy'
import TestProxyMasterData from '@/pages/test-redux/proxy/master-data'

/**
 * 路由列表
 * 分层可以让子路由，复用父路由的逻辑、组件、script 等
 */
export const routerList = [
  createRoute(Pages.HOME, Home),
  // Redux 系列例子
  createRoute(Pages.TEST_REDUX, TestRedux),
  createRoute(Pages.TEST_REDUX_ZUSTAND, TestReduxZustand),
  createRoute(Pages.TEST_REDUX_ZUSTAND_MD, TestZustandMasterData),
  createRoute(Pages.TEST_REDUX_JOTAI, TestReduxJotai),
  createRoute(Pages.TEST_REDUX_JOTAI_MD, TestJotaiMasterData),
  createRoute(Pages.TEST_REDUX_PROXY, TestReduxProxy),
  createRoute(Pages.TEST_REDUX_PROXY_MD, TestProxyMasterData),
]

/**
 * 全局路由。可以用于监听
 */
export const router = createHashRouter(routerList)
