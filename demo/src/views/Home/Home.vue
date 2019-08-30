<template>
	<div class="home">
		<!-- 头部 -->
		<el-header class="header">
			<div class="logo">
				<img
					src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
					alt="logo"
				>
			</div>
			<div class="user" @mouseover="show_dropdown" @mouseout="hide_dropdown">
				<span class="user_img">
					<img
						src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=400062461,2874561526&fm=26&gp=0.jpg"
						alt="user_img"
					>
				</span>
				<span>{{userinfo.user_name}}</span>

        <!-- 划过显示 -->
        <div class="user_dropdown" @mousemove="show_dropdown" v-if="flag">
            <p>个人中心</p>
            <p>我的班级</p>
            <p>设置</p>
            <p @click="clk_exit_login">退出登录</p>
        </div>
			</div>
		</el-header>

		<el-container class="container">
			<!-- 侧边栏 -->
			<el-aside class="aside" width="200px" style="color:white">
				<el-menu >
					
        <el-submenu :index="index+''" style="color:white" v-for="(item,index) in aside_arr" :key="index">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span v-if="item.type=='test'">试题管理</span>
            <span v-if="item.type=='user'">用户管理</span>
            <span v-if="item.type=='exam'">考试管理</span>
            <span v-if="item.type=='class'">班级管理</span>
          </template>
          
          <el-menu-item-group>
            <el-menu-item v-for="(ele,ind) in item.children" :key="ind" :index="index+'-'+ind" @click="clk_item(ele)">{{ele.title}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
          
				</el-menu>
			</el-aside>

			<!-- 内容 -->
			<el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
			
		</el-container>
	</div>
</template>
<script>
import api from "@/api/index";
import routes1 from '@/router/router1.js'   //管理者
import routes2 from '@/router/router2.js'   //出题者
import routes3 from '@/router/router3.js'   //浏览者
import {mapActions} from 'vuex'

export default {
  props: {},
  components: {},
  data() {
    return {
      userinfo: {},
      aside_arr:[],
      flag:false
    };
  },
  computed: {

  },
  methods: {
    ...mapActions('test',['getType']),
    clk_item(obj){
      this.$router.push({
        name:obj.name
      })
    },

    //划过显示
    show_dropdown(){
      this.flag = true;
    },
    //划过隐藏
    hide_dropdown(){
      this.flag = false;
    },
    //退出登录
    clk_exit_login(){
      this.$router.push('/login')
    }
  },
  created() {
    this.getType();
    api.userinfo().then(res => {
      if (res.data) {
        let routerArr = [];
        this.userinfo = res.data;
        let sess = JSON.parse(sessionStorage.getItem('userinfo'));
        
        if(sess.identity_text === '管理员'){
          routerArr = routes1;
        }
        else if(sess.identity_text === '出题者'){
          routerArr = routes2;
        }
        else{
          routerArr = routes3;
        }

        let {user_id} = this.userinfo;
        //获取视图权限
        api.new(user_id).then(res=>{
          if(res){
            let resArr = res.data;
            sessionStorage.setItem('arr',JSON.stringify(res.data));

            //筛选   大类
            let arr = [];
            routerArr.forEach(ele=>{
              let index = arr.findIndex(item=>{
                return item.type == ele.type;
              });
              if(index<0){
                arr.push({type:ele.type,children:[]})
              }
            })

            //每一个子类  名字
            resArr.forEach(item=>{
              routerArr.forEach(ele=>{
                if(item.view_id == ele.path){
                  ele.title = item.view_authority_text;
                }
              })
            })
            
            // 将子类放到 各自的大类
            arr.forEach(item=>{
              routerArr.forEach(ele=>{
                if(ele.type === item.type){
                  item.children.push(ele);
                }
              })
            })
            this.aside_arr = arr;
            // console.log(arr)
          }
        })
      }
    });
  },
  mounted() {}
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 100%;
    z-index: 10;
    box-shadow: 0 0 10px rgba(0,0,0,.19)!important;

    .logo {
      width: 120px;
      height: 100%;
      margin-left: 50px;
      float: left;
      display: flex;
      align-items: center;

      img {
        width: 100%;
      }
    }

    .user {
      float: right;
      padding: 0 20px;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;

      span {
        margin-right: 10px;
      }

      .user_img {
        display: inline-block;
        width: 32px;
        height: 32px;
        border: 1px solid #ccc;
        border-radius: 50%;
		    overflow: hidden;
		
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

    // 划过
    .user:hover{
      background: #eee;
    }

    //划过显示
    .user_dropdown{
      width: 100px;
      z-index: 20;
      position: absolute;
      top: 60px;
      left: 0;
      background: white;
      border: 1px solid #ccc;
      box-shadow: 0px 0px 10px 5px #ccc;
      font-size: 14px;

      >p{
        padding: 4px 10px;
        cursor: pointer;
      }

      >p:active{
        color: red;
      }
    }
  }

  .container {
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: hidden;

    .aside {
      height: 100%;
      background: #232a41;

      .el-submenu__title:hover {
        color: white;
        background: none;
      }
      .el-menu-item:hover {
        color: white;
      }

      .el-submenu__title {
        color: rgba(255, 255, 255, 0.65);
      }

      .el-menu,
      .el-menu-item {
        background: none;
        color: rgba(255, 255, 255, 0.65);
      }

      .el-menu-item-group__title {
        padding: 0;
      }
    }
  }

  .el-main{
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    overflow-y: auto;
  }
}


  .main-header{
      font-size: 20px;
      display: flex;
      align-items: center;
  }

  .main{
    flex: 1;
    background: white;
    padding: 24px;
    border-radius: 10px;
  }

</style>