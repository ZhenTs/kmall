/**
 * 本地缓存帮助对象
 */
import React from 'react';
import {AsyncStorage} from 'react-native';

var StorageUtil = {
  //用户数据
  UserInfo: 'cache_UserInfo',
  //请求票据
  OAuthToken: 'cache_oauth_token',
  //购物车code
  ShoppingCar: 'cache_carcode',
  //最近访问的城市
  VisitCity: 'cache_visit_city',
  //是否第一次启动
  FirstLaunch: 'cache_first_launch',

  //用户选定位置
  CustomLocation: 'cache_custom_location',
  //用户选定详细位置
  CustomAddressLocation: 'cache_custom_address_location',

  getStorageItem: function(key, callback) {
    try {
      AsyncStorage.getItem(key, callback);
    } catch (error) {
      console.log('读取storage错误:' + error.message);
    }
  },
  setStorageItem: function(key, value, callback) {
    try {
      AsyncStorage.setItem(key, value, callback);
    } catch (error) {
      console.log('存储storage错误:' + error.message);
    }
  },
  removeStorageItem: function(key, callback) {
    AsyncStorage.removeItem(key, callback);
  },
};

module.exports = StorageUtil;
