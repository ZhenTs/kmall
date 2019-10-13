/**
 * 首页模块Api
 * 2017/11/30
 * 作者:郭凯
 */
import BaseApis from '../BaseApis';

export default class HomeApis extends BaseApis {
  // 首页-branner
  static homeBranner(cb, token) {
    Utils.sendPostJSONWithCache({
      url: this.AppSite + this.CateringWeb + '/Store/LoadRecommendedItem',
      body: JSON.stringify({
        pageSize: 8,
        pageIndex: 1,
        RecommendedGoodsTpye: 0,
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

  // 首页-美食快讯
  static foodNews(cb) {
    Utils.sendPostJSONWithCache({
      url:
        this.AppSite + this.CateringWeb + '/news/LoadPublishedNewsListByType',
      body: JSON.stringify({
        type: 0,
        PageIndex: 1,
        PageSize: 6,
      }),
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          let section_list = [];
          let tmp = [];
          for (var i = 0; i < obj.Data.ListData.length; i++) {
            tmp.push(obj.Data.ListData[i]);
            if ((i + 1) % 2 == 0) {
              section_list.push(tmp);
              tmp = [];
            }
          }
          cb(section_list);
        }
      },
    });
  }

  // 首页-美食快讯
  static foodNewsList(pageIndex, cb, token) {
    Utils.sendPostJSON({
      url:
        this.AppSite + this.CateringWeb + '/news/LoadPublishedNewsListByType',
      body: JSON.stringify({
        type: 0,
        PageIndex: pageIndex,
        PageSize: 20,
      }),
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          console.log(obj.Data.ListData);
          cb(obj.Data.ListData);
        }
      },
      token,
    });
  }

  // 首页-我的收益
  static myProfit(cb) {
    Utils.sendPostJSONWithCache({
      url:
        this.AppSite +
        this.CateringWeb +
        '/PersonalCenter/GetUserProfitAndPointTasksData',
      body: JSON.stringify({
        userCode: userInfo && userInfo.userCode,
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

  // 首页-产品人路演
  static productors(cb, token) {
    Utils.sendPostJSONWithCache({
      url:
        this.AppSite +
        this.CateringWeb +
        '/ProductPersonProjectList/GetProPersonList',
      body: JSON.stringify({
        AuditResult: true,
        ProjectStatus: 9,
        Name: '', //项目名称
        Sponsor: '', //产品人
        UserCode: '',
        Sort: '',
        PageIndex: 1,
        PageSize: 8,
        FromType: 'CateringUser',
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

  static GetTargetProjectList(pageSize, pageIndex, callback) {
    Utils.sendPostJSON({
      url:
        this.AppSite + this.CateringWeb + '/TargetProject/GetTargetProjectList',
      body: JSON.stringify({
        pageSize: pageSize,
        pageIndex: pageIndex,
      }),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data.ListData);
        }
      },
    });
  }

  // 首页-包养产品
  static nurturing(cb, token) {
    Utils.sendPostJSONWithCache({
      url: this.AppSite + this.CateringWeb + '/ProductPlanList/GetProPlanList',
      body: JSON.stringify({
        TypeCode: '',
        ProductPlanStatus: 9,
        SellerName: '',
        Name: '',
        PageIndex: 1,
        PageSize: 8,
        Sort: 0,
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

  // 首页-我为美食代言
  static hotFood(cb, token) {
    Utils.sendPostJSONWithCache({
      url: this.AppSite + this.CateringWeb + '/Store/LoadStoreGoods',
      body: JSON.stringify({
        businessScopeCode: '',
        pageSize: 8,
        pageIndex: 1,
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
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data.ListData);
        }
      },
    });
  }

  // 首页-权益资质交易所
  static exchange(cb, token) {
    return;
  }

  // 首页-出售优惠券
  static coupon(cb, token) {
    Utils.sendGetJSONWithCache({
      url: this.AppSite + this.CateringWeb + '/Coupon/GetCoupons?pageIndex=1',
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data.ListData);
        }
      },
    });
  }

  // 首页-人人都是美食家
  static cookeryBook(cb, token) {
    Utils.sendPostJSONWithCache({
      url: this.AppSite + this.CateringWeb + '/CookeryBook/LoadCookeryBookList',
      body: JSON.stringify({
        pageSize: 8,
        pageIndex: 1,
        creator: '',
      }),
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data.ListData);
        }
      },
    });
  }

  // 首页-成为合伙人
  static partner(cb, token) {
    Utils.sendPostJSONWithCache({
      url: this.AppSite + this.CateringWeb + '/Partner/GetPartnerPersonList',
      body: JSON.stringify({
        provinceCode: '',
        cityCode: '',
        sort: 'sale',
        pageSize: 8,
        pageIndex: 1,
        userCode: '',
      }),
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data.ListData);
        }
      },
    });
  }

  // 首页-成为生活家
  static lifer(cb, token) {
    Utils.sendGetJSONWithCache({
      url:
        this.AppSite + this.CateringWeb + '/Topic/GetTopics' + '?pageIndex=1',
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data.ListData);
        }
      },
    });
  }

  // 首页-赚馋豆
  static point(cb, token) {
    Utils.sendPostJSONWithCache({
      url:
        this.AppSite + this.CateringWeb + '/PointTask/AnonymousReceiveTaskList',
      body: JSON.stringify({
        FilterCode: '',
        SortCode: 0,
        PageSize: 4,
        PageIndex: 1,
      }),
      auth: false,
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code == 200) {
          cb(obj.Data.ListData);
        }
      },
    });
  }
}
