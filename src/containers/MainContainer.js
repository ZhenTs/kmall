/**
 * 全局顶层组件/页面(redux)
 * 2018/1/5
 * 作者:郭凯
 */
import React from 'react';
import {View} from 'react-native';
import ToastView from '../components/custom/ToastView';
import TipModal from '../components/custom/TipModal';
import MaskView from '../components/custom/MaskView';
import MessageTip from '../components/custom/MessageTip';

export default class MainContainer extends React.Component {
  render() {
    return (
      <View>
        {/*吐司提示*/}
        <ToastView />
        {/*敬请期待*/}
        <TipModal />
        {/*全局遮罩Loading*/}
        <MaskView />
        {/*消息提醒*/}
        <MessageTip />
      </View>
    );
  }
}
