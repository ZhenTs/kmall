/**
 * 应用入口容器
 * 2017/10/3
 * 作者:郭凯
 */
import React from 'react';
import {Alert, BackHandler} from 'react-native';
import {Actions, Router} from 'react-native-router-flux';
import Scenes from '../conf/Scenes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/Actions';

const RouterWithRedux = connect(
  function(state) {
    return {
      routes: Actions,
    };
  },
  function(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch),
    };
  },
)(Router);

export default class AppContainer extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <RouterWithRedux backAndroidHandler={this._onBack}>
        {Scenes()}
      </RouterWithRedux>
    );
  }

  _onBack = () => {
    let rootTabs = ['_home', '_food', '_tong', '_local', '_mine'];
    if (rootTabs.indexOf(Actions[Actions.currentScene].name) === -1) {
      Actions.pop();
      return true;
    }
    this._exit();
    return true;
  };

  // 退出程序
  _exit = () => {
    // 当前页面为root页面时的处理
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      //最近2秒内按过back键，可以退出应用。
      //alert 亲，你真的要离开我吗
      Alert.alert('提示', '亲，你真的要离开我吗?', [
        {
          text: '取消',
          onPress: () => {},
        },
        {
          text: '确定',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
    }
    this.lastBackPressed = Date.now();
  };
}
