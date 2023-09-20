<template>
    <el-row :gutter="20" style="box-sizing: border-box; margin-right: 0px;">
        <el-col :span="4" :offset="3">
            <ul class="menus is-always-shadow" @mouseleave="hideDetail">
                <li @mouseenter="showDetail(index)" v-for="(category,index) in categories1" :key="index">{{category.categoryName}}</li>
            </ul>
        </el-col>
        <el-col :span="13" style="position: relative;">
            <el-carousel height="430px" :interval="5000" arrow="always">
                <el-carousel-item v-for="(image,index) in imageList" :key="index">
                    <el-image :src="'http://localhost:8080/image/'+image.imgUrl"></el-image>
                </el-carousel-item>
                
            </el-carousel>
            <div class="detail" @mouseenter="showDetail" @mouseleave="hideDetail" v-show="isShowDetail">
                <div class="detail-item" v-for="(category2,index2) in categories2" :key="index2">
                    <h3 class="title">{{category2.categoryName}}</h3>
                    <div>
                        <el-link @click="toSearch(category3.categoryId)" :underline="false" class="item" v-for="(category3,i) in category2.categoryList" :key="i">
                            {{category3.categoryName}}    
                        </el-link> 
                    </div>
                </div>  
            </div>
        </el-col>
    </el-row>
</template>

<script>
import {getList} from '@/api/category'
import {getImageList} from '@/api/indexImage'
export default {
    data: () => ({
        isShowDetail: false,
        categories1:[], //一级分类
        categories2:[],
        imageList:[]
    }),
    components: {
    },
    methods: {
        showDetail(index) {
            this.isShowDetail = true
            this.categories2 = this.categories1[index].categoryList;
        },
        hideDetail() {
            this.isShowDetail = false
        },
        toSearch(categoryId){
            this.$router.push({
                path:'/search',
                query:{
                  categoryId:categoryId
                }
            })
          // alert(categoryId);
        },
        getCategories:function(){
            let _this = this;
            getList().then(res => {
                // window.console.log(res);
                _this.categories1 = res.data;
            })
            //直接发axios请求
        },
        getIndexImage:function(){
            let _this = this;
            getImageList().then(res =>{
                // window.console.log(res);
                _this.imageList = res.data;
            })
        }
    },
    mounted:function(){
        //页面加载完成调用getCategories查询所有的分类
        this.getCategories();
        //页面加载完成调用getCategories查询所有轮播图
        this.getIndexImage();
    }
}
</script>

<style scoped>
ul.menus.is-always-shadow, .menus.is-hover-shadow:focus, .menus.is-hover-shadow:hover {
    -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
ul.menus {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    overflow: hidden;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    padding: 20px;
}
ul.menus > li {
    padding: 7px 0;
    cursor: pointer;
}
.detail {
    height: 430px;
    background-color: #f6f6f6;
    position:absolute;
    z-index: 9999;
    top: 0;
    width: 100%;
    left: -10px;
    padding: 20px;;
    box-sizing: border-box;
}
.detail .detail-item {
    margin-bottom: 10px;
}
.detail > .detail-item > .title {
    font-weight: 800;
    margin-bottom: 8px;
}
.detail > .detail-item .item {
    margin-right: 8px;
}
.detail > .detail-item .item:hover {
    color: #F56C6C;
}
</style>