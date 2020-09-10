<template>
  <div>
    <div class="box">
      <el-button type="primary" @click="Addrole" class="btn">添加角色</el-button>
      <ug-form
        :Visible.sync="Visible"
        @cancel="cancel"
        @ok="ok"
        :formData="formData"
        :title="title"
      >
        <template v-slot:msg></template>
      </ug-form>
      <ug-table
        :tableData="rolesList"
        :columns="columns"
        :showPagination="false"
        :type="type"
        :border="true"
        :stripe="true"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
      >
        <template v-slot:state="scope">
          <el-switch
            v-model="scope.scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
        <template v-slot:action="scope">
          <el-button type="primary" size="mini" @click="edit(scope.scope)">编辑</el-button>
          <el-button type="danger" size="mini" @click="del(scope.scope)">删除</el-button>
          <el-button type="warning" size="mini" @click="plan(scope.scope)">分配权限</el-button>
        </template>
      </ug-table>

      <el-dialog title="分配权限" :visible.sync="dialogVisible" width="30%">
        <el-tree
          :data="rolesLists"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
        ></el-tree>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const rolesModule = createNamespacedHelpers("roles");
const { mapState: rolesState, mapActions: rolesActions } = rolesModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: 0, //角色的id
      Visible: false,
      dialogVisible: false,
      title: "添加角色",
      formData: [
        {
          label: "角色名",
          // 表单元素的类型
          type: "input",
          // v-model绑定的值
          value: "",
          rule: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            {
              min: 2,
              max: 5,
              message: "长度在 2 到 5 个字符",
              trigger: "blur",
            },
          ],
          prop: "roleName",
          attrs: {
            placeholder: "请输入用户名",
            clearable: true,
          },
        },
        {
          label: "角色描述",
          // 表单元素的类型
          type: "input",
          // v-model绑定的值
          value: "",
          prop: "roleDesc",
        },
      ],
      tableData: [],
      //表格的配置项
      columns: [
        {
          label: "#",
          prop: "num",
          align: "center",
          width: "50",
        },
        {
          label: "职位",
          prop: "roleName",
          align: "center",
          width: "300",
        },
        {
          label: "描述",
          prop: "roleDesc",
          align: "center",
          width: "300",
        },

        {
          label: "操作",
          align: "center",
          width: "180",
        },
      ],
      type: "expand",
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    ...rolesActions(["getRoles", "deleteroles", "getRolesOne", "putRoles"]),

    cancel(val) {
      this.$message.success("点击了取消");
      this.Visible = false;
      console.log(val);
      val.formRef.resetFields();
    },
    ok(val) {
      val.formRef.validate((valid) => {
        if (valid) {
          // this.$message.success("点击了确定");
          this.Visible = false;
          console.log(val);
          val.formRef.resetFields();
          if (this.formData[0].value === "") {
            this.$store.dispatch("roles/Addroles", {
              roleName: val.options.roleName,
              roleDesc: val.options.roleDesc,
            });
          }
          if (this.formData[0].value !== "") {
            console.log(this.id);
            this.putRoles({
              id: this.id,
              roleName: val.options.roleName,
              roleDesc: val.options.roleDesc,
            });
          }
        } else {
          this.$message.error("表单填写有误，请检查");
        }
      });
    },
    Addrole() {
      this.formData[0].value = "";
      this.Visible = true;
      this.title = "添加角色";
    },
    del(scope) {
      console.log(scope.row);
      this.deleteroles(scope.row.id);
    },
    edit(scope) {
      console.log(scope.row);
      this.Visible = true;
      this.title = "编辑角色";
      this.id = scope.row.id;
      let value = scope.row.roleName;
      this.formData[0].value = value;
      console.log(this.formData[0].value);
    },
    plan(scope) {
      console.log(scope.row);
      this.dialogVisible = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {
    this.getRoles();
    console.log(this.tableData);
  },
  watch: {},
  computed: {
    ...rolesState(["rolesList", "RolesOne","rolesLists"]),
  },
};
</script>

<style scoped lang='scss'>
.box {
  width: 1020px;
  height: 480px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  box-shadow: 0 0px 5px 2px rgb(226, 226, 226);
  margin: 10px 0 0 10px;
  padding: 10px;
  overflow: auto;
}
.btn {
  margin-bottom: 15px;
}
</style>