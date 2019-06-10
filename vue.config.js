module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack:{
    devServer:{
      before(app){
        //模拟后台服务器 express
        app.get('/api/login',function(req,res){
          const {username,passwd} = req.query;
          console.log(username,passwd);
          if(username=='jr'&&passwd=='123'){
            res.json({code:1,token:'jilei'});
          }else{
            res.status(401).json({code:0,message:'用户名或密码错误'});
          }
        })
      }
    }
  }
}
