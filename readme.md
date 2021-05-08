# hshUtils


## Installation

In a browser:
```html
<script src="hsh_utils.js"></script>
```

Using npm:
```shell
$ npm i hsh_utils
```
Note: add `--save` if you are using npm < 5.0.0
## Installation

use in Vue
```vue
<script>
  import {  getDaysBetween } from 'hsh_utils'
  export default {
    created() {
      getDaysBetween(new Date('2020-03-02'), new Date('2020-03-04'), '/') // [ '03/02','03/03','03/04' ]
    }
  }
</script>
```
### parseTime
解析时间 
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
```js
  eg: parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s}') //2021-05-03 11:00:00
```

### getDaysBetween
传入开始时间 结束时间  返回这一范围内的根据split格式化后的日期
  * @param {String} type eg: 'data'
  * @param {TimeOject} start eg: new Date('2020-03-02')
  * @param {TimeOject} end eg: new Date('2020-03-04')
  * @param {String} split eg: '/'

 * @returns {Array}  [ '03/02','03/03','03/04' ]
```js
  eg: getDaysBetween(new Date('2020-03-02'), new Date('2020-03-04'), '/') // [ '03/02','03/03','03/04' ]
```
### getMonthsBetween
传入开始时间 结束时间  返回这一范围内的根据split格式化后的月份
  * @param {String} type eg: 'data'
  * @param {TimeOject} start eg: new Date('2020-12-02')
  * @param {TimeOject} end eg: new Date('2021-03-04')
  * @param {String} split eg: '/'

 * @returns {Array}  [ '20-12','21-01','21-02','21-03' ]
```js
  eg: getMonthsBetween(new Date('2020-12-02'), new Date('2021-03-04'), '/') // [ '20-12','21-01','21-02','21-03' ]
```

### getPrevDate
根据入参获取上一天时间 默认 根据当前日期
 * @param {Date} date
 * @param {Sting} format
 * @returns {Date | String}
```js
  eg: getPrevDate(new Date('2021-05-08 12:00:00'), 'YYYY-MM-DD HH:mm:ss') // 2021-05-07 12:00:00
```

### getPrevSevenDate
 往前推六天 默认 根据当前日期
 * @param {Date} date
 * @param {Sting} format
 * @returns {Date | String}
```js
  eg: getPrevSevenDate(new Date('2021-05-08 12:00:00'), 'YYYY-MM-DD HH:mm:ss') // 2021-05-02 12:00:00
```

### getPreveSevenMonth
 往前推六个月 默认 根据当前日期
  * @param {Date} date
  * @param {Sting} format
  * @returns {Date | String}
```js
  eg: getPreveSevenMonth(new Date('2021-05-08 12:00:00'), 'YYYY-MM-DD HH:mm:ss') //  2020-11-08 12:00:00
```
