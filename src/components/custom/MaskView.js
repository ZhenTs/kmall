/**
 * 配合redux的全局遮罩组件
 */
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  StyleSheet,
  View,
} from 'react-native';

import ConnectComponent from '../../redux/ConnectComponent';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isShow: nextProps.isShow,
    });
  }

  render() {
    return (
      <Modal transparent={true} visible={this.state.isShow}>
        <View style={styles.maskStyle}>
          <ActivityIndicator size='large' color='#a7a7a7' />
        </View>
      </Modal>
    );
  }

  openMaskView() {
    this.setState({
      isShow: true,
    });
  }

  hideMaskView() {
    this.setState({
      isShow: false,
    });
  }

  getIsShow() {
    return this.state.isShow;
  }
}

const styles = StyleSheet.create({
  maskStyle: {
    top: 0,
    backgroundColor: '#000000',
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
});

export function mapStateToProps(state) {
  return {
    ...state.common.maskView,
  };
}

export default ConnectComponent({
  mapStateToProps,
  LayoutContainer,
});
