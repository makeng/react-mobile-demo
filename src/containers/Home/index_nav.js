/*-------------------------------------------------------------------------------------------------------------------
* about:主页导航栏
* author:马兆铿
* date:2018-2-24
* -------------------------------------------------------------------------------------------------------------------*/
import React, {PureComponent, PropTypes} from "react";
import "../../style/containers/Home/index.less";
//菜单
import {Menu, Icon} from 'antd';
import {Route, Link, Switch, NavLink} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

//
class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isNavShrink: false,
    };
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */
  handleClick = () => {
    this.setState({
      isNavShrink: !this.state.isNavShrink
    });
  };

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    return (
      <div className="home-nav">
        <Menu className="home-nav-list" defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode={this.state.isNavShrink ? 'vertical' : 'inline'} theme={'dark'}
        >
          {this.props.route.children.map((item, index) => {
            //一级
            if (!item.children) {
              return (
                <Menu.Item key={item.path}>
                  <Link to={item.path}>
                    <Icon type="desktop"/>
                    <span>{item.name}</span>
                  </Link>
                </Menu.Item>
              );
            }
            //二级
            else {
              return (
                <SubMenu key={item.path} title={<span><Icon type="mail"/><span>{item.name}</span></span>}>
                  {
                    item.children.map((subItem, subIndex) => {
                      return (
                        <Menu.Item key={subItem.path}>
                          <Link to={subItem.path}>{subItem.name}</Link>
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              );
            }
          })}
        </Menu>
      </div>
    );
  }
}

export default Navigation;
