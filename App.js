/**
 * APP入口
 */

import React, {Component} from 'react';
// 引入APP根容器
import AppContainer from './src/containers/AppContainer';
// 引入全局变量设置
import './src/common/GlobalVariable';
// 引入全局异常处理
import './src/common/GlobalException';
// 引入RN去白屏组件
import SplashScreen from 'react-native-splash-screen';
// 引入Redux
import {Provider} from 'react-redux';
import configureStore from './src/redux/ConfigureStore';
// 运行环境去掉日志
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}
// 禁用警告显示
if (__DEV__) {
  global.console.disableYellowBox = true;
}

export default class AppRoot extends Component {
  netState = false;

  componentDidMount() {
    // 关闭启动图
    SplashScreen.hide();
  }

  render() {
    const store = configureStore({});
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
