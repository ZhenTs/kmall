/**
 * 全局异常处理
 * 2017/12/1
 * 作者:郭凯
 */
import {DeviceEventEmitter} from 'react-native';
// if (!__DEV__){
ErrorUtils.setGlobalHandler(err => {
  err.isError = true;
  if (err.type === 'errorPage') {
    DeviceEventEmitter.emit('errorPage', err);
  } else {
    DeviceEventEmitter.emit('errorPageArea', err);
  }
});
// }
