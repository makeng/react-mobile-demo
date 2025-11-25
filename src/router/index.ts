import { createHashRouter } from 'react-router-dom'
import { Pages } from './types'
import { createRoute } from '@/router/utils/tool'
import React from 'react'

/**
 * 路由列表
 * @desc 分成多组（用前缀区分）可以让子路由，复用父路由的逻辑、组件、script 等
 * @notice 无法对 item 们进行封装复用，因为 lazy 只支持静态解析，抽取后无法识别导致加载失败
 */
export const routerList = [
  createRoute(Pages.HOME, React.lazy(() => import('@/pages/home'))),
  // Redux 测试系列
  createRoute(Pages.DEMO_REDUX, React.lazy(() => import('../pages/demo-redux'))),
  createRoute(Pages.DEMO_REDUX_ZUSTAND, React.lazy(() => import('../pages/demo-redux/zustand'))),
  createRoute(Pages.DEMO_REDUX_ZUSTAND_MD, React.lazy(() => import('../pages/demo-redux/zustand/master-data'))),
  createRoute(Pages.DEMO_REDUX_JOTAI, React.lazy(() => import('../pages/demo-redux/jotai'))),
  createRoute(Pages.DEMO_REDUX_JOTAI_MD, React.lazy(() => import('@/pages/demo-redux/jotai/master-data'))),
  createRoute(Pages.DEMO_REDUX_PROXY, React.lazy(() => import('../pages/demo-redux/proxy'))),
  createRoute(Pages.DEMO_REDUX_PROXY_MD, React.lazy(() => import('@/pages/demo-redux/proxy/master-data'))),
  // 权限测试
  createRoute(Pages.DEMO_AUTH, React.lazy(() => import('@/pages/demo-auth'))),
  // 函数式更新
  createRoute(Pages.DEMO_FUNCTIONAL_UPDATE, React.lazy(() => import('@/pages/demo-functional-update'))),
  // 加载更多
  createRoute(Pages.DEMO_LOAD_MORE, React.lazy(() => import('@/pages/demo-promise-sequence'))),
]

/**
 * 全局路由。可以用于监听
 */
export const router = createHashRouter(routerList)
