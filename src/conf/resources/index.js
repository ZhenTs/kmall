/**
 * App图片资源
 * 2017/11/28
 * 作者:郭凯
 */
import ClientImages from './client';
import BusinessImages from './business';
import PartnerImages from './partner';
import CommonImages from './common';

export default {
  ...ClientImages,
  ...BusinessImages,
  ...PartnerImages,
  ...CommonImages,
};
