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
            <el-tag v-if="scope.scope.row.order_pay === '0'" type="danger">已付款</el-tag>
            <el-tag v-else type="warning">未付款</el-tag>
          </template>
          <template v-slot:action="scope">
            <el-button type="primary" size="mini" @click="edit(scope.scope)" icon="el-icon-edit"></el-button>
            <el-button type="success" size="mini" @click="del(scope.scope)" icon="el-icon-truck"></el-button>
          </template>
        </ug-table>
      </div>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
          label: "#",
          prop: "num",
          align: "center",
          width: "50",
        },
        {
          label: "订单编号",
          prop: "order_number",
          align: "center",
          width: "180",
        },
        {
          label: "订单价格",
          prop: "order_price",
          align: "center",
          width: "120",
        },
        {
          label: "是否付款",
          prop: "order_pay",
          align: "center",
          slots: "state",
          width: "120",
        },
        {
          label: "是否发货",
          prop: "is_send",
          align: "center",
          width: "100",
        },
        {
          label: "下单时间",
          prop: "create_time",
          align: "center",
          width: "180",
        },
        {
          label: "操作",
          align: "center",
        },
      ],
      type: "",
      pagenum: 1,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    ...ordersActions(["getOrders"]),

    edit(scope) {
      console.log(scope.row);
      this.dialogFormVisible = true;
    },
    del(scope) {
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
      query: "",
      pagenum: this.pagenum,
      pagesize: "20",
      user_id: "",
      pay_status: "",
      is_send: "",
      order_fapiao_title: "",
      order_fapiao_company: "",
      order_fapiao_content: "",
      consignee_addr: "",
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
  margin-bottom: 15px;
}
</style>