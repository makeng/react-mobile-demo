/*-------------------------------------------------------------------------------------------------------------------
* about:热加载需要用到的同步函数。属于系统的，不要修改。
* author:马兆铿
* date:2017-12-18
* -------------------------------------------------------------------------------------------------------------------*/

import React from "react";

/*  系统异步热加载
* @param getComponent页面组件文件
* */
export default function asyncRoute(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    mounted = false;
    state = {
      Component: AsyncComponent.Component,
      auth: false
    };

    componentWillMount() {
      if (this.state.Component === null) {
        getComponent().then(m => m.default).then(Component => { //加载组件之前，登录检查
          AsyncComponent.Component = Component;
          if (false) {

          } else {
            if (this.mounted) {
              this.setState({
                Component
              });
            }
          }
        });
      }
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const {Component} = this.state;
      if (Component !== null) {
        return <Component {...this.props} />;
      }
      return null; // or <div /> with a loading spinner, etc..
    }
  };
}
