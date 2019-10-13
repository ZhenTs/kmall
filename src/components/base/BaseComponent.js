/**
 * 页面基础组件
 * 2017/11/28
 * 作者:郭凯
 */
import React, {Component} from 'react';
import {DeviceEventEmitter, Text, TouchableOpacity, View} from 'react-native';
import NavigatorBar from '../custom/NavigatorBar';

interface NavigatorProps {
  title: string;
}

export default class BaseComponent extends Component {
  state = {
    isError: false,
    erroMsg: '网络异常',
    tabIndex: 0,
  };
  navigatorProps: NavigatorProps = {
    title: '张三',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._onLoadData();
    this.errorListener = DeviceEventEmitter.addListener(
      'errorPage',
      this._onErrorPage,
    );
    this.pageListener = DeviceEventEmitter.addListener(
      'pageRefresh',
      this._onPageRefresh,
    );
  }

  componentWillUnmount() {
    this.errorListener && this.errorListener.remove();
    this.pageListener && this.pageListener.remove();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.navigatorProps.title &&
          this._renderNavigator(this.navigatorProps)}
        {this.state.isError && this._renderErrorPage()}
        {!this.state.isError && this._render()}
      </View>
    );
  }

  // 渲染导航条
  _renderNavigator = props => {
    return <NavigatorBar {...props} />;
  };

  // 渲染全局访问异常缺省页
  _renderErrorPage = () => {
    if (!this.state.isError) {
      return null;
    }
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={this._onErrorPageRefresh}>
          <View>
            <Text>{this.state.erroMsg}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  // 子页面初始化
  _onLoadData = () => {};

  // 异常页面重新加载操作
  _onErrorPageRefresh = err => {
    this.setState({isError: false});
    this._onLoadData();
  };

  // 设置缺省页面状态
  _onErrorPage = flag => {
    if (this.token != flag.token) {
      return null;
    }
    this.setState({
      isError: flag.isError,
      erroMsg: flag.message,
    });
  };

  // 监听页面刷新
  _onPageRefresh = flag => {
    if (!this.state.isError) {
      return null;
    }
    if (flag) {
      this._onErrorPageRefresh();
    }
  };
}
