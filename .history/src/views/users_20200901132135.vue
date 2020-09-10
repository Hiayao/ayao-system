<template>
  <div>
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
              <el-button  size="mini" @click="handleEdit(scope.$index, scope.row)">上边</el-button>
            </el-tooltip>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      pagenum: 1,
      pagesize: 10,
      query: "",
    };
  },
  methods: {
    ...userActions(["getUsersList"]),

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
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