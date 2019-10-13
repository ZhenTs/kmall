/**
 * HttpUtil
 * 2017/11/30
 * 作者:郭凯
 */

export default {
  async sendPostJSON(postProps) {
    try {
      let response = await timeout_fetch(
        fetch(postProps.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Accept: 'application/json',
            Authorization: postProps.userToken
              ? 'Bearer ' + postProps.userToken
              : '',
          },
          body: postProps.body,
        }),
        postProps.timeout,
      );
      // let response = await fetch(postProps.url, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json;charset=UTF-8',
      //     Accept: 'application/json',
      //     Authorization: postProps.userToken
      //       ? 'Bearer ' + postProps.userToken
      //       : '',
      //   },
      //   body: postProps.body,
      // });
      let responseText = await response.text();
      responseText =
        responseText == null || responseText == 'null' ? null : responseText;
      return {message: responseText, code: response.status};
    } catch (error) {
      return error;
    }
  },
  async sendGetJSON(getProps) {
    try {
      let response = await timeout_fetch(
        fetch(getProps.url, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Accept: 'application/json',
            Authorization: getProps.userToken
              ? 'Bearer ' + getProps.userToken
              : '',
          },
        }),
        getProps.timeout,
      );
      // let response = await fetch(getProps.url, {
      //   headers: {
      //     'Content-Type': 'application/json;charset=UTF-8',
      //     Accept: 'application/json',
      //     Authorization: getProps.userToken
      //       ? 'Bearer ' + getProps.userToken
      //       : '',
      //   },
      // });
      let responseText = await response.text();
      responseText =
        responseText == null || responseText == 'null' ? null : responseText;
      return {message: responseText, code: response.status};
    } catch (error) {
      return error;
    }
  },
};

function timeout_fetch(fetch_promise, timeout = 10000) {
  let timeout_fn = null;

  //这是一个可以被reject的promise
  let timeout_promise = new Promise(function(resolve, reject) {
    timeout_fn = function() {
      reject({code: 10000, message: '网络请求超时'});
    };
  });

  //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
  let abortable_promise = Promise.race([fetch_promise, timeout_promise]);

  setTimeout(function() {
    timeout_fn();
  }, timeout);

  return abortable_promise;
}
