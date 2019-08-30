<template>
    <div class="user_show">
        <el-header class="main-header">用户展示</el-header>
        
        <div class="main">
            <div class="header-list">
                <span :class="{active:ind==index}" @click="clk_span(index)" v-for="(item,index) in headerArr" :key="index">{{item.title}}</span>
            </div>

            <!-- 用户数据 -->
             <el-table v-if="ind === 0" stripe fit 
                :data="arr"
                style="width: 100%">
                <el-table-column
                    prop="user_name"
                    label="用户名"
                    >
                </el-table-column>
                <el-table-column
                    prop="user_pwd"
                    label="密码"
                    >
                </el-table-column>
                <el-table-column
                    align="right"
                    prop="identity_text"
                    label="身份">
                </el-table-column>
            </el-table>

            <!-- 身份数据 -->
            <el-table v-if="ind === 1" stripe fit 
                :data="arr"
                style="width: 100%">
                <el-table-column
                    prop="identity_text"
                    label="身份名称"
                    >
                </el-table-column>
                <el-table-column
                    prop="identity_id"
                    label="ID"
                    >
                </el-table-column>
            </el-table>

            <!-- api接口权限 -->
            <el-table v-if="ind === 2" stripe fit 
                :data="arr"
                style="width: 100%">
                <el-table-column
                    prop="api_authority_text"
                    label="api权限名称"
                    >
                </el-table-column>
                <el-table-column
                    prop="api_authority_url"
                    label="api权限url"
                    >
                </el-table-column>
                <el-table-column
                    prop="api_authority_method"
                    label="api权限方法"
                    >
                </el-table-column>
            </el-table>

            <!-- 身份和api接口关系 -->
            <el-table v-if="ind === 3" stripe fit 
                :data="arr"
                style="width: 100%">
                <el-table-column
                    prop="identity_text"
                    label="身份名称"
                    >
                </el-table-column>
                <el-table-column
                    prop="api_authority_text"
                    label="api权限名称"
                    >
                </el-table-column>
                <el-table-column
                    prop="api_authority_url"
                    label="api权限url"
                    >
                </el-table-column>
                <el-table-column
                    prop="api_authority_method"
                    label="api权限方法"
                    >
                </el-table-column>
            </el-table>

            <!-- 视图接口权限 -->
            <el-table v-if="ind === 4" stripe fit 
                :data="arr"
                style="width: 100%">
                <el-table-column
                    prop="view_authority_text"
                    label="视图权限名称"
                    >
                </el-table-column>
                <el-table-column
                    prop="view_id"
                    label="视图id"
                    >
                </el-table-column>
            </el-table>

            <!-- 身份和视图权限关系 -->
            <el-table v-if="ind === 5" stripe fit 
                :data="arr"
                style="width: 100%">
                <el-table-column
                    prop="identity_text"
                    label="身份"
                    >
                </el-table-column>
                <el-table-column
                    prop="view_authority_text"
                    label="视图名称"
                    >
                </el-table-column>
                <el-table-column
                    prop="view_id"
                    label="视图id"
                    >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import api from '@/api/index'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            ind:0,
            headerArr:[
                {
                    title:'用户数据'
                },
                {
                    title:'身份数据'
                },
                {
                    title:'api接口权限'
                },
                {
                    title:'身份和api接口关系'
                },
                {
                    title:'视图接口权限'
                },
                {
                    title:'身份和视图权限关系'
                }
            ],
            arr:[],
            apiArr:['user_show','identity','api_authority','identity_api','view_authority','identity_view']
        }
    },
    computed:{

    },
    methods:{
        clk_span(index){
            this.ind = index;
            api[this.apiArr[index]]().then(res=>{
                if(res.code === 1){
                    this.arr = res.data;
                    console.log(res.data);
                }
            })
        }
    },
    created(){
        api.user_show().then(res=>{
            if(res.code === 1){
                this.arr = res.data;
            }
        })
    },
    mounted(){

    }
}
</script>
<style lang="scss">
    .user_show{

        .header-list{
            font-size: 13px;
            margin-bottom: 20px;

            span{
                border: 1px solid #ccc;
                padding: 7px 17px;
                cursor: pointer;
            }

            .active{
                border-color:  #0139FD;
                color:  #0139FD;
            }
        }
    }
</style>