<!-- login -->
<template>
  <div class='login'> 
      <cube-form
        :model="model"
        :schema="schema"
        @submit="handleLogin"
        @validate="haneldValidate"
      ></cube-form>
  </div>
</template>

<script>
export default {
  name:'login',
  data () {
    return {
        model: {
            username:'',
            passwd:''
        },
        schema:{
            fields: [//表单结构定义（用数据来定义）
                {
                    type: 'input',
                    modelKey: 'username',
                    label:'用户名',
                    props: {
                    placeholder:'请输入用户名'
                    },
                    rules: {//校验规则
                    required: true
                    },
                    trigger: 'blur'
                },{
                    type: 'input',
                    modelKey: 'passwd',
                    label:'密码',
                    props: {
                    type:'password',
                    placeholder:'请输入密码',
                    eye:{
                        open:false
                    }
                    },
                    rules: {
                    required: true
                    },
                    trigger: 'blur'
                },{
                    type: 'submit',
                    label:'登录'
                }
            ]
        }
    };
  },
  components: {},
  computed: {},
  methods: {
      handleLogin(e){
          e.preventDefault();
          this.$store.dispatch('login',this.model).then(code=>{
                if(code){
                    //登陆成功
                    const path=this.$route.query.redirect || '/';
                    this.$router.push(path);
                }
            }).catch(error=>{
                //有错误发生或者登录失败
                const toast = this.$createToast({
                    time:2000,
                    txt: error.message || error.response.data.message || '登录失败',
                    type: 'error'
                });
                toast.show();
            })
      },
      haneldValidate(ret){
          console.log(ret); 
      }
  }
}

</script>
<style lang='' scoped>
</style>