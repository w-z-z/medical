/*
 * @Description: 接口错误统一处理文件
 * @Author: chenwei
 * @Date: 2019-06-05 17:22:57
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 15:50:47
 */

export default error => {
  // 错误处理
  // console.log(error)

  return Promise.reject(error)
}