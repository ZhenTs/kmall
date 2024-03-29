import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './Actions';

const options = {
  fromRef: true,
};

export default function connectComponent({
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  LayoutContainer,
}) {
  return connect(
    mapStateToProps ||
      function(state) {
        return {};
      },
    mapDispatchToProps ||
      function(dispatch) {
        return {
          actions: bindActionCreators(actions, dispatch),
        };
      },
    mergeProps,
    options,
  )(LayoutContainer);
}
