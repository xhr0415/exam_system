<template>
    <div class="addUser">
        <el-header class="main-header">添加用户</el-header>
        <div class="main">
            <div class="addUser-main">
                <!-- 添加用户 -->
                <div>
                    <el-tabs v-model="activeName" type="card" class="addUser-tab">
                        <el-tab-pane label="添加用户" name="first">
                            <el-input v-model="addUserInput1" placeholder="请输入用户名"></el-input>
                            <el-input v-model="addUserInput2" placeholder="请输入密码"></el-input>
                            <el-select
                                v-model="addUserInput3"
                                placeholder="请选择身份id"
                                class="addUser-select"
                            >
                                <el-option
                                    v-for="item in user_identity"
                                    :key="item.identity_id"
                                    :label="item.identity_text"
                                    :value="item.identity_id"
                                ></el-option>
                            </el-select>
                            <div class="userButton">
                                <el-button type="primary" class="addUser-sure" @click="userAdd">确定</el-button>
                                <el-button @click="reset1">重置</el-button>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="更新用户" name="second ">
                            <el-select
                                v-model="updateValue"
                                placeholder="请选择身份id"
                                class="addUser-select"
                            >
                                <el-option
                                    v-for="item in user_show"
                                    :key="item.user_id"
                                    :label="item.user_name"
                                    :value="item.user_id"
                                ></el-option>
                            </el-select>
                            <el-input v-model="updateUserInput" placeholder="请输入用户名"></el-input>
                            <el-input v-model="updatePwdInput" placeholder="请输入密码"></el-input>
                            <el-select
                                v-model="updateIdInput"
                                placeholder="请选择身份id"
                                class="addUser-select"
                            >
                                <el-option
                                    v-for="item in user_identity"
                                    :key="item.identity_id"
                                    :label="item.identity_text"
                                    :value="item.identity_id"
                                ></el-option>
                            </el-select>
                            <div class="userButton">
                                <el-button
                                    type="primary"
                                    class="addUser-sure"
                                    @click="userUpdata"
                                >确定</el-button>
                                <el-button @click="reset2">重置</el-button>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <!-- 添加身份 -->
                <div>
                    <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                        <el-tab-pane label="添加身份" name="first">
                            <el-input v-model="addIdentityInput" placeholder="请输入身份名称"></el-input>
                            <div class="userButton">
                                <el-button
                                    type="primary"
                                    class="addUser-sure"
                                    @click="userAddIndent"
                                >确定</el-button>
                                <el-button @click="reset3">重置</el-button>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <!-- 添加api接口权限 -->
                <div>
                    <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                        <el-tab-pane label="添加api接口权限" name="first">
                            <el-input v-model="addApiNameInput" placeholder="请输入api接口权限名称"></el-input>
                            <el-input v-model="addApiUrlInput" placeholder="请输入api接口权限url"></el-input>
                            <el-input v-model="addApiMethodInput" placeholder="请输入api接口权限方法"></el-input>
                            <div class="userButton">
                                <el-button
                                    type="primary"
                                    class="addUser-sure"
                                    @click="userAuthorityApiEdit"
                                >确定</el-button>
                                <el-button @click="reset4">重置</el-button>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <!-- 添加视图接口权限 -->
                <div>
                    <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                        <el-tab-pane label="添加视图接口权限" name="first">
                            <el-select
                                v-model="addViewValue"
                                placeholder="请选择已有视图"
                                class="addUser-select"
                            >
                                <el-option
                                    v-for="item in getAuthority"
                                    :key="item.identity_view_authority_relation_id"
                                    :value="item.view_authority_text"
                                ></el-option>
                            </el-select>
                            <div class="userButton">
                                <el-button
                                    type="primary"
                                    class="addUser-sure"
                                    @click="userAuthorityViewEdit"
                                >确定</el-button>
                                <el-button @click="reset5">重置</el-button>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <!-- 给身份设置api接口权限 -->
                <div>
                    <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                        <el-tab-pane label="给身份设置api接口权限" name="first">
                            <el-select
                                v-model="userIdValue"
                                placeholder="请选择身份id"
                                class="addUser-select"
                            >
                                <el-option
                                    v-for="item in user_identity"
                                    :key="item.identity_id"
                                    :label="item.identity_text"
                                    :value="item.identity_id"
                                ></el-option>
                            </el-select>
                            <el-select
                                v-model="apiValue"
                                placeholder="请选择api接口权限"
                                class="addUser-select"
                            >
                                <el-option
                                    v-for="item in api_arr"
                                    :key="item.api_authority_id"
                                    :label="item.api_authority_text"
                                    :value="item.api_authority_id"
                                ></el-option>
                            </el-select>
                            <div class="userButton">
                                <el-button
                                    type="primary"
                                    class="addUser-sure"
                                    @click="userSetIdentityApi"
                                >确定</el-button>
                                <el-button @click="reset6">重置</el-button>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <!-- 给身份设置视图权限 -->
                <div>
                    <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                        <el-tab-pane label="给身份设置视图权限" name="first">
                            <el-select
                                v-model="userViewValue"
                                placeholder="请选择身份id"
                                class="addUser-select"
                            >
                                <el-option
                                    v-for="item in user_identity"
                                    :key="item.identity_id"
                                    :label="item.identity_text"
                                    :value="item.identity_id"
                                ></el-option>
                            </el-select>
                            <el-select
                                v-model="viewIdValue"
                                placeholder="请选择视图权限id"
                                class="addUser-select"
                            >
                                <el-option
                                    v-for="item in getAuthority"
                                    :key="item.identity_view_authority_relation_id"
                                    :label="item.view_authority_text"
                                    :value="item.view_id"
                                ></el-option>
                            </el-select>
                            <div class="userButton">
                                <el-button
                                    type="primary"
                                    class="addUser-sure"
                                    @click="userSetIdentityView"
                                >确定</el-button>
                                <el-button @click="reset7">重置</el-button>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions ,mapState} from "vuex";
import api from '@/api/index'

export default {
  props: {},
  components: {},
  data() {
    return {
      activeName: "first",
      activeName2: "first",
      addUserInput1: "",
      addUserInput2: "",
      addUserInput3: "",
      updateUserInput: "",      //更新  用户名
      updatePwdInput: "",       //更新  密码
      updateIdInput: "",        //更新  身份id
      addIdentityInput: "",     //添加身份
      addApiUrlInput: "",
      addApiNameInput: "",
      addApiMethodInput: "",
      value: "",
      updateValue: "",          //用户id
      valueUserId: "",
      addViewValue: "",
      userIdValue: "",
      apiValue: "",
      viewIdValue: "",
      userViewValue: ""
    };
  },
  computed: {
      ...mapState('user',['user_identity','user_show','api_arr'])
  },
  methods: {
      ...mapActions('user',['getUser','add_user','update_user']),
    userAdd() {
        this.add_user({
            user_name: this.addUserInput1,
            user_pwd: this.addUserInput2,
            identity_id: this.addUserInput3
        });
      this.addUserInput1 = "";
      this.addUserInput2 = "";
      this.addUserInput3 = "";
    },
    reset1() {
      this.addUserInput1 = "";
      this.addUserInput2 = "";
      this.addUserInput3 = "";
    },
    //更新用户  点击确定
    userUpdata() {
        this.update_user({
            user_id: this.updateValue,
            user_name: this.updateUserInput,
            user_pwd: this.updatePwdInput,
            identity_id: this.updateIdInput
        });
    },
    reset2() {
      this.updateUserInput = "";
      this.updatePwdInput = "";
      this.updateIdInput = "";
      this.updateValue = "";
    },
    //添加身份
    userAddIndent() {
        api.add_identity({
            identity_text: this.addIdentityInput   
        }).then(res=>{
            this.$message({
                showClose: true,
                message: res.msg,
                type: 'success'
            });
        })
    },
    reset3() {
      this.addIdentityInput = "";
    },
    // 添加api接口权限  确定
    userAuthorityApiEdit() {
        api.add_authorityApi({
            api_authority_text: this.addApiNameInput,
            api_authority_url: this.addApiUrlInput,
            api_authority_method: this.addApiMethodInput
        }).then(res=>{
            this.$message({
                showClose: true,
                message: res.msg,
                type: 'success'
            });
        })
    },
    reset4() {
      this.addApiNameInput = "";
      this.addApiUrlInput = "";
      this.addApiMethodInput = "";
    },
    // 添加视图接口权限
    userAuthorityViewEdit() {
        let arr = this.getAuthority;
        let val = arr.find(item=>item.view_authority_text === this.addViewValue)
        api.add_authorityApi({
            view_authority_text: val.view_authority_text,
            view_id: val.view_id
        }).then(res=>{
           this.$message({
                showClose: true,
                message: res.msg,
                type: 'success'
            });
        })
    },
    reset5() {
      this.addViewValue = "";
    },
    // 给身份设置api接口权限  确定
    userSetIdentityApi() {
        api.setIdentityApi({
            identity_id: this.userIdValue,
            api_authority_id: this.apiValue
        }).then(res=>{
           this.$message({
                showClose: true,
                message: res.msg,
                type: 'success'
            });
        })
    },
    reset6() {
      this.userIdValue = "";
      this.apiValue = "";
    },
    //给身份设置视图权限
    userSetIdentityView() {
        api.setIdentityView({
            identity_id:this.userViewValue,
            view_authority_id:this.viewIdValue
        }).then(res=>{
            this.$message({
                showClose: true,
                message: res.msg,
                type: 'success'
            });
        })
    },
    reset7() {
      this.userViewValue = "";
      this.viewIdValue = "";
    }
  },
  created() {
      this.getUser();

      let viewArr = JSON.parse(sessionStorage.getItem('arr'));
      this.getAuthority = viewArr;
  },
  mounted() {}
};
</script>
<style  lang="scss">
.addUser {
  display: flex;
  line-height: 30px;
  flex-direction: column;
  h3 {
    font-size: 20px;
    font-weight: normal;
    text-align: left;
    height: 60px;
    line-height: 60px;
    margin-bottom: 20px;
  }
}

.addUser-main {
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 30%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10px;
    flex-shrink: 0;
    .el-tabs__header {
      width: 100%;
      height: 40px;

      div {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
      }
    }
  }
}
.addUser-row {
  display: flex;
}

.addUser-select {
  margin: 10px 15px;
  width: 200px;
  display: block;
  display: flex;
  align-items: center;
  .el-input {
    width: 100%;
    height: 34px;
    background: #fff;
    position: relative;
  }
}
.addUser-sure {
  width: 100px;
  margin-top: 10px;
  margin-left: 10px;
}

.el-tab-pane {
  width: 200px;
  > .el-input {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  > .addUser-select {
    margin: 10px 0;
    width: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 3px;
    > div {
      display: flex;
      align-items: center;
    }
  }
  .userButton {
    height: 60px;
    display: flex;
    align-items: center;
    margin: 10px 15px;

    button{
        width: 100px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        margin-left: 10px;
    }

    button:nth-child(2){
        width: 60px;
        background: white;
        border: 1px solid #ccc;
    }
  }
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: #295eff;
  border-color: #295eff;
  border: 1px solid #295eff;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
  outline: 3px solid rgba(1, 57, 253, 0.06);
}
</style>
