import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BaseContainer from '../../../components/base/BaseComponent';
import HttpUtil from '../../../utils/base/HttpUtil';

export default class HomePage2 extends BaseContainer {
  _render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>Hello 1111</Text>
        <Text>World</Text>
        <TouchableOpacity
          onPress={() => {
            HttpUtil.get(
              'http://api.map.baidu.com/place/v2/search?query=美食$酒店$房地产$购物$生活服务$丽人$旅游景点$休闲娱乐$运动健身$教育培训$文化传媒$医疗$汽车服务$交通设施$金融$房地产$公司企业$政府机构&location=34.23006503509994,108.88731399999993&radius=1000&output=json&ak=vpGZgx7SqGk5ctVi8KuWXgfjqOE6mhAk&page_num=0&page_size=20&scope=2&filter=sort_name:distance|sort_rule:1',
            ).then(result => {
              console.log(result);
            });
            // setTimeout(() => {
            //   this.props.actions.maskViewHandler(false);
            // }, 2000);
            // this.props.actions.maskViewHandler(true);
            // this.props.actions.toast("你好",2000);
            // this.props.actions.tipModal();
            // this.props.actions.messageTip("你好",4000);
          }}>
          <Text>press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
