/*
 * @Description:
 * @Author: knight
 * @Date: 2019-09-19 14:06:47
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 18:33:12
 */
/*
 * @Description: 引入所有请求地址
 */

import enterprise from './enterprise'
import person from './person'
import common from './common'

export default [
  ...enterprise, ...person, ...common
]