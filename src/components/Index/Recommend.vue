<template>
  <el-row type="flex" style="margin-top: 15px;">
    <el-col class="goods-show" :offset="3" :span="18">
      <el-card :body-style="style" v-for="(recomend,index) in recommendList" :key="index">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
             class="image">
        <div style="padding: 8px 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" size="small">操作按钮</el-button>
          </div>
        </div>
      </el-card>

<!--      <span class="demonstration">页数较少时的效果</span>-->
<!--      <el-pagination class="center-align"-->
<!--          layout="prev, pager, next"-->
<!--          :total="50">-->
<!--      </el-pagination>-->
    </el-col>

  </el-row>

</template>

<script>

import {getRecommendList} from "@/api/getRecommendList";
export default {
  data: () => ({
    currentDate: '2012-12-12',
    style: {padding: '0px', width: '213px'},
    recommendList:[]
  }),
  methods: {
    getRecommend:function (){
      let _this = this;
      getRecommendList().then(res =>{
          _this.recommendList = res.data();
      })
    }
  },
  mounted:function (){
    this.getRecommend();
  }
}
</script>

<style scoped>
/deep/ .el-card {
  height: 296px;
}

.goods-show {
  display: flex;
  gap: 10px;
  flex-flow: row wrap;
}
.center-align {
  display: flex;
  justify-content: center;
}


</style>