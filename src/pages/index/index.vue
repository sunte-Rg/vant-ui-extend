<template>
  <div>
    <van-nav-bar  title="vant-ui 扩展组件库"   />
    <img alt="Vue logo" src="../../assets/logo.gif" class="logo">
    <van-cell-group>
      <router-link :to="{ name:'formVail'}">
        <van-cell title="表单校验组件" value="查看" label="开发中" />
      </router-link>
      <van-cell title="图片上传组件" value="查看" label="待开发" />
    </van-cell-group>
  </div>
</template>

<script>
import VantForm from '@/components/vant-ui-extend/form';

export default {
  name: 'index',
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
  components: {
    VantForm
  }
}
</script>
<style scoped type="less">
  .logo{
    margin:100px auto;
    display: block;
    width:360px;
  }
</style>
