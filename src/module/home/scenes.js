import TabImages from '../../conf/resources/client/TabImages';
import {HomePage, HomePage2} from './pages';

export default [
  {
    key: 'home1',
    module: 'home',
    tabBarLabel: '赚钱',
    lazy: true,
    component: HomePage,
    Image: TabImages.home_normal,
    selectImage: TabImages.home_selected,
  },
  {
    key: 'home2',
    module: 'home',
    tabBarLabel: '赚钱2',
    lazy: true,
    component: HomePage2,
    Image: TabImages.home_normal,
    selectImage: TabImages.home_selected,
  },
];
