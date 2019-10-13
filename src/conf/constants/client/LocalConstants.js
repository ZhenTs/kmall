/**
 * 本地模块常量
 * 2017/11/30
 * 作者:郭凯
 */

import LocalImages from '../../resources/client/LocalImages';

export default class LocalConstants {
  static menuArr = [
    [
      {
        img: LocalImages.menu_zhanhui,
        title: '展会',
        onPress: () => Routes.expoExhibition(),
      },
      {
        img: LocalImages.menu_activity,
        title: '活动',
        onPress: () => Routes.activityList(),
      },
      {
        img: LocalImages.menu_yuefan,
        title: '约饭',
        onPress: () => Routes.lifeList(),
      },
      {
        img: LocalImages.menu_coupon,
        title: '优惠券',
        onPress: () => Routes.coupon(),
      },
      {
        img: LocalImages.menu_point,
        title: '赚馋豆',
        onPress: () => Routes.pointTask(),
      },
      {
        img: LocalImages.menu_canteen,
        title: '食堂',
        onPress: () => Routes.canteenList(),
      },
      {
        img: LocalImages.menu_waimain,
        title: '外卖',
        onPress: () => Routes.outfoodList(),
      },
      {
        img: LocalImages.menu_book,
        title: '预订',
        onPress: () => Routes.resBookList(),
      },
      {
        img: LocalImages.menu_scan,
        title: '扫码点菜',
        onPress: () => Routes.scanBook(),
      },
      {
        img: LocalImages.menu_cooker,
        title: '厨师上门',
        onPress: () => Routes.cookerList(),
      },
    ],
    [
      {
        img: LocalImages.menu_tuangou,
        title: '团购优惠',
        onPress: () => {
          Routes.groupCoupon();
        },
      },
      {
        img: LocalImages.menu_market,
        title: '社区超市',
        onPress: () => {
          Routes.foodList({
            mainCate: 'fd06a22f-c197-9456-42c2-5f0818bfb7b4',
            subCate: 'fd06a22f-c197-9456-42c2-5f0818bfb7b4',
          });
        },
      },
      {
        img: LocalImages.menu_zhaopin,
        title: '求职招聘',
        onPress: () => Routes.NearEmployer(),
      },
    ],
  ];
}
