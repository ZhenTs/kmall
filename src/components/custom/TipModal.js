/**
 * 配合redux的全局弹窗组件
 */
import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ConnectComponent from '../../redux/ConnectComponent';

class LayoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({modalVisible: nextProps.modalVisible});
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#66666666',
            padding: 20,
          }}>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: '#ffffff',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, margin: 20, color: '#2c2c2c'}}>
              敬请期待！
            </Text>

            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: false});
              }}
              style={{
                borderTopWidth: 1,
                borderColor: '#eeeeee',
                flexDirection: 'row',
              }}>
              <View style={{alignItems: 'center', flex: 1}}>
                <Text style={{fontSize: 22, padding: 20, color: '#2c2c2c'}}>
                  关闭
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export function mapStateToProps(state) {
  return {
    ...state.common.tipModal,
  };
}

export default ConnectComponent({mapStateToProps, LayoutContainer});
