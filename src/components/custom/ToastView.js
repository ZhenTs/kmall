/**
 * 配合redux使用的全局吐司提示组件
 */
import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ConnectComponent from '../../redux/ConnectComponent';

const {width} = Dimensions.get('window');
const defaultText = 'Toast';
const defaultTimeout = 3000;

class LayoutContainer extends Component {
  static defaultProps = {
    duration: 300,
  };

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0.4),
      show: false,
      text: defaultText,
      timeout: defaultTimeout,
    };
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.show(nextProps.text, nextProps.timeout);
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

  show(text = defaultText, timeout = defaultTimeout) {
    const {duration} = this.props;
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: duration,
    }).start();
    this.setState({
      show: true,
      text,
      timeout,
    });
    this.timeout = setTimeout(() => {
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: duration,
      }).start(() => {
        this.setState({
          show: false,
        });
      });
    }, timeout - duration);
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 3000,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toast: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 7,
    width: (180 / 375) * width,
    minHeight: 20,
    paddingHorizontal: 20,
    paddingTop: 7,
    paddingBottom: 10,
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
    ...state.common.toast,
  };
}

export default ConnectComponent({
  mapStateToProps,
  LayoutContainer,
});
