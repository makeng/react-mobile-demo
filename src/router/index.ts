import { createHashRouter } from 'react-router-dom'
import { Pages } from './types'
import { createRoute } from '@/router/utils/tool'
import React from 'react'

/**
 * 路由列表
 * 分层可以让子路由，复用父路由的逻辑、组件、script 等
 */
export const routerList = [
  createRoute(Pages.HOME, React.lazy(() => import('@/pages/home'))),
  // Redux 测试系列
  createRoute(Pages.TEST_REDUX, React.lazy(() => import('../pages/test-redux'))),
  createRoute(Pages.TEST_REDUX_ZUSTAND, React.lazy(() => import('../pages/test-redux/zustand'))),
  createRoute(Pages.TEST_REDUX_ZUSTAND_MD, React.lazy(() => import('../pages/test-redux/zustand/master-data'))),
  createRoute(Pages.TEST_REDUX_JOTAI, React.lazy(() => import('../pages/test-redux/jotai'))),
  createRoute(Pages.TEST_REDUX_JOTAI_MD, React.lazy(() => import('@/pages/test-redux/jotai/master-data'))),
  createRoute(Pages.TEST_REDUX_PROXY, React.lazy(() => import('../pages/test-redux/proxy'))),
  createRoute(Pages.TEST_REDUX_PROXY_MD, React.lazy(() => import('@/pages/test-redux/proxy/master-data'))),
  // 权限测试
  createRoute(Pages.TEST_AUTH, React.lazy(() => import('@/pages/test-auth'))),
  // 函数式更新
  createRoute(Pages.TEST_FUNCTIONAL_UPDATE, React.lazy(() => import('@/pages/test-functional-update'))),
]

/**
 * 全局路由。可以用于监听
 */
export const router = createHashRouter(routerList)
