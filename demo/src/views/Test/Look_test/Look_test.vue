<template>
    <div class="look_test">
        <el-header class="main-header">查看试题</el-header>

        <div class="main" style="background:#f0f2f5">
            <div class="header-list">
                <div class="header-list-top">
                    <div class="header-list-top-left">课程类型：</div>
                    <div class="header-list-top-right">
                        <span @click="click_all">All</span>
                        <span v-for="(item,index) in courseArr" :key="index" @click="clk_span(item)">{{item.subject_text}}</span>
                    </div>
                </div>
                <div class="header-list-bottom">
                    <span>考试类型：</span>
                    <Select :data="examType" type="exam_name" @select_res="select_exam_res"></Select>

                    <span style="marginLeft:25px">题目类型：</span>
                    <Select :data="questionType" type="questions_type_text" @select_res="select_questions_res"></Select>

                    <el-button type="primary" icon="el-icon-search" @click="clk_search">查询</el-button>
                </div>
            </div>

            <div class="content-list">
                <List v-for="(item,index) in questionAll" :key="index" :item="item" :index="index"></List>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import Select from '../Add_test/component/Select'
import List from './components/List'
export default {
    props:{

    },
    components:{
        Select,
        List
    },
    data(){
        return {
            obj:{}
        }
    },
    computed:{
        ...mapState('test',['courseArr','examType','questionType','questionAll'])
    },
    methods:{
        ...mapActions('test',['get_test_all','get_filter_test']),
        //考试类型选择后返回的值
        select_exam_res(val){
            this.obj.exam_id = val.exam_id;
        },
        // 题目类型选择后返回的值
        select_questions_res(val){
            this.obj.questions_type_id = val.questions_type_id;
        },
        //点击课程类型
        clk_span(item){
            this.obj.subject_id = item.subject_id;
        },
        //点击课程类型 All
        click_all(){
            delete this.obj.subject_id;
        },
        //点击查询
        clk_search(){
            this.get_filter_test(this.obj);
        }
    },
    created(){
        this.get_test_all();
    },
    mounted(){

    }
}
</script>
<style lang="scss">
    .look_test{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .header-list{
            height: 200px;
            background: rgb(255, 255, 255);
            padding: 24px;
            font-size: 14px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }

        .header-list-top{
            flex: 1;
            padding: 5px;
            display: flex;

            .header-list-top-left{
                flex: 1;
            }

            .header-list-top-right span{
                margin-right: 30px;
                margin-bottom: 20px;
                display: inline-block;
                font-size: 11px;
                color: #aaa;
            }
            .header-list-top-right span:hover{
                color: #0139fd;
            }

            .header-list-top-right{
                flex: 9;
            }
        }

        .header-list-bottom{
            flex: 1;

            .el-button{
                width: 140px;
                margin-left: 50px;
                background: #0139fd;
            }
        }

        .content-list{
            margin-top:20px;
            background: rgb(255, 255, 255);
            padding: 24px;
            font-size: 14px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }
    }

</style>
<style lang="scss" scope>
    .el-input{
        width: 130px;
    }
</style>