/*-------------------------------------------------------------------------------------------------------------------
* about:页面的路由
* author:马兆铿
* date:2018-1-30
* -------------------------------------------------------------------------------------------------------------------*/
import asyncRoute from '../utils/asyncRoute';
/*-------------------------------------------- 路由对象 --------------------------------------------*/
//route
const route = [
  /*--- 首页 ---*/
  {
    name: '首页',
    path: '/',
    component: asyncRoute(() => import('./Home')),
    children: [
      {
        name: '菜单1',
        path: '/menu1',
        children: [
          {
            name: '子菜单1',
            path: '/menu1/sub1',
            component: asyncRoute(() => import('./Home/Menu1')),
          },
          {
            name: '子菜单2',
            path: '/menu1/sub2',
            component: asyncRoute(() => import('./Home/Menu2')),
          }
        ]
      },
      {
        name: '菜单2',
        path: '/menu2',
        component: asyncRoute(() => import('./Home/Menu1')),
      },
    ],
  },
  /*--- 单独页面 ---*/
  {
    name: '登录',
    path: '/login',
    component:  asyncRoute(() => import('./Login')),
  },
];

/*-------------------------------------------- 热加载设置 --------------------------------------------*/
// 为了消除 react-hot-loader code split 没有更新的BUG，作用是热加载。
if (process.env.NODE_ENV !== 'production') {
  // ... 有多少页面大小组件的异步模块就 require 多少，不可以使用变量或者对象来require，需要一句句复制
  require('./Home');
  require('./Home/Menu1');
  require('./Home/Menu2');
  require('./Login');
}

export default route;
