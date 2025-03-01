import React, { useEffect, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

import { useUpdate } from 'ahooks';

interface Props {
  className?: string;
}

/**
 * 缓存路由组件
 */
const KeepAlive: React.FC<Props> = ({ className }) => {
  const componentList = useRef(new Map());
  const outLet = useOutlet();
  const { pathname } = useLocation();
  const forceUpdate = useUpdate();

  useEffect(() => {
    if (!componentList.current.has(pathname)) {
      componentList.current.set(pathname, outLet);
    }
    forceUpdate();
  }, [pathname]);

  return Array.from(componentList.current).map(([key, component], index) => (
    <div
      key={key + index}
      className={className}
      style={{ display: pathname === key ? 'block' : 'none' }}
    >
      {component}
    </div>
  ));
};

export default KeepAlive;
