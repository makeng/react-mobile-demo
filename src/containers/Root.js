/*-------------------------------------------------------------------------------------------------------------------
* about:页面的根组件，需要把路由的内容放置到此处，来进行调试的热加载和路由加载。
* author:苏昱霖
* date:2017-12-18
* -------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import asyncRoute from "../utils/asyncRoute";
//样式
import "../style/reset.less";
/*-------------------------------------------- 路由对象 --------------------------------------------*/
//组件
const Login = asyncRoute(() => import("./Login"));
const HomePage = asyncRoute(() => import("./HomePage"));
//route
let route = [
  {
    name: "首页",
    path: "/",
    component: HomePage
  },
  {
    name: "登录",
    path: "/login",
    component: Login
  }
];

/*-------------------------------------------- 热加载设置 --------------------------------------------*/
// 为了消除 react-hot-loader code split 没有更新的BUG，作用是热加载。
if (process.env.NODE_ENV !== "production") {
  // ... 有多少异步模块就 require 多少，不可以使用变量或者对象来require
  require("./Login");
  require("./HomePage")
}

/*-------------------------------------------- 页面的根组件 --------------------------------------------*/
//页面的根组件
const Root = () => (
  <div>
    <Router key={Math.random()}>
      <div>
        {route.map((item, index) => {
          //路由加载
          return (
            <Route
              key={index}
              exact
              path={item.path}
              component={item.component}
            />
          );
        })}
      </div>
    </Router>
  </div>
);
export default Root;
