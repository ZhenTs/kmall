/**
 * App Api集合
 * 2017/11/28
 * 作者:郭凯
 */
import ClientApis from './client';
import BusinessApis from './business';
import PartnerApis from './partner';

export default {
  ...ClientApis,
  ...BusinessApis,
  ...PartnerApis,
};
