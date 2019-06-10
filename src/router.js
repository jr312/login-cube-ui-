import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/about',
      name: 'about',
      meta:{
        auth:true
      },
      component: () => import('./views/About.vue')
    }
  ]
})

//路由守卫

router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    const token=localStorage.getItem('token');
    if(token){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.path}//回跳about页面
      });
    }
  }else{//不需要登录验证
    next()
  }
})

export default router;