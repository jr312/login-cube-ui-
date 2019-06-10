<!--  -->
<template>
  <div class='about'> 
    <div id="pie" ref="pie"></div>
    <div id="lan" ref="lan"></div>
    <div id="line" ref="line"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name:'About',
  data () {
    return {

    };
  },
  mounted(){
    this.pieView();
    this.lanView();
    this.lineView();
  },
  methods: {
    pieView(){
      let pie=echarts.init(document.getElementById('pie'));
      pie.setOption({
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            y:'bottom',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '50%',
                center: ['50%', '45%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      })
    },
    lanView(){
      let lan=echarts.init(document.getElementById('lan'));
      lan.setOption({
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
      })
    },
    lineView(){
      let line=echarts.init(document.getElementById('line'));
      line.setOption({
          title: {
              text: '折线图堆叠'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              orient: 'horizontal',
              x: 'center',
              y:'bottom',
              data:['邮件营销','联盟广告','视频广告']
          },
          grid: {
              left: '3%',
              right: '4%',
              top: '15%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330, 410]
              }
          ]
      })
    }
  }
}

</script>
<style scoped>
#pie,#lan,#line{
  width: 100%;
  height: 300px;
  margin-bottom: 5px;
}

</style>
