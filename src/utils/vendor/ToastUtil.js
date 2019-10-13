import Toast from 'react-native-root-toast';

let toast;

export default class ToastUtil {
  toastShort = content => {
    if (toast !== undefined) {
      Toast.hide(toast);
    }
    toast = Toast.show(content.toString(), {
      duration: Toast.durations.SHORT,
      position: 0,
      shadow: false,
      animation: true,
      hideOnPress: true,
      delay: 0,
      zIndex: 10000,
    });
  };

  toastLong = content => {
    if (toast !== undefined) {
      Toast.hide(toast);
    }
    toast = Toast.show(content.toString(), {
      duration: Toast.durations.LONG,
      position: 0,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };
}
