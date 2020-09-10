<template>
  <div>
    <div class="box">
      <ug-table
        :tableData="sortList"
        :columns="columns"
        :showPagination="false"
        :type="type"
        :border="true"
        :stripe="true"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
      >
      <el-tree :data="sortList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <template v-slot:action="scope">
          <el-tag v-if="scope.scope.row.cat_level ===0">一级</el-tag>
          <el-tag type="success" v-if="scope.scope.row.cat_level ===1">二级</el-tag>
          <el-tag type="warning" v-if="scope.scope.row.cat_level ===2">三级</el-tag>
        </template>
      </ug-table>
    </div>
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
          width: "280",
        },
        {
          label: "排序",
          align: "center",
          width: "180",
        },
      ],
      type:'',
      types: '1',
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