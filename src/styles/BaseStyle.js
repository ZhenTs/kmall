/**
 * App基础样式库
 * 2017/10/3
 * 作者:郭凯
 */
import StyleVariable from './StyleVariable';
import {Dimensions, Platform, StyleSheet} from 'react-native';
import {isIphoneX} from '../utils/base/PlatformUtil';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default class BaseStyle extends StyleVariable {
  // 默认容器
  static get container() {
    return {
      flex: 1,
      backgroundColor: this.colors.background,
    };
  }

  // 白底容器
  static get whiteContainer() {
    return {
      flex: 1,
      backgroundColor: this.colors.white,
    };
  }

  // 获取flex容器尺寸
  static flex(index) {
    return {
      flex: index,
    };
  }

  // 页面Margin
  static get pageMargins() {
    return {
      marginLeft: this.margins.pageMargin,
      marginRight: this.margins.pageMargin,
    };
  }

  // 容器内padding
  static get pagePaddings() {
    return {
      paddingLeft: this.margins.pageMargin,
      paddingRight: this.margins.pageMargin,
    };
  }

  // 横向水平居中
  static get rowCenterFlex() {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    };
  }

  // 横向水平居右
  static get rowRightFlex() {
    return {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    };
  }

  // 横向水平居左
  static get rowLeftFlex() {
    return {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    };
  }

  // 水平居中的容器
  static get centerFlex() {
    return {
      alignItems: 'center',
      justifyContent: 'center',
    };
  }

  // 水平容器
  static get rowFlex() {
    return {
      flexDirection: 'row',
      alignItems: 'center',
    };
  }

  // 水平左右容器
  static get rowSBFlex() {
    return {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    };
  }

  // 水平左右容器(不占满全屏)
  static get rowNFSBFlex() {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    };
  }

  // 垂直上下容器
  static get colSBFlex() {
    return {
      justifyContent: 'space-between',
    };
  }

  // 加载条
  static get refreshStyle() {
    return {
      tintColor: this.colors.main,
      title: '加载中...',
      titleColor: this.colors.main,
    };
  }

  // 宽全屏图片样式
  static fullWidthImage(db) {
    return {
      width: this.winWidth,
      height: this.scaleH(db),
    };
  }

  // 整屏幕背景图片
  static get fullScreenImage() {
    return {
      width: this.winWidth,
      height: this.winHeight,
    };
  }

  // 最小一像素
  static get miniPx() {
    return StyleSheet.hairlineWidth;
  }

  // 屏幕宽度
  static get winWidth() {
    return winWidth;
  }

  // 屏幕高度
  static get winHeight() {
    return winHeight;
  }

  // 自适应容器高度
  static scaleH(dp) {
    return Math.round((10 * dp * winWidth) / 375) / 10;
  }

  // 状态栏的高度
  static get statusH() {
    if (Platform.OS === 'ios') {
      return isIphoneX() ? 44 : 20;
    } else {
      return 0;
    }
  }

  // 去除边距的底边框
  static get shortBottomBorder() {
    return {
      ...this.bottomBorder,
      ...this.pageMargins,
    };
  }

  // 容器底边框
  static get bottomBorder() {
    return {
      borderBottomColor: this.colors.border,
      borderBottomWidth: StyleSheet.hairlineWidth,
    };
  }

  // 分割线
  static get sperate() {
    return {
      backgroundColor: this.colors.border,
      width: this.winWidth,
      height: StyleSheet.hairlineWidth,
    };
  }

  // 常用的字体样式集合
  static get textFont() {
    return {
      normalT: {
        ...this.text(this.fonts.sizeNormal, this.colors.main),
        ...this.textProps,
      },
      normalSummaryT: {
        ...this.text(this.fonts.sizeNormal, this.colors.summary),
        ...this.textProps,
      },
      normalPrimaryT: {
        ...this.text(this.fonts.sizeNormal, this.colors.primary),
        ...this.textProps,
      },
      normalSubmainT: {
        ...this.text(this.fonts.sizeNormal, this.colors.subMain),
        ...this.textProps,
      },
      btnPrimaryT: {
        ...this.text(this.fonts.sizeBtnT, this.colors.primary),
        ...this.textProps,
      },
      areaT: {
        ...this.text(this.fonts.sizeAreaTitle, this.colors.main),
        ...this.textProps,
      },
      btnT: {
        ...this.text(this.fonts.sizeBtnT, this.colors.main),
        ...this.textProps,
      },
      summaryT: {
        ...this.text(this.fonts.sizeSummary, this.colors.main),
        ...this.textProps,
      },
      titleT: {
        ...this.text(this.fonts.sizeTitle, this.colors.main),
        ...this.textProps,
      },
      summaryPrimaryT: {
        ...this.text(this.fonts.sizeSummary, this.colors.primary),
        ...this.textProps,
      },
      summarySubmainT: {
        ...this.text(this.fonts.sizeSummary, this.colors.subMain),
        ...this.textProps,
      },
      summaryST: {
        ...this.text(this.fonts.sizeSummary, this.colors.summary),
        ...this.textProps,
      },
      largePrimaryT: {
        ...this.text(this.fonts.sizeLarge, this.colors.primary),
        ...this.textProps,
      },
      miniSummaryT: {
        ...this.text(this.fonts.sizeMini, this.colors.summary),
        ...this.textProps,
      },
      miniSubmainT: {
        ...this.text(this.fonts.sizeMini, this.colors.subMain),
        ...this.textProps,
      },
    };
  }

  // Text组件默认属性
  static get textProps() {
    return {
      includeFontPadding: false,
      textAlignVertical: 'center',
    };
  }

  // 列表组件默认页尾样式
  static get listFoot() {
    return {
      container: {
        ...this.rowCenterFlex,
        marginVertical: 15,
        marginLeft: 10,
      },
      tipT: {
        ...this.textFont.summaryT,
      },
    };
  }

  // 全局错误页面样式
  static get errorPage() {
    return {
      container: {
        flex: 1,
        backgroundColor: this.colors.background,
        position: 'absolute',
        zIndex: 1000,
        top: Platform.OS === 'ios' ? 64 : 69,
        left: 0,
        right: 0,
        height: Platform.OS === 'ios' ? winHeight - 64 : winHeight - 69,
        ...this.centerFlex,
      },
    };
  }

  // 全局列表页错误页面样式
  static get loading() {
    return {
      container: {
        flex: 1,
        backgroundColor: this.colors.white,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        ...this.rowCenterFlex,
      },
    };
  }

  // 全局列表页错误页面样式
  static get errorListPage() {
    return {
      container: {
        flex: 1,
        backgroundColor: this.colors.background,
        position: 'absolute',
        zIndex: 2000,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        ...this.rowCenterFlex,
      },
      errorTC: {
        marginVertical: 20,
      },
      btnC: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: this.colors.primary,
        borderRadius: 3,
      },
      btnT: {
        ...this.text(this.fonts.sizeBtnT, this.colors.white),
        ...this.textProps,
      },
    };
  }

  // 模块网络访问错误样式
  static get errorArea() {
    return {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: this.colors.background,
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 60,
        height: 40,
      },
      titleC: {
        marginTop: this.margins.pageMargin,
      },
    };
  }

  // 模块空数据样式
  static get emptyArea() {
    return {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: this.colors.background,
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 60,
        height: 40,
      },
      titleC: {
        marginTop: this.margins.pageMargin,
      },
    };
  }

  // 列表页面空数据列表区块的样式
  static get emptyListDataArea() {
    return {
      container: {
        height: 500,
        backgroundColor: this.colors.backgroundColor,
        ...this.centerFlex,
      },
    };
  }

  // 吸底按钮样式
  static get bottomBtn() {
    return {
      container: {
        width: this.winWidth,
        height: 49,
        backgroundColor: this.colors.primary,
        ...this.centerFlex,
      },
      btnT: {
        fontSize: this.fonts.sizeTitle,
        color: this.colors.white,
      },
    };
  }

  // 悬浮按钮样式
  static get floatBtn() {
    return {
      container: {
        ...this.pageMargins,
        width: this.winWidth - this.margins.pageMargin * 2,
        height: 39,
        backgroundColor: this.colors.primary,
        ...this.centerFlex,
        borderRadius: 3,
      },
      btnT: {
        fontSize: this.fonts.sizeTitle,
        color: this.colors.white,
      },
    };
  }

  // 线框按钮
  static get lineBtn() {
    return {
      container: {
        width: 100,
        height: 39,
        backgroundColor: this.colors.white,
        ...this.centerFlex,
        borderRadius: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: this.colors.main,
      },
      btnT: {
        ...this.textFont.normalT,
      },
      activeT: {
        color: this.colors.primary,
      },
      activeC: {
        borderColor: this.colors.primary,
      },
    };
  }

  // 次级线框按钮
  static get subLineBtn() {
    return {
      container: {
        width: 80,
        height: 28,
        backgroundColor: this.colors.white,
        ...this.centerFlex,
        borderRadius: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: this.colors.main,
      },
      btnT: {
        ...this.textFont.summaryT,
      },
      activeT: {
        color: this.colors.primary,
      },
      activeC: {
        borderColor: this.colors.primary,
      },
    };
  }

  // 无边框
  static get noBorder() {
    return {
      borderWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
    };
  }

  // ScrollableTabView默认样式
  static get scrollableTV() {
    return {
      container: {
        height: 44,
        backgroundColor: this.colors.white,
        ...this.rowFlex,
      },
      itemC: {
        flex: 1,
        ...this.centerFlex,
      },
      itemT: {
        ...this.textFont.normalT,
      },
      activeC: {
        borderBottomWidth: 2,
        borderBottomColor: this.colors.primary,
        flex: 1,
        ...this.centerFlex,
        paddingTop: 2,
      },
      activeT: {
        color: this.colors.primary,
      },
    };
  }

  // 条件工具条
  static get conditionBar() {
    return {
      container: {
        height: 44,
        backgroundColor: this.colors.white,
        ...this.rowFlex,
        ...this.bottomBorder,
      },
      barC: {
        flex: 1,
        ...this.rowCenterFlex,
      },
      barT: {
        ...this.text(13, this.colors.main),
        ...this.textProps,
        paddingRight: 5,
      },
      barActiveT: {
        color: this.colors.primary,
      },
      listC: {
        position: 'absolute',
        top: 44,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 3000,
        backgroundColor: 'rgba(0,0,0,.3)',
        flex: 1,
      },
      listItemC: {
        backgroundColor: this.colors.white,
        ...this.pagePaddings,
      },
      itemC: {
        height: 44,
        ...this.bottomBorder,
        ...this.rowNFSBFlex,
      },
      itemT: {
        ...this.text(13, this.colors.main),
        ...this.textProps,
      },
      itemActiveT: {
        color: this.colors.primary,
      },
    };
  }
}
