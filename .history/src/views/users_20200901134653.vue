<template>
  <div class="users_All">
    <div class="box">
      <div class="search">
        <el-input placeholder="请输入搜索内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary">添加用户</el-button>
      </div>

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
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth" required>
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth" required>
            <el-input v-model="form.tel" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
      pagenum: 1,  //请求数据的页码
      pagesize: 10,//请求数据每一页显示的条数
      query: "",  //查询参数
      dialogFormVisible: false, 
      form: {
          name: '',
          email: '',
          tel:'',
        },
        formLabelWidth: '80px'
    };
  },
  methods: {
    ...userActions(["getUsersList"]),

    handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true
      this.form.name = row.username
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handlePlan(index, row) {
      console.log(index, row);
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