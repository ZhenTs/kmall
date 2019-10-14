/**
 * 导航组件
 * 2017/11/29
 * 作者:郭凯
 */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import BaseStyle from '../../styles/BaseStyle';
import {NavigatorBarImages} from '../../images/components/custom';
import {ifIphoneX} from '../../utils/base/PlatformUtil';

const propTypes = {
  title: PropTypes.string,
  titleStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  renderTitle: PropTypes.func,
  renderStatusBar: PropTypes.func,
  // 左侧操作
  leftButtonImage: Image.propTypes.source,
  leftButtonText: PropTypes.string,
  leftButtonOnPress: PropTypes.func,
  leftBtnImgStyle: Image.propTypes.style,
  leftTextStyle: Text.propTypes.style,
  renderLeftButton: PropTypes.func,
  // 右侧操作
  rightButtonImage: Image.propTypes.source,
  rightButtonText: PropTypes.string,
  rightButtonOnPress: PropTypes.func,
  rightBtnImgStyle: Image.propTypes.style,
  rightTextStyle: Text.propTypes.style,
  rightButtonStyle: ViewPropTypes.style,
  renderRightButton: PropTypes.func,
  rightBrage: PropTypes.number,
  rightButtons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      img: Image.propTypes.source,
      textStyle: Text.propTypes.style,
      onPress: PropTypes.func,
      imgStyle: Image.propTypes.style,
      brage: PropTypes.number,
    }),
  ),
  // 整个导航
  renderNav: PropTypes.func,
};

class NavigatorBar extends React.Component {
  render() {
    this.props.renderNav && this.props.renderNav();
    return (
      <View style={[styles.container, this.props.style]}>
        {this._renderLeft()}
        {this._renderCenter()}
        {this._renderRight()}
      </View>
    );
  }

  _renderLeft = () => {
    if (this.props.renderLeftButton) {
      return this.props.renderLeftButton();
    }
    let leftContainer = null;
    let {
      leftButtonImage,
      leftButtonOnPress,
      leftButtonText,
      leftTextStyle,
      leftBtnImgStyle,
    } = this.props;
    if (this.props.leftButtonIsBack && !leftButtonImage && !leftButtonText) {
      leftButtonImage = NavigatorBarImages.nav_back;
    }
    if (leftButtonText && !leftButtonImage) {
      leftContainer = (
        <NavigatorText
          text={leftButtonText}
          textStyle={leftTextStyle}
          onPress={leftButtonOnPress}
        />
      );
    }
    if (leftButtonImage && leftButtonOnPress) {
      leftContainer = (
        <NavigatorImage
          text={leftButtonText}
          image={leftButtonImage}
          imageStyle={leftBtnImgStyle}
          textStyle={leftTextStyle}
          onPress={leftButtonOnPress}
        />
      );
    }
    return <View style={styles.leftC}>{leftContainer}</View>;
  };

  _renderCenter = () => {
    if (this.props.renderTitle) {
      return this.props.renderTitle();
    }
    return (
      <View style={styles.centerC}>
        <Text style={[styles.titleT, this.props.titleStyle]} numberOfLines={1}>
          {this.props.title}
        </Text>
      </View>
    );
  };

  _renderRight = () => {
    if (this.props.renderRightButton) {
      return this.props.renderRightButton();
    }
    if (this.props.rightButtons) {
      return this._renderRightButtons();
    }
    let rightContainer = null;
    let {
      rightButtonImage,
      rightButtonOnPress,
      rightButtonText,
      rightButtonStyle,
      rightTextStyle,
      rightBtnImgStyle,
      rightBrage,
    } = this.props;
    if (rightButtonText && !rightButtonImage) {
      rightContainer = (
        <NavigatorText
          text={rightButtonText}
          textStyle={rightTextStyle}
          buttonStyle={rightButtonStyle}
          onPress={rightButtonOnPress}
        />
      );
    }
    if (rightButtonImage && rightButtonOnPress) {
      rightContainer = (
        <NavigatorImage
          text={rightButtonText}
          image={rightButtonImage}
          brage={rightBrage}
          imageStyle={rightBtnImgStyle}
          textStyle={rightTextStyle}
          onPress={rightButtonOnPress}
        />
      );
    }
    return <View style={styles.rightC}>{rightContainer}</View>;
  };

  _renderRightButtons = () => {
    let rightContainer = [];
    this.props.rightButtons.map((item, index) => {
      let {img, onPress, text, textStyle, imgStyle, brage} = item;
      let btnStyle = {};
      if (text && !img) {
        rightContainer.push(
          <NavigatorText
            text={text}
            key={index}
            textStyle={textStyle}
            buttonStyle={btnStyle}
            onPress={onPress}
          />,
        );
      }
      if (img && onPress) {
        rightContainer.push(
          <NavigatorImage
            text={text}
            buttonStyle={btnStyle}
            image={img}
            key={index}
            brage={brage}
            imageStyle={imgStyle}
            textStyle={textStyle}
            onPress={onPress}
          />,
        );
      }
    });
    return (
      <View style={[styles.rightC, styles.moreBtnC]}>{rightContainer}</View>
    );
  };
}

class NavigatorImage extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={1}>
        <View style={[styles.buttonC, this.props.buttonStyle]}>
          {!this.props.text ? (
            <Image
              source={this.props.image}
              style={[styles.buttonI, {marginBottom: 0}, this.props.imageStyle]}
            />
          ) : (
            <View style={styles.buttonC}>
              <Image source={this.props.image} style={styles.buttonI} />
              <Text style={[styles.buttonT, this.props.textStyle]}>
                {this.props.text}
              </Text>
            </View>
          )}
          {this._renderBradge(this.props.brage)}
        </View>
      </TouchableOpacity>
    );
  }

  _renderBradge = () => {
    if (this.props.brage > 0) {
      if (this.props.brage < 10) {
        return (
          <View style={styles.brageC}>
            <Text style={styles.brageT}>{this.props.brage}</Text>
          </View>
        );
      } else if (this.props.brage < 100) {
        return (
          <View style={[styles.brageC, styles.brageMC]}>
            <Text style={styles.brageT}>{this.props.brage}</Text>
          </View>
        );
      } else if (this.props.brage > 100) {
        return (
          <View style={[styles.brageC, styles.brageLC]}>
            <Text style={styles.brageT}>99+</Text>
          </View>
        );
      }
    }
  };
}

class NavigatorText extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={1}>
        <View style={[styles.buttonTextC, this.props.buttonStyle]}>
          <Text
            style={[
              styles.buttonT,
              {fontSize: BaseStyle.fonts.sizeNormal},
              this.props.textStyle,
            ]}>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: ifIphoneX(50, BaseStyle.statusH),
    height: 44 + ifIphoneX(50, BaseStyle.statusH),
    backgroundColor: BaseStyle.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999,
  },
  titleT: {
    color: BaseStyle.colors.main,
    fontSize: BaseStyle.fonts.sizeNavTitle,
  },
  leftC: {
    flex: 1,
  },
  centerC: {
    flex: 2,
    ...BaseStyle.centerFlex,
  },
  rightC: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  moreBtnC: {
    justifyContent: 'flex-end',
  },
  mbuttonC: {
    marginRight: 14,
  },
  buttonC: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 44,
  },
  buttonTextC: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 16,
    flex: 1,
    height: 44,
  },
  buttonT: {
    color: BaseStyle.colors.main,
    fontSize: BaseStyle.fonts.sizeIconT,
  },
  buttonI: {
    width: 17,
    height: 17,
    marginBottom: 5,
  },
  brageC: {
    position: 'absolute',
    top: 0,
    left: 24,
    backgroundColor: BaseStyle.colors.primary,
    width: 14,
    height: 14,
    borderRadius: 7,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  brageMC: {
    width: 18,
    right: -7,
  },
  brageLC: {
    width: 22,
    right: -9,
  },
  brageT: {
    fontSize: 9,
    color: '#fff',
    textAlign: 'center',
  },
});

NavigatorBar.propTypes = propTypes;

NavigatorBar.defaultProps = {
  leftButtonIsBack: true,
  leftBtnImgStyle: {width: 17, height: 17},
};

export default NavigatorBar;
