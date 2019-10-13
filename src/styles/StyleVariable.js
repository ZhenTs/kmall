/**
 * 样式变量定义
 * 2017/10/3
 * 作者:郭凯
 */

export default class StyleVariable {
  static get colors() {
    return {
      primary: '#d6332a',
      white: '#ffffff',
      border: '#dddddd',
      main: '#222222',
      subMain: '#666666',
      summary: '#999999',
      sperate: '#f1f1f1',
      background: '#f1f1f1',
    };
  }

  static get fonts() {
    return {
      sizeLarge: 24,
      sizeAreaTitle: 20,
      sizeNavTitle: 18,
      sizeTitle: 16,
      sizeBtnT: 15,
      sizeNormal: 14,
      sizeSummary: 12,
      sizeMini: 11,
      sizeIconT: 10,
    };
  }

  static get margins() {
    return {
      pageMargin: 16,
      textMargin: 10,
    };
  }

  // 常用字体颜色配套
  static text(fs, c) {
    return {
      fontSize: fs,
      color: c,
    };
  }

  // 容器默认高度
  static get height() {
    return {
      loading: {
        minHeight: 200,
      },
      height50: {
        minHeight: 50,
      },
      height100: {
        minHeight: 100,
      },
      height150: {
        minHeight: 150,
      },
      height200: {
        minHeight: 200,
      },
    };
  }
}
