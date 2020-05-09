// src/index.js
// 导入组件，组件必须声明 name
import vueSimpleTable from './src/vue-simple-table'

// 为组件提供 install 安装方法，供按需引入
vueSimpleTable.install = function (Vue) {
 Vue.component(vueSimpleTable.name, vueSimpleTable)
}
// 默认导出组件
export default vueSimpleTable