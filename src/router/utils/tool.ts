import { RouteObject } from 'react-router-dom'
import { Route } from '@/router/types'
import React from 'react'


/**
 * 生成路由项
 */
export const createRoute = (
  path: Route['path'],
  comp: React.ComponentType,
  children?: Route[],
  others?: Obj,
): Route => {
  const Component = comp
  return { path, Component, children, ...others }
}

/**
 * @description: 路由参数设置到 url 上，得到新的 url
 * @param url 跳转地址
 * @param params 路由参数（非必填，所有单据都是一个路由，只有参数不一样，这个时候需要增加这个参数）
 * @return 组合出来的带参数地址
 */
export function setRouterParams(url: string, params?: Record<PropertyKey, any>) {
  const searchParams = new URLSearchParams(params)
  return `${url}?${searchParams.toString()}`
}

/**
 * 递归查找目标路由
 * @param routerList
 * @param pathname
 */
export function findTargetRoute(routerList: RouteObject[], pathname: string) {
  let res: RouteObject = {}
  routerList.forEach((item) => {
    const { path, children } = item
    if (path === pathname) {
      res = item
    } else if (children?.length) {
      res = findTargetRoute(children, pathname)
    }
  })
  return res
}
