import React, { PropsWithChildren, useEffect, useState } from 'react'

import { createBEM } from '@/utils/ui/bem'
import classnames from 'classnames'
import { Helmet } from 'react-helmet'

interface Props {
  title: string;
  className?: string;
}

const bem = createBEM('page')
const DEFAULT_CLS = 'flex flex-col h-screen' // 代替 scss 文件

/**
 *  页面通用样式
 *  默认都是 flex 布局，从上往下排列
 */
const Index: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, className } = props
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    const { title } = props
    setPageTitle(title)
  }, [props.title])

  return <>
    {/* react-helmet 可以方便地修改 document.title */}
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
    <div className={classnames(bem(), DEFAULT_CLS, className)}>
      {children}
    </div>
  </>
}

export default Index
