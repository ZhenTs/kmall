/**
 * js辅助
 * 2017/11/30
 * 作者:郭凯
 */

export default {
  GUID: () => {
    var guid = '';
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
    }
    return guid;
  },

  /**
   * 金额格式化，返回为一个数组
   * @param money
   * @returns {Array}
   */
  MoneyFormat(money) {
    var num = parseFloat(money / 100);
    var numStr = num.toString();
    var numArr = numStr.split('.');
    if (numArr.length == 2) {
      numArr[1] = '.' + numArr[1];
    }
    return numArr;
  },
  Vailidate: {
    checkEmail(str) {
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
    },
    checkMobileNumber(str) {
      return /^(1)+\d{10}/.test(str);
    },
    checkIDCard(str) {
      return /^(^\d{18}$|^\d{17}(\d|X|x))$/.test(str);
    },
    checkUrlHead(str) {
      return /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(str);
    },
  },
};
