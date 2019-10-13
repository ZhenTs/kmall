/**
 * 本地模块Api
 * 2017/11/30
 * 作者:郭凯
 */
import BaseApis from '../BaseApis';

export default class LocalApis extends BaseApis {
  // 附近馋吧
  static nearbyCBar(lat, lng, cityCode, cb, token) {
    Utils.sendPostJSON({
      url: this.AppSite + this.CateringWeb + '/Cbar/SelectAllCbar',
      body: JSON.stringify({
        Userlat: lat,
        Userlng: lng,
        CityCode: cityCode,
        PageSize: 10,
        PageIndex: 1,
      }),
      auth: false,
      isPageInterface: true,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data.ListData);
        }
      },
      token,
    });
  }

  // 最新活动
  static newActivity(cityCode, cb, token) {
    Utils.sendGetJSONWithCache({
      url:
        this.AppSite +
        this.CateringWeb +
        '/Activity/Activitys' +
        '?pageIndex=1',
      auth: false,
      isPageInterface: true,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          console.log(obj.Data.ListData);
          cb(obj.Data.ListData);
        }
      },
      token: token,
    });

    //Utils.sendPostJSON({
    //url:this.AppSite + this.CateringWeb + '/Cbar/SelectActivity',
    //body: JSON.stringify({
    //    "CityCode": cityCode,
    //   "PageSize": 10,
    //   "PageIndex": 1
    //}),
    //auth:false,
    //isPageInterface:true,
    //success:result=>{
    //   let obj = JSON.parse(result.message);
    //   if(obj.Code == 200){
    //       cb(obj.Data.ListData);
    //   }
    //},token
    //})
  }
}
