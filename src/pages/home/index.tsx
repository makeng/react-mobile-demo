import React from 'react'
import { useNavigate } from 'react-router-dom'

import { routerList } from '@/router'
import { Route } from '@/router/types'
import { Page } from '@/components'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const { search } = window.location

  const OL_CLS = 'list-decimal ml-16 cursor-pointer'

  /**
   * 递归渲染路由
   * @param route
   * @param index
   */
  function renderLi(route: Route, index: number) {
    const { title, path, children } = route
    const url = path + search
    return (
      <li key={url + index} className="decoration-0 text-blue-700 mt-4">
        <h2 onClick={() => navigate(url)}>
          {title}: {url}
        </h2>
        {children && (
          <ol className={OL_CLS} key={url}>
            {children.map(renderLi)}
          </ol>
        )}
      </li>
    )
  }
  return (
    <Page title="首页">
      <h1 className="font-bold text-2xl">All pages</h1>
      <ol className={OL_CLS}>{routerList.map(renderLi)}</ol>
    </Page>
  )
}

export default Index
