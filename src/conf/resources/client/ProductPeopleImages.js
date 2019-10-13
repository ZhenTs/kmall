/**
 * @author Lz
 * @date 2018/7/10
 * @Description:产品人图片
 */

import BaseImages from '../BaseImages';

export default class ProductPeopleImages extends BaseImages {
  static clerk = require('../../../images/client/productPepole/clerk.png');
  static clerk_red = require('../../../images/client/productPepole/clerk_red.png');
  static common = require('../../../images/client/productPepole/common.png');
  static common_red = require('../../../images/client/productPepole/common_red.png');
  static decoration = require('../../../images/client/productPepole/decoration.png');
  static decoration_red = require('../../../images/client/productPepole/decoration_red.png');
  static equipment = require('../../../images/client/productPepole/equipment.png');
  static equipment_red = require('../../../images/client/productPepole/equipment_red.png');
  static initial_fee = require('../../../images/client/productPepole/initial_fee.png');
  static initial_fee_red = require('../../../images/client/productPepole/initial_fee_red.png');
  static local = require('../../../images/client/productPepole/local.png');
  static startup_fee = require('../../../images/client/productPepole/startup_fee.png');
  static startup_fee_red = require('../../../images/client/productPepole/startup_fee_red.png');
  static store = require('../../../images/client/productPepole/store.png');
  static store_red = require('../../../images/client/productPepole/store_red.png');
  static investment_option = require('../../../images/client/productPepole/investment_option.png');
  static chat_single = require('../../../images/client/productPepole/chat_single.png');
  static chat_mult = require('../../../images/client/productPepole/chat_mult.png');
  static investment_option_icons = [
    ProductPeopleImages.initial_fee_red,
    ProductPeopleImages.startup_fee_red,
    ProductPeopleImages.store_red,
    ProductPeopleImages.equipment_red,
    ProductPeopleImages.clerk_red,
    ProductPeopleImages.decoration_red,
  ];
}
