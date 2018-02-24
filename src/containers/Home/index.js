/*-------------------------------------------------------------------------------------------------------------------
* about:首页
* author:马兆铿
* date:2018-2-24
* -------------------------------------------------------------------------------------------------------------------*/
import React, {PureComponent, PropTypes} from "react";
import "../../style/containers/Home/index.less";
//菜单
import route from '../router';
import {Route,} from 'react-router-dom';
import Navigation from './index_nav';

//
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.route = route[0];  //首页的
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    console.log(route[0])
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    return (
      <div className="home">
        {/*导航栏*/}
        <Navigation route={this.route}/>
        {/*内容*/}
        <div className="home-contain">
          {this.route.children.map((item, index) => { //放置内容
            if (!item.children) {
              //一层
              return (
                <Route key={item.path} exact path={item.path} component={item.component}/>
              );
            } else {
              //两层
              return (
                item.children.map((subItem, subIndex) => {
                  return (
                    <Route key={subItem.path} exact path={subItem.path} component={subItem.component}/>
                  )
                })
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Home;
