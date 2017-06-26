/**
 * get: {method: 'GET'}
 * save: {method: 'POST'}
 * update: {method: 'PUT'}
 * delete: {method: 'DELETE'}
 */
import * as API from './resources'
// 检测响应状态
function checkStatus(response) {
  if(response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
// 定义全局上下文
let ctx = null;
// 检测数据状态，该方法需要根据实际提供的接口情况做修改
function checkIfOK(response) {
  // !response.ok
  if(!response.ok) {
    return ctx.$message({ message: 'error', type: 'error'});
  }
  // 以下是接口的具体处理方式，这里根据实际接口调整
  const data = response.data;
}

// 处理query
function filterQuery(query) {
  const q = {...query};
  for(const k in q) {
    q[k] === null || (q[k] === '' ? delete q[k] : null);
  }
}

export default {
  // 登录验证
}
