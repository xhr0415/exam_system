<template>
    <div class="add_test">
        <el-header class="main-header">添加试题</el-header>

        <div class="main">
            <h2>题目信息</h2>
            <h2>题干</h2>
            <el-input placeholder="请输入题目标题，不超过20个字" v-model="topic"></el-input>
            
            <!-- 题目主题 -->
            <div class="theme">
                <p>题目主题</p>
                <Editor :val="content_value" @editor_change="content_change"></Editor>
            </div>

            <!-- 选择类型 -->
            <div class="type">
                <p>请选择考试类型：</p>
                <Select :data="examType" type="exam_name" @select_res="select_exam_res"></Select>

                <p>请选择课程类型：</p>
                <Select :data="courseArr" type="subject_text" @select_res="select_course_res"></Select>

                <p>请选择题目类型：</p>
                <Select :data="questionType" type="questions_type_text" @select_res="select_topic_res"></Select>
            </div>

            <!-- 答案信息 -->
            <div class="answer">
                <h2>答案信息</h2>
                <Editor :val="answer_value" @editor_change="answer_change"></Editor>
            </div>

            <el-button type="primary" @click="clk_btn">提交</el-button>
        </div> 
    </div>
</template>
<script>
import Editor from '@/components/Editor.vue'
import Select from './component/Select'
import api from '@/api/index'
import {mapState} from 'vuex'
export default {
    props:{

    },
    components:{
       Editor,
       Select
    },
    data(){
        return {
            topic:' ',   //题干
            exam_type_val:'',   //考试类型
            course_type_val:'', //课程类型
            topic_type_val:'',  //题目类型
            content_value:' ',
            answer_value:' '
        }
    },
    computed:{
        ...mapState('test',['examType','courseArr','questionType'])
    },
    methods:{
        //考试类型的返回结果
        select_exam_res(data){
            this.exam_type_val = data;
        },
        // 课程类型的返回结果
        select_course_res(data){
            this.course_type_val = data;
        },
        // 题目类型的返回结果
        select_topic_res(data){
            this.topic_type_val = data;
        },
        //题目主题发生改变
        content_change(val){
            this.content_value = val;
        },
        //答案信息发生改变
        answer_change(val){
            this.answer_value = val;
        },
        //点击提交
        clk_btn(){
            let userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
            let {exam_type_val,course_type_val,topic_type_val} = this; 
            if(exam_type_val !== '' && course_type_val !== '' && topic_type_val !==''){
                api.exam_questions({
                    user_id: userinfo.user_id,                                  //用户id
                    questions_stem: this.content_value,                         //内容
                    questions_type_id: topic_type_val.questions_type_id,        //题目类型
                    subject_id: course_type_val.subject_id,                     //课程类型
                    exam_id: exam_type_val.exam_id,                             //考试类型
                    title: this.topic,                                          //题干
                    questions_answer: this.answer_value,
                }).then(res=>{
                    if(res.code === 1){
                        this.$message({
                            showClose: true,
                            message: res.msg,
                            type: 'success'
                        });

                        this.topic = '';        //清空
                        this.content_value = '';
                        this.answer_value = '';

                    }
                })
            }
        },
    },
    created(){
       
    },
    mounted(){

    }
}
</script>
<style lang="scss">
    .add_test{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        h2{
            margin: 10px 0;
        }

        .el-input{
            width: 500px;
        }

        .theme{
            margin: 30px 0;
        }
        
        .type{

            .el-input{
                width: 200px;
                margin:10px 0;
                margin-bottom: 30px;
            }
        }

        .answer{
            font-size: 18px;
        }

        .el-button{
            margin: 10px;
        }
    }

</style>