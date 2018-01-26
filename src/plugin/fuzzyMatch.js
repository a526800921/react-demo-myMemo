/*
 * @Author: Jafish 
 * @Date: 2018-01-26 13:47:16 
 * @Last Modified by: Jafish
 * @Last Modified time: 2018-01-26 13:49:46
 * @Readme: 模糊匹配，返回成功匹配次数
 */
const fuzzyMatch = (search = '', matchStr = '', config = {} ) => {
   // search ： 要匹配的字符串
   // matchStr ： 被匹配的字符串
   // openSearchFilter ： 是否开启search非中文、英文、数字过滤，默认开启
   // openMatchStrFilter ： 是否开启matchStr非中文、英文、数字过滤，默认开启
   if (typeof search !== 'string' || typeof matchStr !== 'string') throw new Error('search or matchStr expect is String')
   if (config.openSearchFilter === undefined) config.openSearchFilter = true
   if (config.openMatchStrFilter === undefined) config.openMatchStrFilter = true
   
   let strReg = /[^\w\d\u4e00-\u9fa5]/g // 非中文、英文、数字匹配
   
   let searchValue = config.openSearchFilter ? search.toLocaleLowerCase().replace(strReg, ',').split(',').filter(member => member) : [search]// 匹配数组
   if (config.openMatchStrFilter) matchStr = matchStr.replace(strReg, '').toLocaleLowerCase()

   let successCount = 0 // 成功匹配次数 
   for (let i = 0; i < searchValue.length; i++) {
      matchStr.includes(searchValue[i]) && ++successCount
   }

   return successCount
}

export default fuzzyMatch