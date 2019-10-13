/**
 * 消息提醒
 * 2018/1/9
 * 作者:郭凯
 */
import React from 'react';
import {Animated, Modal, StyleSheet, Text, View} from 'react-native';
import ConnectComponent from '../../redux/ConnectComponent';
import BaseStyle from '../../styles/BaseStyle';

class LayoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0.4),
      show: false,
    };
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this._onShowTip(nextProps.text, nextProps.timeout);
    }
  }

  render() {
    const opacity = {
      opacity: this.state.fadeAnim,
    };
    if (!this.state.show) return null;
    return (
      <Modal transparent={true}>
        <View style={styles.container}>
          <Animated.View style={[styles.toast, this.props.style, opacity]}>
            <Text style={styles.text}>{this.state.text}</Text>
          </Animated.View>
        </View>
      </Modal>
    );
  }

  _onShowTip = (text, timeout) => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1500,
    }).start();
    this.setState({
      show: true,
      text,
      timeout,
    });
    this.timeout = setTimeout(() => {
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 1500,
      }).start(() => {
        this.setState({
          show: false,
        });
      });
    }, timeout);
  };
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 3000,
    top: BaseStyle.statusH + 44,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  toast: {
    backgroundColor: BaseStyle.colors.primary,
    width: BaseStyle.winWidth,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 20,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export function mapStateToProps(state) {
  return {
    ...state.common.messageTip,
  };
}

export default ConnectComponent({
  mapStateToProps,
  LayoutContainer,
});
