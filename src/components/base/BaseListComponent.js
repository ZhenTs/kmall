/**
 * 列表页基础类
 * 2017/12/5
 * 作者:郭凯
 */
import React from 'react';
import {
  DeviceEventEmitter,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Loading from '../../components/custom/Loading';
import BaseStyle from '../../styles/BaseStyle';
import BaseImages from '../../conf/resources/BaseImages';
import BaseApis from '../../conf/apis/BaseApis';
import NavigatorBar from '../../components/custom/NavigatorBar';
import Styles from '../../styles';
import Images from '../../conf/resources';
import Constants from '../../conf/constants';
import Apis from '../../conf/apis';
import HelpUtil from '../../utils/base/HelpUtil';
import Utils from '../../utils';
import {ScrollView} from 'react-native-mjrefresh';
import CustomRefreshControl from '../custom/CustomRefreshControl';

export default class BaseFlatListComponent extends React.PureComponent {
  state = {
    isError: false,
    errorMsg: '网络异常',
    dataSource: [],
    isLoaded: false,
    isRefreshing: false,
    isLoadingMore: false,
    isLast: false,
  };

  // 渲染导航条
  _renderNavigator = props => {
    return <NavigatorBar {...props} />;
  };

  keyExtractor = (item: any, index: number) => {
    return index.toString();
  };

  _renderList = () => {
    return (
      <View style={this.styles.container}>
        <FlatList
          ref={ref => {
            this.flatList = ref;
          }}
          data={this.state.dataSource}
          keyExtractor={this.keyExtractor}
          renderItem={this._renderListItem}
          onEndReached={this._onLoadMore}
          removeClippedSubviews={true}
          onEndReachedThreshold={0.1}
          ListHeaderComponent={this._renderListHead}
          ListFooterComponent={this._renderListFoot}
          ListEmptyComponent={this._renderListEmpty}
          onScroll={this._onScroll}
          renderScrollComponent={props => (
            <ScrollView
              style={{flex: 1}}
              refreshControl={
                <CustomRefreshControl
                  ref={ref => (this.refreshControl = ref)}
                  onRefresh={this._onRefresh}
                />
              }
              {...props}
            />
          )}
          {...this._onSetFlatListProps()}
        />
      </View>
    );
  };

  // 渲染列表项
  _renderListItem = data => {
    return (
      <View>
        <Text>定义列表项</Text>
      </View>
    );
  };
  // 渲染列表头
  _renderListHead = () => {
    return <View />;
  };
  // 渲染空页面
  _renderListEmpty = () => {
    return this._renderListEmptyDefault(this.emptyProps);
  };
  // 默认渲染空页面
  _renderListEmptyDefault = props => {
    return (
      <View
        style={[this.styles.emptyListDataArea.container, props && props.style]}>
        <Image
          source={this.images.no_data_area}
          style={this.styles.emptyArea.image}
        />
        <View style={this.styles.emptyArea.titleC}>
          <Text
            style={[this.styles.textFont.summaryST, props && props.textStyle]}>
            {(props && props.noData) || '暂无数据'}
          </Text>
        </View>
      </View>
    );
  };
  // 渲染列表尾
  _renderListFoot = () => {
    if (this.state.isLast) {
      return (
        <View
          style={{
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={this.styles.textFont.miniSummaryT}>
            {'没有更多数据了'}
          </Text>
        </View>
      );
    }
    if (this.state.isLoadingMore) {
      return (
        <View
          style={{
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Loading />
          <Text style={this.styles.textFont.miniSummaryT}>{'正在加载...'}</Text>
        </View>
      );
    }
    return null;
  };

  // 数据加载中
  _renderLoading = () => {
    if (this.state.isLoaded) {
      return null;
    }
    return (
      <View style={this.styles.loading.container}>
        <Loading />
        <Text style={this.styles.textFont.miniSummaryT}> 正在加载....</Text>
      </View>
    );
  };
  // 渲染全局访问异常缺省页
  _renderErrorPage = () => {
    if (!this.state.isError) {
      return null;
    }
    return (
      <View style={this.styles.errorListPage.container}>
        <View style={this.styles.centerFlex}>
          <Image source={this.images.no_network} />
          <View style={this.styles.errorListPage.errorTC}>
            <Text style={this.styles.textFont.normalSummaryT}>
              貌似没有网络,请稍后再试
            </Text>
          </View>
          <TouchableOpacity onPress={this._onErrorPageRefresh}>
            <View style={this.styles.errorListPage.btnC}>
              <Text style={this.styles.errorListPage.btnT}>再试一次</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  // 子页面初始化
  _onLoadData = () => {};
  // 加载更多数据
  _onLoadMore = () => {
    if (
      !this.state.isLast &&
      !this.state.isLoadingMore &&
      this.userData.length > 0
    ) {
      this.setState(
        {
          isLoadingMore: true,
        },
        () => {
          this.pageIndex++;
          this._onLoadData('loadMore');
        },
      );
    }
  };
  // 下拉刷新
  _onRefresh = () => {
    this.setState(
      {
        isRefreshing: true,
      },
      () => {
        this.userData = [];
        this.pageIndex = 1;
        this._onLoadData('refresh');
      },
    );
  };

  // 重新加载
  _onReload = () => {
    this.userData = [];
    this.pageIndex = 1;
    this._onLoadData();
  };

  // 数据加载完毕后页面刷新
  _onServerResp = result => {
    this.userData = this.userData.concat(result);
    if (this.state.isRefreshing) {
      this.refreshControl && this.refreshControl.finishRefresh();
    }
    this.setState({
      dataSource: this.userData,
      isLoaded: true,
      isRefreshing: false,
      isLoadingMore: false,
      isLast: result.length < this.pageSize,
    });
  };
  // 设置缺省页面状态
  _onErrorPage = flag => {
    if (this.token === flag.token) {
      this.setState({
        isError: flag.isError,
        errorMsg: flag.message,
        isLoaded: true,
      });
    } else {
      this.setState({
        isLoaded: true,
        isLast: true,
      });
    }
  };
  // 异常页面重新加载操作
  _onErrorPageRefresh = err => {
    this.setState({
      isLoaded: false,
      isError: false,
    });
    this._onLoadData();
  };

  // 设置FLatlist属性
  _onSetFlatListProps = () => {
    return {};
  };

  _onScroll = () => {};

  constructor(props) {
    super(props);
    this.token = HelpUtil.GUID();
    let page_name =
      props.name && props.name.indexOf('_') >= 0
        ? props.name.substr(1)
        : props.name;
    this.styles =
      props.styles ||
      (page_name
        ? Styles[page_name + 'Style']
          ? Styles[page_name + 'Style']
          : Styles[props.module + 'Style'] || BaseStyle
        : BaseStyle);
    this.images =
      props.images ||
      (props.module
        ? Images[props.module + 'Images'] || BaseImages
        : BaseImages);
    this.constants =
      props.constants ||
      (props.module ? Constants[props.module + 'Constants'] : {});
    this.apis =
      props.apis ||
      (props.module ? Apis[props.module + 'Apis'] || BaseApis : BaseApis);
    this.utils = Utils;
    this.childProps = {
      styles: this.styles,
      images: this.images,
      constants: this.constants,
      apis: this.apis,
      utils: this.utils,
    };
    this.pageIndex = 1;
    this.userData = [];
    this.pageSize = 10;
    this.emptyProps = {
      noData: '暂无数据',
      style: {},
      textStyle: {},
    };
  }

  componentDidMount() {
    this.errorListener = DeviceEventEmitter.addListener(
      'errorPage',
      this._onErrorPage,
    );
    this.pageListener = DeviceEventEmitter.addListener(
      'pageRefresh',
      this._onPageRefresh,
    );
    this._onLoadData();
  }

  componentWillUnmount() {
    this.errorListener && this.errorListener.remove();
    this.pageListener && this.pageListener.remove();
  }

  componentRender() {
    return (
      <View style={this.styles.container}>
        {this._renderLoading()}
        {this._renderErrorPage()}
        {this._renderList()}
      </View>
    );
  }

  render() {
    return <View />;
  }

  // 页面跳转(过滤下带登录的路由)
  _onGoPage(page, param = {}) {
    if (userInfo) {
      Routes[page](param);
    } else {
      Routes.login(param);
    }
  }
}
