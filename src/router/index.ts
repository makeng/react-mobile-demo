import { createHashRouter } from 'react-router-dom'
import { Pages } from './types'
import Home from '@/pages/home'
import TestRedux from '../pages/test-redux'
import { createRoute } from '@/router/utils/tool'

/**
 * 路由列表
 * 分层可以让子路由，复用父路由的逻辑、组件、script 等
 */
export const routerList = [
  createRoute(Pages.HOME, Home),
  createRoute(Pages.TEST_REDUX, TestRedux),
]

/**
 * 全局路由。可以用于监听
 */
export const router = createHashRouter(routerList)
