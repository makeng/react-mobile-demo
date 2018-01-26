/*-------------------------------------------------------------------------------------------------------------------
* about:常用按键。传入的属性有text，
* author:马兆铿
* date:2017-12-19
* -------------------------------------------------------------------------------------------------------------------*/

import React, {PureComponent, PropTypes} from "react";
//style
import './style.less';

class OfficeButton extends PureComponent {
  /*-------------------------------------------- 渲染 --------------------------------------------*/
  render() {
    return (
      <button className="office-button" onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
  /*-------------------------------------------- 绑定函数 --------------------------------------------*/
}

export default OfficeButton;