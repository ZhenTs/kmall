import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BaseContainer from '../../../containers/BaseContainer';

export default class HomePage extends BaseContainer {
  navigatorProps = {
    title: '张三',
  };

  componentDidMount() {
    super.componentDidMount();
  }

  _renderContainer() {
    return (
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text>Hello 11 1 11</Text>
        <Text>World</Text>
      </View>
    );
  }
}
