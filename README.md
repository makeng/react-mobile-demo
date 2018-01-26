# GreenOffice 移动版
-	技术栈：react
-	说明：本项目是GreenOffice办公室系统的移动端

## 编译命令行
-	安装依赖：npm install
-	启动调试：npm run dev 
-	编译压缩：npm run publish

## 全局信息
sessionStorage.getItem('isLogin')  //是否登录（登录页，注册页，找回密码需要在路由绕过）
sessionStorage.getItem('characterName')  //系统角色名字

## 代码持续集成（发布）
地址： http://192.168.2.243:8080/ user:office pw:office
office-h5-react-test 是测试环境
office-h5-react-product 是线上环境

## 线上地址
测试服务器：http://192.168.2.189:8000
正式服务器：http://gomobile.orvibo.com

# 注意
* 每次要在全局添加样式或者脚本，要改动public/index.html时，需要运行一次npm run dll，重新编译那些被排除在热加载之外的js文件。

# 相关资料
    接口地址：http://192.168.2.189:8080/intelligenceOffice/swagger-ui.html#/
    ui设计稿：https://lanhuapp.com//web/#!/item/board?pid=0193bf38-4b25-4d53-9413-7dc6c5b9c51c




