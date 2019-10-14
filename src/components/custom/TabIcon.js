/**
 * Tab选卡图标
 * 2017/10/3
 * 作者:郭凯
 */
import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default class TabIcon extends Component {
  render() {
    return (
      <View style={tabIconStyles.tabIconItem}>
        <Image
          style={tabIconStyles.tabIconImage}
          source={
            this.props.focused ? this.props.selectImage : this.props.Image
          }
        />
      </View>
    );
  }
}

const tabIconStyles = StyleSheet.create({
  tabIconItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  tabIconImage: {
    width: 22,
    height: 22,
  },
});
