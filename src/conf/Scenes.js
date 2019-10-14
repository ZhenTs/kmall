/**
 * App页面集合
 * 2017/10/3
 * 作者:郭凯
 */
import React from 'react';
import {StatusBar} from 'react-native';
import {
  Actions,
  Drawer,
  Lightbox,
  Modal,
  Overlay,
  Scene,
  Stack,
} from 'react-native-router-flux';
import TabIcon from '../components/custom/TabIcon';
import BaseStyles from '../styles/BaseStyle';
import {TabScenes, ModuleScenes} from '../module';
import MainContainer from '../containers/MainContainer';

function initStatusBar() {
  if (Actions.currentScene === '_mine') {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#222222');
  } else {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fff');
  }
  console.log(Actions.currentScene);
}

export default () => {
  return (
    <Overlay key='overlay'>
      <Modal key='modal' hideNavBar>
        <Lightbox key='lightbox'>
          <Stack key='root' hideNavBar={true}>
            <Scene
              key='tabbar'
              tabs={true}
              activeTintColor={BaseStyles.colors.primary}
              inactiveTintColor={BaseStyles.colors.summary}
              tabStyle={{marginBottom: 4}}
              tabBarPosition='bottom'
              tabBarStyle={{
                borderTopColor: BaseStyles.colors.sperate,
                backgroundColor: BaseStyles.colors.white,
              }}>
              {TabScenes.map(item => {
                return getTabScene(item);
              })}
            </Scene>
            {/*所有页面 */}
            {ModuleScenes.map(item => {
              return (
                <Scene
                  key={item.key}
                  module={item.module}
                  title={item.title}
                  component={item.component}
                  onEnter={() => initStatusBar()}
                />
              );
            })}
          </Stack>
        </Lightbox>
      </Modal>
      {/* 全局顶层组件(redux) */}
      <Scene component={MainContainer} onEnter={() => initStatusBar()} />
    </Overlay>
  );
};

// 获取tab组件Scene
function getTabScene(item) {
  let isInitScene = {};
  isInitScene.initial = true;
  return (
    <Scene
      key={item.key}
      module={item.module}
      pressOpacity={1}
      hideNavBar={true}
      tabBarLabel={item.tabBarLabel}
      icon={TabIcon}
      component={item.component}
      Image={item.Image}
      {...isInitScene}
      selectImage={item.selectImage}
      tabBarOnPress={data => {
        if (data.navigation.state.key === 'mine') {
          StatusBar.setBarStyle('light-content');
        } else {
          StatusBar.setBarStyle('default');
        }
        // 扫一扫
        if (data.navigation.state.key === 'scan') {
          Actions.scanBook({title: '扫一扫'});
        } else {
          Actions.jump(data.navigation.state.key);
        }
      }}
      onEnter={() => initStatusBar()}
    />
  );
}
