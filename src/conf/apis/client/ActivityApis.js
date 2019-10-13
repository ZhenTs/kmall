/**
 * 活动模块Api
 * 2018/01/04
 * 作者:zhangbm
 */
import BaseApis from '../BaseApis';

export default class ActivityApis extends BaseApis {
  // 最新活动
  static newActivity(cityCode, cb, token) {
    Utils.sendPostJSON({
      url: this.AppSite + this.CateringWeb + '/Cbar/SelectActivity',
      body: JSON.stringify({
        CityCode: cityCode,
        PageSize: 10,
        PageIndex: 1,
      }),
      auth: false,
      token,
      isPageInterface: true,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data.ListData);
        }
      },
    });
  }
}
