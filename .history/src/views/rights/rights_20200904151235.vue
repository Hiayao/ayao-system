<template>
  <div>
    <div class="box">
      <ug-table
        :tableData="tableData"
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          mg_state: true,
        },
        {
          date: "2016-05-04",
          name: "王中虎",
          address: "上海市普陀区金沙江路 1517 弄",
          mg_state: false,
        },
        {
          date: "2016-05-01",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1519 弄",
          mg_state: false,
        },
        {
          date: "2016-05-03",
          name: "王老虎",
          address: "上海市普陀区金沙江路 1516 弄",
          mg_state: true,
        },
      ],
      //表格的配置项
      columns: [
        {
          label: "时间",
          prop: "date",
          align: "center",
        },
        {
          label: "姓名",
          prop: "name",
          align: "center",
        },
        {
          label: "地址",
          prop: "address",
          align: "center",
        },
        {
          label: "状态",
          prop: "mg_state",
          align: "center",
          slots: "state",
        },
        {
          label: "操作",
          align: "center",
        },
      ],
      type: "",
    };
  },
  methods: {
    edit(scope) {
      console.log(scope.row);
    },
    del(scope) {
      console.log(scope.row);
    },
    plan(scope) {
      console.log(scope.row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
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
</style>