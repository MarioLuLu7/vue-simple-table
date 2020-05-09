<template>
    <div class="vs-table-box clearfix">
      <!-- 左侧固定 -->
      <div class="vs-table-left">
        <table class="vs-head">
          <tr
            v-for="(vh, vh_ind) in fixed_columns"
            :key="'vh' + vh_ind"
          >
            <td
              v-for="v in vh" 
              :key="v.title" 
              :style="{ width:`${v.width}px`, height: `${headHeight}px`, textAlign: v.titleAlign }"
            >
              <vs-checkbox 
                v-if="v.selection"
                :state="getClass(getAllData())"
                @check="checkBtn(getAllData())"
              ></vs-checkbox>
              <span
                class="vs-title vs-head-title"
                :style="{ lineHeight: `${headHeight}px` }"
                :title="v.showTitle"
              >{{ v.title }}</span>
              <i
                class="vs-sort-icon" 
                :class="getSortClass(v.field)" 
                @click="sortData(v)"
              ></i>
            </td>
          </tr>
        </table>
        <div
          class="vs-scroll-f"
          :style="{ height: `calc(100% - ${fixed_height}px)`, width: `${fixed_width}px` }"
        >
          <div
            class="vs-scroll-content" 
            :style="{ width: `${fixed_width + 17}px` }" @scroll="scrollEventLeft" 
            ref="leftScroll"
          >
            <table 
              class="vs-content" 
              :style="{ height: `${move_height}px` }"
            >
              <tr 
                v-for="(vc, vc_ind) in fixed_data" 
                :key="'vc' + vc_ind"
              >
                <td 
                  v-for="(v, v_ind) in vc" 
                  :key="'vcv' + v_ind" 
                  :style="{ width:`${v.key.width}px`, height: `${rawHeight}px` }"
                >
                  <vs-checkbox
                    :state="getClass(getRawsData(v))"
                    @check="checkBtn(getRawsData(v))"
                  ></vs-checkbox>
                  <span
                  class="vs-title"
                  :style="{ lineHeight: `${rawHeight}px` }"
                >{{ v.val }}</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- 右侧滚动 -->
      <div
        class="vs-table-right"
        :style="{ width: `calc(100% - ${fixed_width}px)` }" 
        ref="rightVSbox"
        @scroll="onLeftBoxScroll"
      >
        <table 
          class="vs-head" 
          :style="{ width: `${move_width}px` }"
        >
          <tr 
            v-for="(vh, vh_ind) in move_columns" 
            :key="'vh' + vh_ind"
          >
            <td 
              v-for="v in vh" 
              :key="v.title" 
              :style="{ width:`${v.width}px`, height: `${headHeight}px`, textAlign: v.titleAlign }"
            >
              <vs-checkbox
                v-if="v.selection"
                :state="getClass(getFieldData(v))"
                @check="checkBtn(getFieldData(v))"
              ></vs-checkbox>
              <span
                class="vs-title vs-head-title"
                :style="{ lineHeight: `${headHeight}px` }"
                :title="v.showTitle"
              >{{ v.title }}</span>
              <i
                class="vs-sort-icon" 
                :class="getSortClass(v.field)" 
                @click="sortData(v)"
              ></i>
            </td>
          </tr>
        </table>
        <div 
          class="vs-scroll-f" 
          :style="{ width: `${move_width}px`,height: `calc(100% - ${fixed_height}px)` }"
        >
          <div 
            class="vs-scroll-content" 
            :style="{ width: `${move_width + 17}px` }" @scroll="scrollEventRight"  
            ref="rightScroll"
          >
            <vs-dragbox @change="onDragChange" @select="onSelectDown">
              <table class="vs-content">
                <tr 
                  v-for="(vc, vc_ind) in move_data" 
                  :key="'vc' + vc_ind"
                >
                  <td 
                    v-for="(v, v_ind) in vc" 
                    :key="'vcv' + v_ind" 
                    :style="{ width:`${v.key.width}px`, height: `${rawHeight}px`}"
                    :id="JSON.stringify(v)"
                    class="vs-select-td-box"
                    :class="{ active: getActiveClass(v) }"
                    @click="clickSingleRaw(v)"
                  >
                    <slot :data="v"></slot>
                  </td>
                </tr>
              </table>
            </vs-dragbox>
          </div>
        </div>
      </div>
      <!-- 模拟滚动条 -->
      <div
        class="vs-scroll-control" 
        :style="{ height: `calc(100% - ${fixed_height}px)`, marginTop: `${fixed_height}px` }"  
        @scroll="scrollEventBar"  
        ref="barScroll"
      >
        <div
          class="vs-scroll-control-inner"
          :style="{ height: `${move_height}px` }"
        ></div>
      </div>
      <!-- 数据范围 -->
      <div class="vs-range-box" v-show="showRange">
        <div class="vs-range-title" :style="{ width: fixed_width + 'px' }">数值范围</div>
        <div
          class="vs-range-box-s"
          :style="{ width: `calc(100% - ${fixed_width}px)` }"
          ref="rangebox"
        >
          <ul
            class="vs-range-ul"
            :style="{width: move_width + 'px'}"
          >
            <li
              class="vs-range-li"
              v-for="(item, index) in ranges"
              :key="'range' + index"
              :style="{ width: item.width + 'px' }"
              :title="item.val"
            >
              <span>{{ item.val || '-' }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>

import perfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import checkbox from './check-box'
import dragbox from './drag-box'
export default {
  name: 'vueSimpleTable',
  components: {
    'vs-checkbox': checkbox,
    'vs-dragbox': dragbox
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    checksData: {
      type: Array,
      default: () => {
        return []
      }
    },
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    rawHeight: {
      type: Number,
      default: 36
    },
    headHeight: {
      type: Number,
      default: 36
    },
    // 单选模式 多选模式
    checkType: {
      type: String,
      default: 'single' // single  many
    },
    showRange: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      now_scroll: null,
      timer: null,
      checks: [],
      sort_key: null,
      reload_table: true,
      isactive_map: {},
      timerout_timer: null
    }
  },
  watch: {
    checks() {
      this.$emit('change', this.checks)
      let map = {}
      this.checks.forEach(item => {
        map[JSON.stringify(item)] = true
      })
      this.isactive_map = map
    },
    checksData() {
      this.checks = this.checksData
    }
  },
  computed: {
    fixed_columns() {
      var temp = []
      this.columns.forEach(item => {
        temp.push(item.filter(ite => ite.isFrozen))
      })
      return temp
    },
    fixed_keys() {
      return this.fixed_columns[this.fixed_columns.length - 1]
    },
    fixed_data() {
      var temp = []
      this.data.forEach(item => {
        const item_arr = []
        this.fixed_keys.forEach(key => {
          item_arr.push({
            data: item,
            key: key,
            val: item[key.field]
          })
        })
        temp.push(item_arr)
      })
      return temp
    },
    move_columns() {
      var temp = []
      this.columns.forEach(item => {
        temp.push(item.filter(ite => !ite.isFrozen))
      })
      return temp
    },
    move_keys() {
      return this.move_columns[this.move_columns.length - 1]
    },
    move_data() {
      var temp = []
      this.data.forEach(item => {
        const item_arr = []
        this.move_keys.forEach(key => {
          item_arr.push({
            data: item,
            key: key,
            val: item[key.field]
          })
        })
        temp.push(item_arr)
      })
      return temp
    },
    fixed_width() {
      let width = 0
      this.fixed_keys.forEach(item => {
        width += item.width
      })
      return width
    },
    fixed_height() {
      return this.fixed_columns.length * this.headHeight
    },
    move_width() {
      let width = 0
      this.move_keys.forEach(item => {
        width += item.width
      })
      return width
    },
    move_height() {
      return this.data.length * this.rawHeight
    },
    data() {
      let temp = JSON.parse(JSON.stringify(this.tableData))
      if (this.sort_key) {
        const key_arr = this.sort_key.split('&')
        let keyx = key_arr[0]
        let sort = Number(key_arr[1])
        let type = key_arr[2]
        temp = temp.sort((a, b) => {
          let x, y
          if (type === 'num') {
            x = isNaN(a[keyx]) ? -Infinity : a[keyx]
            y = isNaN(b[keyx]) ? -Infinity : b[keyx]
          }
          else if (type === 'date') {
            x = new Date(a[keyx]).valueOf()
            y = new Date(b[keyx]).valueOf()
          }
          return (x - y) * sort
        })
      }
      return temp
    },
    // 选择
    check_map() {
      const temp = {}
      this.checks.forEach(item => {
        temp[JSON.stringify(item)] = true
      })
      return temp
    },
    // 全部数据
    all_data() {
      const temp = []
      this.data.forEach(item => {
        for (let key in item) {
          temp.push({
            data: item,
            key: key,
            val: item[key]
          })
        }
      })
      return temp
    },
    // 选择范围
    ranges() {
      let max_min_map = {}
      this.checks.forEach(item => {
        let val = isNaN(item.val) ? null : item.val
        if (!val) { return }
        if (max_min_map[item.key]) {
          let obj = max_min_map[item.key]
          obj.min = obj.min < val ? obj.min : val
          obj.max = obj.max > val ? obj.max : val
        } else {
          max_min_map[item.key] = { max: val, min: val }
        }
      })
      var temp = []
      this.move_columns[this.move_columns.length - 1].forEach(item => {
        let val
        if (max_min_map[item.field]) {
          let obj = max_min_map[item.field]
          val = `${obj.min}~${obj.max}`
        }
        temp.push({
          width: item.width,
          val: val
        })
      })
      return temp
    }
  },
  mounted() {
    this.setScrollbar()
  },
  methods: {
    // 联合滚动
    scrollEventLeft(e) {
      if (this.now_scroll && this.now_scroll !== 'l') return
      this.setAllScrollTop(e.target.scrollTop, 'l')
    },
    scrollEventRight(e) {
      if (this.now_scroll && this.now_scroll !== 'r') return
      this.setAllScrollTop(e.target.scrollTop, 'r')
    },
    scrollEventBar(e) {
      if (this.now_scroll && this.now_scroll !== 'b') return
      this.setAllScrollTop(e.target.scrollTop, 'b')
    },
    setAllScrollTop(val, name) {
      this.now_scroll = name
      clearTimeout(this.timer)
      if (name !== 'l') this.$refs.leftScroll.scrollTop = val
      if (name !== 'r') this.$refs.rightScroll.scrollTop = val
      if (name !== 'b') {
        clearTimeout(this.timerout_timer)
        this.timerout_timer = setTimeout(() => {
          this.$refs.barScroll.scrollTop = val
        }, 100)
      }
      this.timer = setTimeout(() => {
        this.now_scroll = null
      }, 500)
    },
    onLeftBoxScroll(e) {
      this.$refs.rangebox.scrollLeft = e.target.scrollLeft
    },
    setScrollbar() {
      new perfectScrollbar(this.$refs.barScroll)
      new perfectScrollbar(this.$refs.rightVSbox)
    },
    // 选择
    // 获取整行数据
    getRawsData(v) {
      const temp = []
      const key = v.key.field
      const data = v.data
      for (let ke in data) {
        if (key !== ke) {
          temp.push({
            data: data,
            key: ke,
            val: data[ke]
          })
        }
      }
      return temp
    },
    // 获取整列数据
    getFieldData(v) {
      const temp = []
      this.data.forEach(item => {
        temp.push({
          data: item,
          key: v.field,
          val: item[v.field]
        })
      })
      return temp
    },
    //获取全部数据
    getAllData() {
      return this.all_data
    },
    getClass(arr) {
      let temp = []
      arr.forEach(item => {
        if (this.check_map[JSON.stringify(item)]) {
          temp.push(item)
        }
      })
      if (!temp.length) {
        return 'no'
      }
      if (temp.length === arr.length) {
        return 'check'
      } else {
        return 'harf'
      }
    },
    dedupe(array){
      return Array.from(new Set(array))
    },
    checkBtn(arr) {
      const state = this.getClass(arr)
      if (state === 'no' || state === 'harf') {
        this.setChecksAdd(arr)
      } else {
        this.setChecksDel(arr)
      }
    },
    sortData(v) {
      let key = v.field
      let key_arr = []
      if (this.sort_key) {
        key_arr = this.sort_key.split('&')
      }
      let keyx = key_arr.length ? key_arr[0] : ''
      let sort = key_arr.length ? key_arr[1] : ''
      if (key === keyx) {
        if (sort === '-1') {
          sort = '1'
        } else if (sort === '1') {
          this.sort_key = null
          return
        }
      } else {
        keyx = key
        sort = '-1'
      }
      this.sort_key = `${keyx}&${sort}&${v.valType || 'num'}`
    },
    getSortClass(key) {
      let temp = 'vs-default'
      if (this.sort_key) {
        const key_arr = this.sort_key.split('&')
        let keyx = key_arr.length ? key_arr[0] : ''
        let sort = key_arr.length ? key_arr[1] : ''
        if (key === keyx) {
          if (sort === '-1') {
            temp = 'vs-down'
          } else if (sort === '1') {
            temp = 'vs-up'
          }
        }
      }
      return temp
    },
    // 手动拖动滚动条
    onDragChange(e) {
      const width = this.$refs.rightVSbox.clientWidth
      const height = this.$refs.rightScroll.clientHeight
      const scrollL = this.$refs.rightVSbox.scrollLeft
      const scrollT = this.$refs.rightScroll.scrollTop
      const maxScrollL = this.move_width - width
      const maxScrollH = this.move_height - height
      if (e.ew > (width + scrollL)) {
        this.$refs.rightVSbox.scrollLeft = (e.ew - width) < maxScrollL ? e.ew - width : maxScrollL
      }
      if (e.eh > (height + scrollT)) {
        this.$refs.rightScroll.scrollTop = (e.eh - height) < maxScrollH ? e.eh - height : maxScrollH
      }
      if (e.ew < scrollL) {
        this.$refs.rightVSbox.scrollLeft = e.ew > 0 ? e.ew : 0
      }
      if (e.eh < scrollT) {
        this.$refs.rightScroll.scrollTop = e.eh > 0 ? e.eh : 0
      }
    },
    // 选择完毕区域
    onSelectDown(e) {
      if (e.sw === e.ew && e.sh === e.eh) {
        return
      }
      const doms = document.getElementsByClassName('vs-select-td-box')
      const arr = []
      for (let i = 0; i < doms.length; i++) {
        const left = doms[i].offsetLeft
        const top = doms[i].offsetTop
        const width = doms[i].clientWidth
        const height = doms[i].clientHeight
        let sw = e.sw, ew = e.ew, sh = e.sh, eh = e.eh
        if (e.sw > e.ew) {
          sw = e.ew
          ew = e.sw
        }
        if (e.sh > e.eh) {
          sh = e.eh
          eh = e.sh
        }
        if (sw < left + width && ew > left && sh < top + height && eh > top) {
          const obj = JSON.parse(doms[i].id)
          obj.key = obj.key.field
          arr.push(obj)
        }
      }
      this.setChecksAdd(arr)
    },
    setChecksAdd(arr) {
      if (this.checkType === 'single') {
        this.checks = []
      }
      let checks = JSON.parse(JSON.stringify(this.checks))
      arr.forEach(item => {
        if (!this.isactive_map[JSON.stringify(item)]) {
          checks.push(item)
        }
      })
      this.checks = checks
    },
    setChecksDel(arr) {
      let arr_map = {}
      arr.forEach(item => {
        arr_map[JSON.stringify(item)] = true
      })
      this.checks = this.checks.filter(item => {
        return !arr_map[JSON.stringify(item)]
      })
    },
    clickSingleRaw(v) {
      let v_temp = JSON.parse(JSON.stringify(v))
      v_temp.key = v_temp.key.field
      let arr = [v_temp]
      let state = false
      if (this.checkType === 'many') {
        this.checks.filter(item => {
          if (JSON.stringify(item) === JSON.stringify(v_temp)) {
            state = true
          }
        })
      }
      if (state) {
        this.setChecksDel(arr)
      } else {
        this.setChecksAdd(arr)
      }
    },
    getActiveClass(v) {
      let v_temp = JSON.parse(JSON.stringify(v))
      v_temp.key = v_temp.key.field
      let key = JSON.stringify(v_temp)
      return this.isactive_map[key]
    }
  }
}
</script>

<style lang="scss">
.clearfix:after{
  content: "";
  display: block;
  height: 0;
  clear:both;
  visibility: hidden;
}
.clearfix{
  *zoom: 1;
}
.vs-table-box {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select:none;
  -khtml-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none;
  table{
    border: 0;
    border-spacing: 0;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .ps__rail-x{
    z-index: 99;
  }
  .ps__rail-y{
    z-index: 99;
  }
  .vs-table-left {
    float: left;
    height: 100%;
    .vs-head{
      td{
        padding-left: 20px;
      }
    }
    .vs-content{
      td{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        display: inline-block;
        padding-left: 20px;
      }
      .vs-title{
        font-size: 14px;
        margin: 0 3px;
        color: #444;
      }
    }
  }
  .vs-table-right {
    float: left;
    overflow-y: hidden;
    overflow-x: auto;
    height: 100%;
    position: relative;
  }
  .vs-scroll-content {
    overflow: hidden;
    overflow-y: auto;
    height: 100%;
  }
  td{
    display: inline-block;
  }
  .vs-scroll-control{
    width: 13px;
    overflow-y:auto;
    position: absolute;
    right: 0;
    .vs-scroll-control-inner{
      width: 1px;
    }
  }
  .vs-scroll-f{
    overflow: hidden;
  }
  .vs-title{
    text-align: center;
    vertical-align: middle;
    margin-left: 3px;
  }
  .vs-head{
    background: #F1F4F6;
  }
  .vs-content tr:nth-child(2n-1) {
    background: #E6EAED;
  }
  .vs-content tr:nth-child(2n) {
    background: #F1F4F6;
  }
}
.vs-check{
  background: url('https://static.easyicon.net/preview/115/1154570.gif') no-repeat center;
}
.vs-no-check{
  background: url('https://static.easyicon.net/preview/109/1098083.gif') no-repeat center;
}
.vs-harf-check{
  background: url('https://static.easyicon.net/preview/109/1098082.gif') no-repeat center;
}
.vs-sort-icon{
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  cursor: pointer;
  background: url('https://static.easyicon.net/preview/109/1098082.gif') no-repeat center;
}
.vs-head-title{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: calc(100% - 46px);
  color: #999999;
  font-size: 14px;
  margin: 0 3px;
}

.vs-range-box{
  height: 36px;
  box-shadow:0px -2px 4px 0px rgba(201,201,201,0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;
  overflow: hidden;
  .vs-range-box-s{
    overflow-x: auto;
    float: left;
  }
  .vs-range-title{
    float: left;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #444;
    text-align: center;
  }
  .vs-range-ul{
    height: 49px;
  }
  li{
    list-style: none;
    float: left;
  }
  .vs-range-li span {
    display: block;
    margin: 6px 13px;
    background: #F1F4F6;
    counter-reset: #444;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
  }
}

</style>