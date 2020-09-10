<template>
  <div class="login_All">
    <div class="box flex jc ac">
      <el-card class="box-card">
        <div slot="header" class="clearfix tac fw6">
          <span>欢迎来到ayao后台管理系统</span>
        </div>
        <div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="请输入用户名" prop="username">
              <el-input v-model="ruleForm.username" clearable></el-input>
            </el-form-item>
            <el-form-item label="请输入密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off" clearable></el-input>
            </el-form-item>
            <div class="ps">特别提醒: 如果您是管理员,请使用管理员账号登录,如果不知道账号,请联系公司人事。</div>
            <!-- <div class="btn flex jc ac"> -->
            <el-form-item class="btn flex jc">
              <el-button type="primary" @click="login">立即登录</el-button>
            </el-form-item>
            <!-- </div> -->
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {},
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.el-input {
  width: 80% !important;
}
.btn {
  margin-top: 20px;
}
.ps {
  font-size: 12px;
}
.box {
  background-image: url("../image/bizhi.jpg");
  background-size: 1200px;
  height: 100vh;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  font-size: 24px;
}
.box-card {
  width: 490px;
}
</style>