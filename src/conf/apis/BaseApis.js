/**
 * 基础全局Api
 * 2017/11/30
 * 作者:郭凯
 */
import ApiConfig from './ApiConfig';

export default class BaseApis extends ApiConfig {
  //获取验证码
  static getVerifyCode =
    this.AppSite +
    '/MobileBusiness.Common/Services/PostSMSForDHST.asmx/GetSMSVerification';
  //检查验证码正确
  static checkVerifyCode =
    this.AppSite +
    '/MobileBusiness.Common/Services/PostSMSForDHST.asmx/CheckVerification';

  static getAppVersionInfo() {
    return this.AppSite + this.CateringWeb + '/Common/GetAppVersionInfo';
  }

  // 全局收藏
  static collectItem(type, bsCode, callback, token, isPageI) {
    Utils.sendPostJSON({
      url: this.AppSite + this.CateringWeb + '/Common/CollectItem',
      body: JSON.stringify({
        reourceID: bsCode,
        collectType: type,
      }),
      success: result => {
        let obj = JSON.parse(result.message);
        callback && callback();
      },
      auth: false,
      isPageInterface: isPageI != undefined ? isPageI : false,
      token,
    });
  }
}
