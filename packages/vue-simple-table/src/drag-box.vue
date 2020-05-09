<template>
  <div class="vs-drag-box" v-indrag>
    <slot></slot>
    <div class="fack-drag" v-if="fack_show"></div>
    <div class="vs-drag-inner-box" v-if="drag_show" ref="inner" :style="drag_css"></div>
  </div>
</template>

<script>
export default {
  name: 'drag-box',
  data() {
    return {
      sw: 0,
      sh: 0,
      ew: 0,
      eh: 0,
      drag_show: false,
      fack_show: false
    }
  },
  computed: {
    drag_css() {
      const temp = {
        left: (this.sw < this.ew ? this.sw : this.ew) + 'px',
        top: (this.sh < this.eh ? this.sh : this.eh) + 'px',
        width: Math.abs(this.sw - this.ew) + 'px',
        height: Math.abs(this.sh - this.eh) + 'px'
      }
      return temp
    },
    fd() {
      return {
        sw: this.sw,
        sh: this.sh,
        ew: this.ew,
        eh: this.eh
      }
    }
  },
  watch: {
    ew() {
      this.$emit('change', this.fd)
    },
    eh() {
      this.$emit('change', this.fd)
    }
  },
  directives: {
    indrag: {
      // 指令的定义
      bind: function (el, v, vnode) {
        const self = vnode.context
        el.onmousedown = e => {
          //算出鼠标相对页面的位置
          let disX = e.layerX
          let disY = e.layerY
          document.onmousemove = e => {
            self.fack_show = true
            let p = self.getElementPos(el)
            self.sw = disX
            self.sh = disY
            self.ew = e.pageX - p.x
            self.eh = e.pageY - p.y
            self.drag_show = true
          }
          document.onmouseup = e => {
            document.onmousemove = null
            document.onmouseup = null
            self.drag_show = false
            self.fack_show = false
            self.$emit('select', self.fd)
            let p = self.getElementPos(el)
            self.sw = e.pageX - p.x
            self.sh = e.pageY - p.y
            self.ew = e.pageX - p.x
            self.eh = e.pageY - p.y
          }
        }
      }
    }
  },
  methods: {
    isFElement(dom, class_name) {
      if (dom.className.indexOf(class_name) > -1) {
        return true
      } else  if (dom.nodeName === 'BODY') {
        return false
      } else {
        return this.isFElement(dom.parentElement, class_name)
      }
    },
    getElementPos(el) {
    if(el.parentNode === null || el.style.display == 'none') {  return false;}     
      var parent = null
      var pos = []
      var box
      if(el.getBoundingClientRect){     //IE
        box = el.getBoundingClientRect()
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)
        return {x:box.left + scrollLeft, y:box.top + scrollTop}
      
      } else {
        pos = [el.offsetLeft, el.offsetTop]
        parent = el.offsetParent
        if (parent != el) {
          while (parent) { 
            pos[0] += parent.offsetLeft
            pos[1] += parent.offsetTop
            parent = parent.offsetParent
          } 
        }  
      }  
      return {x:pos[0], y:pos[1]}
    }   
  }
}
</script>

<style lang="scss" scoped>
.vs-drag-box{
  position: relative;
  .vs-drag-inner-box{
    border: 1px solid #3286BA;
    background: rgba(49, 133, 184, 0.4);
    position: absolute;
  }
  .fack-drag{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
}
</style>