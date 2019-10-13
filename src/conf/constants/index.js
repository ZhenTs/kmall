/**
 * App常量
 * 2017/11/29
 * 作者:郭凯
 */
import ClientConstants from './client';
import BusinessConstants from './business';
import PartnerConstants from './partner';
import commonConstants from './common/CommonConstants';

export default {
  ...ClientConstants,
  ...BusinessConstants,
  ...PartnerConstants,
  commonConstants,
};
