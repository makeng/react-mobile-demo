import { createHashRouter } from 'react-router-dom'
import { Pages } from './types'
import Home from '@/pages/home'
import TestRedux from '../pages/test-redux'
import TestReduxZustand from '../pages/test-redux/zustand'
import TestReduxMasterData from '../pages/test-redux/master-data'
import { createRoute } from '@/router/utils/tool'

/**
 * 路由列表
 * 分层可以让子路由，复用父路由的逻辑、组件、script 等
 */
export const routerList = [
  createRoute(Pages.HOME, Home),
  createRoute(Pages.TEST_REDUX, TestRedux),
  createRoute(Pages.TEST_REDUX_ZUSTAND, TestReduxZustand),
  createRoute(Pages.TEST_REDUX_MASTER_DATA, TestReduxMasterData),
]

/**
 * 全局路由。可以用于监听
 */
export const router = createHashRouter(routerList)
