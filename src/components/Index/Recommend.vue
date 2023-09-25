<template>
  <el-row type="flex" style="margin-top: 15px;">
    <el-col class="goods-show" :offset="3" :span="18">
      <el-card :body-style="style" v-for="(recommend,index) in recommendList" :key="index">
        <img :src="'http://localhost:8080/image/'+recommend.url" class="image">
        <div style="padding: 8px 14px;">
          <span>{{recommend.productName}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" size="small">操作按钮</el-button>
          </div>
        </div>
      </el-card>
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
          // window.console.log(res.data);
          // alert(res.data[0].productImg.url);
          _this.recommendList =res.data;
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