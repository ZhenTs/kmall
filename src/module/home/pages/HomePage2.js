import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BaseContainer from '../../../components/base/BaseComponent';

export default class HomePage2 extends BaseContainer {
  _render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>Hello 1111</Text>
        <Text>World</Text>
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => {
              this.props.actions.maskViewHandler(false);
            }, 2000);
            this.props.actions.maskViewHandler(true);
            this.props.actions.toast("你好",2000);
            this.props.actions.tipModal();
            this.props.actions.messageTip("你好",4000);
          }}>
          <Text>press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
