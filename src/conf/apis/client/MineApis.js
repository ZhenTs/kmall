/**
 * 我的模块Api
 * 2018/01/19
 * 作者:zhangbm
 */
import BaseApis from '../BaseApis';

export default class MineApis extends BaseApis {
  // 获取用户的基本信息
  static getCurrentUserData(userCode, cb, token) {
    Utils.sendGetJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/Home/MyIndex?userCode=' +
        userCode +
        '&pageIndex=1',
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data);
        }
      },
    });
  }

  // 获取用户扩展数据
  static getCurrentUserExtendData(userCode, openId, cb, token) {
    Utils.sendPostJSON({
      url:
        this.AppSite + this.CateringWeb + '/StoreAuth/GetCateringUserDataInfo',
      body: JSON.stringify({
        userCode: userCode,
        openId: openId,
      }),
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data);
        }
      },
    });
  }

  // 获取toolbar统计数据
  static getToolbarStatData(cb) {
    Utils.sendPostJSON({
      url:
        this.AppSite + this.CateringWeb + '/StoreAuth/GetCateringUserDataInfo',
      body: JSON.stringify({
        userCode: userInfo && userInfo.Code,
        openId: ShoppingCartCode,
      }),
      success: result => {
        let obj = JSON.parse(result.message);
        cb(obj.Data);
      },
    });
  }
}
