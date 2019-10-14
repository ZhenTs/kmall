import HomeScenes from './home';
import {HomePage, HomePage2} from './home/pages';
import {TabImages} from '../images/common';

export const ModuleScenes = [].concat(HomeScenes);

export const TabScenes = [
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
