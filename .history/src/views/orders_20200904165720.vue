<template>
  <div>
    <div class="box">
      <div class="search">
        <el-input placeholder="请输入搜索内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <ug-table
          :tableData="ordersList"
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
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const ordersModule = createNamespacedHelpers("orders");
const { mapState: ordersState, mapActions: ordersActions } = ordersModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      input3: "",
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
      type: "expand",
    };
  },
  methods: {
    ...ordersActions(["getOrders"]),

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
  mounted() {
    this.getOrders({
      query:'',
      pagenum:'1',
      pagesize:10,
      user_id:'',
      pay_status:'',
      is_send:'',
      order_fapiao_title:'',
      order_fapiao_company:'',
      order_fapiao_content:'',
      consignee_addr:'',
    });
  },
  watch: {},
  computed: {
    ...ordersState(["ordersList"]),
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
.input-with-select {
  width: 300px;
  margin-right: 20px;
}
</style>