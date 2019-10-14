import React from 'react';
import {View, Text} from 'react-native';
import BaseContainer from '../../../components/base/BaseComponent';

export default class HomePage extends BaseContainer {
  componentDidMount() {
    super.componentDidMount();
  }

  _render() {
    return (
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text>Hello 11 1 11</Text>
        <Text>World</Text>
      </View>
    );
  }
}
