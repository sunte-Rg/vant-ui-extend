<template>
  <div id="app" v-cloak >
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left',
    }
  },
  components: {

  },
  watch: {
    $route(to, from) {
      this.transitionName = to.path === '/' ? '' : 'slide-left'; // 首页就不需要动画了

      if (to.path === this.formPath) {
        // 返回上一页(如果是两个页面相互跳转，就会存在问题，此时建议使用  router.go(-1) )
        this.transitionName = 'slide-right';
        this.formPath = '';
      } else {
        window.scrollTo(0, 0); // 由于缓存，需要手动重置滚动条
        this.formPath = from.path; // 记录页面来自哪个页面
      }
    }
  }
}
</script>

<style>

  [v-cloak] {
    display: none;
  }
  * {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  @supports (bottom: env(safe-area-inset-bottom)) {
    body {
      padding-bottom: env(safe-area-inset-bottom) !important;
      background: #fff;
    }
  }
  /*路由切换动画*/
  .child-view {
    width: 100%;
    transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    position: absolute;
    top: 0px;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(-20px, -5px);
    transform: translate(-20px, -5px);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(30px, 5px);
    transform: translate(30px, 5px);
  }
</style>
