<template>
  <div class="form-container">
    <van-nav-bar title="表单校验扩展组件"   left-text="返回"   left-arrow @click-left="back"  />
    <van-field
      v-model="form.voucherUrl"
      label="需配置接口"
      label-align="left">
      <template slot="input">
        <van-uploader :after-read="onRead">
          <van-button
            icon="photo"
            type="primary"
            size="small"
            :loading="uploadLoading">上传图片</van-button>
        </van-uploader>
      </template>
    </van-field>
     <div
      class="preview-cont"
      @click="methodPreviewPic">
      <!-- <img class="preview" :src="voucherUrl"> -->
      <van-image
        v-if="voucherUrl"
        show-error
        :src="voucherUrl"/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'fileUpload',
  data() {
    return {
      form: {},
      uploadLoading: false,
      voucherUrl: null, // 图片url
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    /* 图片预览 */
    methodPreviewPic() {
      this.callImagePreview([this.form.voucherUrl])
    },
    /* 文件选择回调 */
    onRead(file) {
      // 校验文件类型
      const a = file.file.type.indexOf('image') > -1
      if (!a) {
        this.$notify('请上传图片类型文件！')
        return false
      }
      this.uploadLoading = true // 按钮loading
      // 处理头部
      let params = new FormData() // 创建form对象
      params.append('file', file.file)
      axios.post(`/h5/oss/upload?inclient=${!!sessionStorage.getItem('device')}`, params, {
        headers: { // 添加请求头
          // Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.uploadLoading = false // 按钮loading
        this.voucherUrl = data.fileUrl
        this.form = Object.assign(this.form, { voucherUrl: data.fileUrl })
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>