/**
 * 美食页面模块Api
 * 2017/11/30
 * 作者:郭凯
 */
import BaseApis from '../BaseApis';

export default class FoodApis extends BaseApis {
  // 美食页面-branner
  static FoodBranner(cb, token) {
    Utils.sendPostJSONWithCache({
      url: this.AppSite + this.CateringWeb + '/Store/LoadRecommendedItem',
      body: JSON.stringify({
        pageSize: 8,
        pageIndex: 1,
        RecommendedGoodsTpye: 1,
      }),
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data.ListData);
        }
      },
      token,
    });
  }

  // 美食页面-明星产品人
  static getHotProPersonList(cb, token) {
    Utils.sendPostJSONWithCache({
      url: this.AppSite + this.CateringWeb + '/Seller/GetHotProPersonList',
      body: JSON.stringify({
        provinceCode: '',
        cityCode: '',
        businessScopeCode: '',
        pageSize: 8,
        pageIndex: 1,
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
  // 美食页面-多条件加载
  static getCategoryListData(
    mainCode,
    subCode,
    sort,
    page,
    province,
    city,
    county,
    sellerCode,
    cb,
    token,
  ) {
    let param = {
      url: this.AppSite + this.CateringWeb + '/Store/LoadStoreGoods',
      body: JSON.stringify({
        businessScopeCode: mainCode,
        pageSize: 8,
        pageIndex: page,
        searchType: subCode,
        provinceCode: province,
        cityCode: city,
        countyCode: county,
        searchSort: sort,
        sellerCode: sellerCode,
        coordinate: '',
        goodsName: '',
        sharingOrderCode: '',
        userCity: '',
        userCityCode: '',
        type: '',
        isAppGoDetail: true,
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
    };
    if (page === 1) {
      Utils.sendPostJSONWithCache(param);
    } else {
      Utils.sendPostJSON(param);
    }
  }
  // 美食页面-超值精选
  static getChaoZhiList(page, pageSize, cb, token) {
    let param = {
      url: this.AppSite + this.CateringWeb + '/Store/LoadStoreGoods',
      body: JSON.stringify({
        businessScopeCode: '',
        pageSize: pageSize,
        pageIndex: page,
        searchType: '',
        provinceCode: '',
        cityCode: '',
        countyCode: '',
        searchSort: 'MonthSalesNum',
        sellerCode: '',
        coordinate: '',
        goodsName: '',
        sharingOrderCode: '',
        userCity: '',
        userCityCode: '',
        type: '',
        isAppGoDetail: true,
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
    };
    if (page === 1) {
      Utils.sendPostJSONWithCache(param);
    } else {
      Utils.sendPostJSON(param);
    }
  }
}
