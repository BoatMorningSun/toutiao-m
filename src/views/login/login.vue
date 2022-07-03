<template>
  <div>
      <van-nav-bar 
    class="page-nav-bar" title="登录" />    

  <!-- 手机密码 -->
  <van-form @submit="onSubmit"  >
  <van-field
    v-model="username"
    name="用户名"
    left-icon='phone-o'
    placeholder="输入手机号"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
  <van-field  
    v-model="password"
    type="password"
    name="验证码"
    left-icon="comment-o"
    
    placeholder="输入验证码"
    :rules="[{ required: true, message: '请填写验证码' }]"

  > <div slot="button" class="yanzhengmabox" ><van-button type="primary" class="yanzhengma" size="small">发送验证码</van-button> </div>  </van-field>  
  <div style="margin: 16px;">
    <van-button   block type="info" native-type="submit">登录</van-button>
  </div>
 
</van-form>
  </div>
</template>

<script>
export default {
  name: "loginPage",
    data() {
    return {
      username: '',
      password: '',
      }
    },
    methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },

}
</script>

<style scoped  >
 .yanzhengma{
   margin-left: 10px;
    
 }
.yanzhengmabox{
   border-left: 1px solid rgb(136, 136, 136);
}
</style>>
 

 
 