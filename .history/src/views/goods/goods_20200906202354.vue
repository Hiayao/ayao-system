<template>
  <div>
    <div class="box">
      <div class="search">
        <el-input placeholder="请输入搜索内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <ug-table
          :tableData="goodsList"
          :columns="columns"
          :showPagination="false"
          :type="type"
          :border="true"
          :stripe="true"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
          <template v-slot:action="scope">
            <el-button type="primary" size="mini" @click="edit(scope.scope)" icon="el-icon-edit"></el-button>
            <el-button type="danger" size="mini" @click="del(scope.scope)" icon="el-icon-delete"></el-button>
          </template>
        </ug-table>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[20, 40, 80, 120]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const GoodsModule = createNamespacedHelpers("goods");
const { mapState: goodsState, mapActions: goodsActions } = GoodsModule;
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
          label: "商品名称",
          prop: "goods_name",
          align: "center",
          width: "370",
        },
        {
          label: "商品价格",
          prop: "goods_price",
          align: "center",
          width: "120",
        },
        {
          label: "商品重量",
          prop: "goods_weight",
          align: "center",
          width: "120",
        },
        {
          label: "创建时间",
          prop: "add_time",
          align: "center",
          width: "110",
        },
        {
          label: "下单时间",
          prop: "upd_time",
          align: "center",
          width: "110",
        },
        {
          label: "操作",
          align: "center",
        },
      ],
      type: "",
      pagenum: 1,
      pagesize: 20,
    };
  },
  methods: {
    ...goodsActions(["getGoods"]),

    edit(scope) {
      console.log(scope.row);
    },
    del(scope) {
      console.log(scope.row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.getGoods({
        pagenum: this.pagenum,
        pagesize: this.pagesize,
        query: '',
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagenum = val;
      this.getGoods({
        pagenum: this.pagenum,
        pagesize: this.pagesize,
        query: '',
      });
    },
  },
  mounted() {
    this.getGoods({
      query: "",
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
  },
  watch: {},
  computed: {
    ...goodsState(["goodsList", "total"]),
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