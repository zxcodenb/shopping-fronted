<template>
    <div>
        <Header></Header>
        <search-bar></search-bar>
        <el-divider></el-divider>
        <div>
            <el-row type="flex" style="margin-top: 15px;">
                <el-col class="goods-show" :offset="3" :span="18">
                    <el-card :body-style="style" v-for="(product,index) in productList" :key="index">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image">
                        <div style="padding: 8px 14px;">
                            <span>{{product.productName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>累计销量：{{product.soldNum}}</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ product.createTime }}</time>
                                <el-button type="text" size="small" @click="toDetail(product.productId)">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
         <el-divider></el-divider>
          <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Index/Header'
    import SearchBar from '@/components/Index/SearchBar'
    import Footer from '@/components/Index/Footer'
    import {getProductList} from "@/api/Product";

    export default {
       components: {
        Header,
        SearchBar,
        Footer
      },
      data(){
        return{
            categoryId:1,
            productList:[]
        }
      },
      methods:{
        toDetail:function(productId){
            this.$router.push({
                path:'/detail',
                query:{
                    productId
                }
            })
        },
        //获取后端的  商品数据
        selectProducts:function(){
            let _this = this;
          getProductList(this.categoryId).then(res =>{
                 window.console.log(res);
                _this.productList = res.data.records;

            })
        }

      },
      mounted:function(){
           this.categoryId = this.$route.query.categoryId;
           this.selectProducts();
      }
    }
</script>

<style scoped>
    .el-card {
        height: 320px;
    }
    .goods-show {
        display: flex;
        gap: 10px;
        flex-flow: row wrap;
    }
</style>