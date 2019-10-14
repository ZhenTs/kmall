/**
 * 全局变量设置
 * 2017/10/8
 * 作者:郭凯
 */
import StorageUtil from '../utils/base/StorageUtil';
import HttpUtil from '../utils/base/HttpUtil';
import HelpUtil from '../utils/base/HelpUtil';
import {AsyncStorage} from 'react-native';
// 用户信息
global.userInfo = null;
// 从缓存中获取用户信息
StorageUtil.getStorageItem(StorageUtil.UserInfo, (error, result) => {
  result = JSON.parse(result);
  console.log(result);
  if (result) {
    global.userInfo = result;
  }
});
// 用户登录信息
global.loginInfo = null;
// 从缓存中获取登录信息
StorageUtil.getStorageItem(StorageUtil.OAuthToken, (error, result) => {
  console.log('OAuthToken', result, error);
  result = JSON.parse(result);
  if (result) {
    global.loginInfo = result;
  }
});
// 获取购物码
global.ShoppingCartCode = null;
StorageUtil.getStorageItem(StorageUtil.ShoppingCar, (error, result) => {
  if (result) {
    global.ShoppingCartCode = result;
  } else {
    global.ShoppingCartCode = HelpUtil.GUID();
    StorageUtil.setStorageItem(StorageUtil.ShoppingCar, ShoppingCartCode);
  }
});
// 全局帮助对象
global.Utils = {
  sendError: error => {
    error.type = error.isPageInterface ? 'errorPage' : 'errorPageArea';
    ErrorUtils.reportError(error);
  },
  sendPostJSON: postProps => {
    postProps.userToken = loginInfo && loginInfo.access_token;
    postProps.errorFun = postProps.error ? postProps.error : Utils.sendError;
    postProps.auth = postProps.auth || true;
    HttpUtil.sendPostJSON(postProps).then(responseObj => {
      console.log(JSON.parse(responseObj.message));
      responseObj.isPageInterface = postProps.isPageInterface || false;
      responseObj.token = postProps.token;
      if (postProps.auth) {
        if (!responseObj) {
          !postProps.existData &&
            postProps.errorFun &&
            postProps.errorFun(responseObj);
        } else if (responseObj.code && responseObj.code == 200) {
          if (postProps.storage) {
            console.log('写入缓存----->');
            AsyncStorage.setItem(
              postProps.url + postProps.body,
              JSON.stringify(responseObj),
            );
          }
          postProps.success(responseObj);
        } else if (responseObj.code == 401) {
          Utils.getRefreshUserInfo(() => {
            Utils.sendPostJSON(postProps);
          }, postProps.actions);
        } else {
          !postProps.existData &&
            postProps.errorFun &&
            postProps.errorFun(responseObj);
        }
      } else {
        if (postProps.storage) {
          console.log('写入缓存----->');
          console.log(responseObj);
          AsyncStorage.setItem(
            postProps.url + postProps.body,
            JSON.stringify(responseObj),
          );
        }
        postProps.success(responseObj || {message: '', code: 500});
      }
    });
  },
  sendGetJSONWithCache: getProps => {
    AsyncStorage.getItem(getProps.url, (error, result) => {
      let existData = false;
      if (result) {
        existData = true;
        console.log('从缓存读取----->');
        console.log(result);
        try {
          getProps.success(JSON.parse(result));
        } catch (error) {
          //TODO:删除缓存
          console.log(error);
        }
      } else {
        existData = false;
        console.log('缓存无数据----->');
      }
      global.Utils.sendGetJSON({
        ...getProps,
        storage: true,
        existData: existData,
      });
    });
  },
  sendPostJSONWithCache: postProps => {
    AsyncStorage.getItem(postProps.url + postProps.body, (error, result) => {
      let existData = false;
      if (result) {
        existData = true;
        console.log('从缓存读取----->');
        console.log(result);
        try {
          postProps.success(JSON.parse(result));
        } catch (error) {
          //TODO:删除缓存
          console.log(error);
        }
      } else {
        existData = false;
        console.log('缓存无数据----->');
      }
      global.Utils.sendPostJSON({
        ...postProps,
        storage: true,
        existData: existData,
      });
    });
  },
  sendGetJSON: getProps => {
    getProps.userToken = loginInfo && loginInfo.access_token;
    getProps.errorFun = getProps.error ? getProps.error : Utils.sendError;
    getProps.auth = getProps.auth || true;
    HttpUtil.sendGetJSON(getProps).then(responseObj => {
      responseObj.isPageInterface = getProps.isPageInterface || false;
      responseObj.token = getProps.token;
      if (getProps.auth) {
        if (!responseObj) {
          !getProps.existData && getProps.errorFun(responseObj);
        } else if (responseObj.code && responseObj.code == 200) {
          if (getProps.storage) {
            console.log('写入缓存----->');
            console.log(responseObj);
            AsyncStorage.setItem(getProps.url, JSON.stringify(responseObj));
          }
          getProps.success(responseObj);
        } else if (responseObj.code == 401) {
          Utils.getRefreshUserInfo(() => {
            Utils.sendGetJSON(getProps);
          }, getProps.actions);
        } else {
          !getProps.existData && getProps.errorFun(responseObj);
        }
      } else {
        if (getProps.storage) {
          console.log('写入缓存----->');
          console.log(responseObj);
          AsyncStorage.setItem(getProps.url, JSON.stringify(responseObj));
        }
        getProps.success(responseObj || {message: '', code: 500});
      }
    });
  },
  getRefreshUserInfo: (callback, actions) => {},
};
