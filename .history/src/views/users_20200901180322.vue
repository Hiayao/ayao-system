<template>
  <div class="users_All">
    <div class="box">
      <div class="search">
        <el-input placeholder="请输入搜索内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" @click="addUsers">添加用户</el-button>
      </div>

      <el-dialog title="添加用户" :visible.sync="dialogVisible">
        <el-form :model="forms" :rules="rule" ref="forms">
          <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
            <el-input v-model="forms.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
            <el-input type="password" v-model="forms.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth" prop="emails">
            <el-input v-model="forms.emails" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth" prop="mobile">
            <el-input v-model="forms.mobile" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="sureAdd">添 加</el-button>
        </div>
      </el-dialog>

      <el-table :data="userList" style="width: 100%" stripe border>
        <el-table-column label="#" width="80">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.num }}</span>
          </template>
        </el-table-column>

        <el-table-column label="姓名" width="130">
          <template slot-scope="scope">
            <span>{{scope.row.username}}</span>
          </template>
        </el-table-column>

        <el-table-column label="角色" width="130">
          <template slot-scope="scope">
            <span>{{scope.row.role_name}}</span>
          </template>
        </el-table-column>

        <el-table-column label="电话" width="130">
          <template slot-scope="scope">
            <span>{{scope.row.mobile}}</span>
          </template>
        </el-table-column>

        <el-table-column label="邮箱" width="180">
          <template slot-scope="scope">
            <span>{{scope.row.email}}</span>
          </template>
        </el-table-column>

        <el-table-column label="状态" width="80">
          <template slot-scope="scope">
            <span>
              <el-switch
                v-model="scope.row.mg_state"
                active-color="#409EFF"
                inactive-color="#DCDFE6"
                @change='changeState(scope.row)'
              ></el-switch>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="编辑角色" placement="top">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                type="primary"
                icon="el-icon-edit"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除角色" placement="top">
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                type="danger"
                icon="el-icon-delete"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="分配角色" placement="top">
              <el-button
                size="mini"
                @click="handlePlan(scope.$index, scope.row)"
                type="warning"
                icon="el-icon-setting"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth" prop="tel">
            <el-input v-model="form.tel" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sureEdit('form')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      input3: "",
      tableData: [],
      pagenum: 1, //请求数据的页码
      pagesize: 10, //请求数据每一页显示的条数
      query: "", //查询参数
      dialogFormVisible: false, //修改用户的弹框
      dialogVisible: false, //添加用户的弹框
      id: "", //用户id
      form: {
        name: "",
        email: "",
        tel: "",
        //上面三个是修改里面的v-model，下面四个是添加里的
      },
      forms: {
        username: "",
        password: "",
        emails: "",
        mobile: "",
      },
      formLabelWidth: "80px",
      rules: {
        email: [{ type: "email", message: "格式不正确", trigger: ["blur"] }],
        tel: [
          {
            pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
            message: "手机号格式不对",
            trigger: ["blur"],
          },
        ],
      },
      rule: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
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
        emails: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { type: "email", message: "格式不正确", trigger: ["blur"] },
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
            message: "手机号格式不对",
            trigger: ["blur"],
          },
        ],
      },
    };
  },
  methods: {
    ...userActions([
      "getUsersList",
      "getUsersEdit",
      "getUsersDelete",
      "addUser",
      "state",
    ]),

    handleEdit(index, row) {
      //点击编辑
      console.log(index, row);
      this.dialogFormVisible = true;
      this.form.name = row.username;
      this.form.email = row.email;
      this.form.tel = row.mobile;
      this.id = row.id;
    },
    handleDelete(index, row) {
      //点击删除
      console.log(index, row);
      this.getUsersDelete({
        id: row.id,
        pagenum: this.pagenum,
        pagesize: this.pagesize,
        query: this.query,
      });
    },
    handlePlan(index, row) {
      //点击分配
      console.log(index, row);
    },
    //确认修改用户信息
    sureEdit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false;
          this.getUsersEdit({
            id: this.id,
            email: this.form.email,
            mobile: this.form.tel,
            pagenum: this.pagenum,
            pagesize: this.pagesize,
            query: this.query,
          });
        } else {
          //  this.$message.error('请输入完整信息');
          return false;
        }
      });
    },
    //打开添加用户弹出框
    addUsers() {
      this.dialogVisible = true;
    },
    //确定添加用户
    sureAdd() {
      this.$refs.forms.validate((valid) => {
        if (valid) {
           this.dialogVisible = false;
          this.addUser({
            username: this.forms.username,
            password: this.forms.password,
            email: this.forms.emails,
            mobile: this.forms.mobile,
            pagenum: this.pagenum,
            pagesize: this.pagesize,
            query: this.query,
          });
        } else {
          //  this.$message.error('请输入完整信息');
          return false;
        }
      });
    },
    //更改用户状态
    changeState(e,row){
      console.log(row);
      // this.state({
      //   uId:this.id
      // })
    },
  },
  mounted() {
    this.getUsersList({
      pagenum: this.pagenum,
      pagesize: this.pagesize,
      query: this.query,
    });
  },
  watch: {},
  computed: {
    ...userState(["userList"]),
  },
};
</script>

<style scoped lang='scss'>
.box {
  width: 1020px;
  height: 500px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  box-shadow: 0 0px 5px 2px rgb(226, 226, 226);
  margin: 10px 0 0 10px;
  padding: 10px;
}
.input-with-select {
  width: 300px;
  margin-right: 20px;
}
.search {
  margin-bottom: 20px;
}
</style>