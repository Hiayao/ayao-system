<template>
  <div class="box">
    <el-table
      :data="sortList"
      style="width: 100%"
      row-key="cat_id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="cat_name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const sortModule = createNamespacedHelpers("sort");
const { mapState: sortState, mapActions: sortActions } = sortModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      
      //表格的配置项
      columns: [
        {
          label: "#",
          prop: "num",
          align: "center",
          width: "80",
        },
        {
          label: "分类名称",
          prop: "cat_name",
          align: "center",
          width: "180",
        },
        {
          label: "是否有效",
          prop: "cat_deleted",
          align: "center",
          slots: "state",
          width: "180",
        },
        {
          label: "排序",
          align: "center",
          width: "80",
        },
        {
          label: "操作",
          prop: "cat_deleted",
          align: "center",
          slots: "edit",
          width: "280",
        },
      ],
      type: "",
      types: [1, 2, 3],
      pagenum: 1,
      pagesize: 5,
    };
  },
  methods: {
    ...sortActions(["getCategories"]),

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    edit(scope) {
      console.log(scope.row);
    },
    del(scope) {
      console.log(scope.row);
    },
  },
  mounted() {
    this.getCategories({
      type: this.types,
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
  },
  watch: {},
  computed: {
    ...sortState(["sortList", "total"]),
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
</style>