# react-seed

### 描述
- **react-seed**是基于[create-react-app](https://github.com/facebook/create-react-app)的前端项目脚手架。
- 充分利用create-react-app的优势，没有eject的计划。
- 在create-react-app的基础上，引入有意义的工具链。工具的选择，根据必要性、通用性、稳定性、可维护性以及工具是否有前途、是否过时、是否有坑等因素综合考量，当有冲突时，根据“我开心就好”的原则进行取舍，力求精简、实用而优雅。
- 前端脚手架是一个没完没了的事，永远有可优化的空间，本项目看心情更新。
- 幸运的种子，会生根发芽。

### 项目构成和说明
- [create-react-app](https://github.com/facebook/create-react-app)
- [react-router](https://github.com/ReactTraining/react-router) v4  
其实并不喜欢react-router v4中动态路由的写法，这样会丧失路由信息集中于一个文件这一优势。在项目维护时，迅速定位页面和组件位置将会变得困难。但迫于这是react全家桶中重要的组成部分，忍了，希望出现能全方位代替这个库的新项目。  
另外值得注意的是"./src/browserHistory.js"文件，它提供全局唯一的history实例。在组件外可以通过如下方式切换路由:
```
import history from 'browserHistory';
history.push('/');
```
- [redux](https://github.com/reduxjs/redux) v4  
顺便添加了调试redux的chrome插件[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)。
- css预处理器sass  
根据create-react-app的推荐方式，利用[node-sass-chokidar](https://github.com/michaelwayman/node-sass-chokidar)实时编译.scss为.css。维护.scss文件，在组件中直接引用.css文件，但要避免编辑.css文件，已将.css文件加到.gitignore。  
个人认为这种方式并不优雅，不能通过配置webpack支持自己需要的预处理器，但create-react-app的设计初衷决定了它不可能提供这种配置，也不可能内置所有的css预处理器。  
另外，npm install时，node-sass-chokidar这个包会安装一些东西，略显不完美。
- 不怎么激进的Bootstrap3 UI组件库[react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)  
百搭，非必需，随便换。

### 其它
- 项目命令请参考package.json中的scripts。
- 提供了基本的代码结构，当然这只是一个约定。
- 提供了以/src为根目录的模块引用方式，避免了尴尬的"../../../../../../xxx"。

### 下一步
- 常回来看看。
- 可能调查一下这玩意儿：[react-app-rewired](https://github.com/timarney/react-app-rewired)。
- 可能调查一下这玩意儿：[redux-saga](https://github.com/redux-saga/redux-saga)。
- 可能找个对象啥的。
