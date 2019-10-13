/**
 * 我的模块常量
 * 2017/11/30
 * 作者:郭凯
 */

import MineImages from '../../resources/client/MineImages';

export default class LocalConstants {
  static orderArr = [
    {
      img: MineImages.order_food,
      title: '美食',
      route: 'myOrderList',
    },
    {
      img: MineImages.order_nurting,
      title: '产品人',
      route: 'myProductPeopleProject',
    },
    {
      img: MineImages.order_nurting,
      title: '包养',
      route: 'NurturingGoods',
    },
    {
      img: MineImages.order_activity,
      title: '活动',
      route: 'activityOrders',
    },
    {
      img: MineImages.order_changdi,
      title: '场地',
      route: 'myReserveCbarLocation',
    },
    {
      img: MineImages.order_chanba,
      title: '馋吧活动',
      route: 'myApplyCbarActivity',
    },
    {
      img: MineImages.order_zhanhui,
      title: '展会',
      route: 'expoMyOrders',
    },
    {
      img: MineImages.order_kajuan,
      title: '卡券',
      route: 'buyerOrders',
    },
    {
      img: MineImages.order_yuefan,
      title: '约饭',
      route: 'userOrders',
    },
  ];

  static serviceArr = [
    {
      img: MineImages.service_juan,
      title: '券包',
      route: 'myCoupon',
    },
    {
      img: MineImages.service_card,
      title: '卡包',
      route: 'myCards',
    },
    {
      img: MineImages.service_gift,
      title: '礼包',
      route: 'slOrderManager',
    },
    {
      img: MineImages.service_bank_card,
      title: '银行卡',
      route: 'bankCarManager',
    },
    {
      img: MineImages.service_address,
      title: '地址',
      route: 'myAddress',
    },
    {
      img: MineImages.service_profit,
      title: '收益',
      func: '_onGoToMyProfit',
    },
  ];

  static funArr = [
    {
      img: MineImages.menu_chanbaguanli,
      title: '馋吧场地管理',
      route: 'locationManage',
    },
    {
      img: MineImages.menu_huodongguanli,
      title: '活动管理',
      route: 'activityManage',
    },
    {
      img: MineImages.menu_chandouguanli,
      title: '馋豆任务管理',
      route: 'myPoint',
    },
    {
      img: MineImages.menu_salecoupon,
      title: '出售优惠券',
      route: 'couponManageIndex',
    },
    {
      img: MineImages.menu_yuefanguanli,
      title: '约饭管理',
      func: '_onGoToLifer',
    },
    {
      img: MineImages.menu_findwork,
      title: '找工作',
      route: 'MyJob',
    },
  ];

  static appArr = [
    {
      img: MineImages.app_partner,
      title: '合伙人中心',
      func: '_onGoToPartner',
    },
    {
      img: MineImages.app_business,
      title: '商家中心',
      func: '_onGoToBusiness',
    },
    {
      img: MineImages.app_exchange,
      title: '物流中心',
      func: '_onGoToLogisitcCenter',
    },
  ];
}
