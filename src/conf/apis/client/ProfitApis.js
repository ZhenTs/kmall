/**
 * 收益相关Api
 * 2018/1/30
 * 作者:郭凯
 */
import BaseApis from '../BaseApis';

export default class ProfitApis extends BaseApis {
  // 合伙人收益
  static partnerProfit(cb) {
    Utils.sendPostJSON({
      url: this.AppSite + this.CateringWeb + '/Partner/GetMyAccumulatedByMonth',
      body: JSON.stringify({}),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data);
        }
      },
    });
  }

  // 获取用户收益信息
  static getUserAllProfitDataInfo(cb, token) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/PersonalCenter/GetUserAllProfitDataInfo',
      body: JSON.stringify({}),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data);
        }
      },
      token,
    });
  }

  // 获取用户收益类型
  static getBalanceFlowType(cb) {
    Utils.sendPostJSON({
      url:
        this.AppSite + this.CateringWeb + '/PersonalCenter/GetBalanceFlowType',
      body: JSON.stringify({}),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          console.log(obj.Data);
          cb(obj.Data);
        }
      },
    });
  }

  // 根据月份获取用户的收益信息
  static getBalanceFlowRecordByMonth(flowType, endTime, cb, token) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/PersonalCenter/GetBalanceFlowRecordByMonth',
      body: JSON.stringify({
        flowType: flowType,
        endTime: endTime,
      }),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data);
        }
      },
      token,
    });
  }
}
