import { getTime } from '../lib/utils.js'
import { getPrevDate } from '../lib/utils.js'
import { getPreveSevenMonth } from '../lib/utils.js'

import { getPrevSevenDate } from '../lib/utils.js'

console.log('~~~~~', getTime());
console.log('~~~~~', getPrevDate(new Date('2021-05-08 12:00:00'), 'YYYY-MM-DD HH:mm:ss'))
console.log('~~~~~', getPrevSevenDate(new Date('2021-05-08 12:00:00'), 'YYYY-MM-DD HH:mm:ss'))
console.log('~~~~~', getPreveSevenMonth(new Date('2021-05-08 12:00:00'), 'YYYY-MM-DD HH:mm:ss'))
