/**
 * @author Lz
 * @date 2018/7/10
 * @Description:产品人API
 */
import BaseApis from '../BaseApis';

export default class ProductPeopleApis extends BaseApis {
  //1、	获取产品人标的项目标签
  static GetTargetProjectLabelColl(callback) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProject/GetTargetProjectLabelColl',
      body: JSON.stringify({}),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        }
      },
    });
  }

  //2、	获取标的项目列表接口
  static GetTargetProjectList(typeCode, pageSize, pageIndex, callback) {
    Utils.sendPostJSON({
      url:
        this.AppSite + this.CateringWeb + '/TargetProject/GetTargetProjectList',
      body: JSON.stringify({
        pageSize: pageSize,
        pageIndex: pageIndex,
        projectLabelCode: typeCode,
      }),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data.ListData);
        }
      },
    });
  }

  //3、	产品人标的项目详情
  static GetTargetProjectItem(code, callback) {
    Utils.sendPostJSON({
      url:
        this.AppSite + this.CateringWeb + '/TargetProject/GetTargetProjectItem',
      body: JSON.stringify({
        code: code,
      }),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        }
      },
    });
  }

  //4、	产品人标的项目标的信息列表
  static GetTargetProjectTargetInfoList(projectCode, callback) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProject/GetTargetProjectTargetInfoList',
      body: JSON.stringify({
        projectCode: projectCode,
      }),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        }
      },
    });
  }

  //5、	获取产品人标的项目状态集合
  static GetTargetProjectStatusColl(callback) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProject/GetTargetProjectStatusColl',
      body: JSON.stringify({}),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        }
      },
    });
  }

  //6、	根据项目编码获取投资人列表
  static GetInvestmentUserListByProjectCode(projectCode, callback) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProject/GetInvestmentUserListByProjectCode',
      body: JSON.stringify({
        projectCode: projectCode,
      }),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        }
      },
    });
  }

  //7、	所有个人持有的产品人项目标的出售列表
  static GetPersonTargetInfoSellInfoList(ownerUserCode, callback) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProject/GetPersonTargetInfoSellInfoList',
      body: JSON.stringify({
        ownerUserCode: ownerUserCode,
      }),
      success: result => {
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        }
      },
    });
  }

  //1、	创建标的订单
  static CreateOrder(targetCode, number, callback, errorCallback) {
    Utils.sendPostJSON({
      url: this.AppSite + this.CateringWeb + '/TargetProjectAuth/CreateOrder',
      body: JSON.stringify({
        targetCode: targetCode,
        number: number,
      }),
      success: result => {
        console.log(result);
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        } else {
          errorCallback(obj.ErrorMsg);
        }
      },
      error: error => {
        errorCallback(error);
      },
    });
  }

  //2、	创建个人出售标的的订单
  static CreatePersonSellerOrder(TargetSellInfoCode, callback, errorCallback) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProjectAuth/CreatePersonSellerOrder',
      body: JSON.stringify({
        TargetSellInfoCode: TargetSellInfoCode,
      }),
      success: result => {
        console.log(result);
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        } else {
          errorCallback(obj.ErrorMsg);
        }
      },
      error: error => {
        errorCallback(error);
      },
    });
  }

  //3、	获取用户支持的产品人标的订单列表
  static GetTargetProjectTargetOrderInfoList(
    projectStatus,
    callback,
    errorCallback,
  ) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProjectAuth/GetTargetProjectTargetOrderInfoList',
      body: JSON.stringify({
        projectStatus: projectStatus,
      }),
      success: result => {
        console.log(result);
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data.ListData);
        } else {
          errorCallback(obj.ErrorMsg);
        }
      },
      error: error => {
        errorCallback(error);
      },
    });
  }

  //4、	获取标的收益信息
  static GetTargetProjectTargetIncomeSummaryInfo(
    targetCode,
    sellerCode,
    callback,
    errorCallback,
  ) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProjectAuth/GetTargetProjectTargetIncomeSummaryInfo',
      body: JSON.stringify({
        targetCode: targetCode,
        sellerCode: sellerCode,
      }),
      success: result => {
        console.log(result);
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        } else {
          errorCallback(obj.ErrorMsg);
        }
      },
      error: error => {
        errorCallback(error);
      },
    });
  }

  //5、	获取自己的标的收益信息
  static GetTargetProjectTargetIncomeInfoList(
    targetCode,
    sellerCode,
    callback,
    errorCallback,
  ) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProjectAuth/GetTargetProjectTargetIncomeInfoList',
      body: JSON.stringify({
        targetCode: targetCode,
        sellerCode: sellerCode,
      }),
      success: result => {
        console.log(result);
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        } else {
          errorCallback(obj.ErrorMsg);
        }
      },
      error: error => {
        errorCallback(error);
      },
    });
  }

  //6、	个人持有的产品人项目标的出售列表
  static GetPersonTargetInfoSellInfoList(targetCode, callback, errorCallback) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProjectAuth/GetPersonTargetInfoSellInfoList',
      body: JSON.stringify({
        targetCode: targetCode,
        sellerCode: sellerCode,
      }),
      success: result => {
        console.log(result);
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        } else {
          errorCallback(obj.ErrorMsg);
        }
      },
      error: error => {
        errorCallback(error);
      },
    });
  }

  //7、	发布标的出售信息
  static PublishProductPersonTargetSellInfo(
    targetCode,
    pledgedSaleMoney,
    totalSaleMoney,
    callback,
    errorCallback,
  ) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProjectAuth/PublishProductPersonTargetSellInfo',
      body: JSON.stringify({
        targetCode: targetCode,
        sellerCode: sellerCode,
      }),
      success: result => {
        console.log(result);
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        } else {
          errorCallback(obj.ErrorMsg);
        }
      },
      error: error => {
        errorCallback(error);
      },
    });
  }

  //8、	获取指定商家的收益列表
  static GetSellerIncomeList(
    sellerCode,
    pageSize,
    pageIndex,
    callback,
    errorCallback,
  ) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProjectAuth/GetSellerIncomeList',
      body: JSON.stringify({
        targetCode: targetCode,
        sellerCode: sellerCode,
      }),
      success: result => {
        console.log(result);
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        } else {
          errorCallback(obj.ErrorMsg);
        }
      },
      error: error => {
        errorCallback(error);
      },
    });
  }

  //9、	获取指定用户的标的收益列表
  static GetSpecialUserTargetIncomeInfoList(
    targetCode,
    ownerUserCode,
    callback,
    errorCallback,
  ) {
    Utils.sendPostJSON({
      url:
        this.AppSite +
        this.CateringWeb +
        '/TargetProjectAuth/GetSpecialUserTargetIncomeInfoList',
      body: JSON.stringify({
        targetCode: targetCode,
        sellerCode: sellerCode,
      }),
      success: result => {
        console.log(result);
        let obj = JSON.parse(result.message);
        if (obj.Code === 200) {
          callback(obj.Data);
        } else {
          errorCallback(obj.ErrorMsg);
        }
      },
      error: error => {
        errorCallback(error);
      },
    });
  }

  static GetShareUrl(code) {
    return (
      this.AppSite +
      this.CateringPage +
      '/Nurturing/TargetProject.html?Code=' +
      code
    );
  }
}
