/* -----------------------------------------
about：此文件是登录页面
author：苏昱霖
date：2017年12月18日
-----------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React, {PureComponent, PropTypes} from "react";
import {OfficeButton} from "../../components";
import "../../style/containers/Login.less";
import {crypto} from "../../utils/crypto";

//
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    return (
      <div className="login">

      </div>
    );
  }
}

export default Login;
