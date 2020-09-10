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
      <template v-slot:goodsName="scope">
         <el-tree :data="sortList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </template>
        <template v-slot:state="scope">
          <i
            class="el-icon-success"
            v-if="scope.scope.row.cat_deleted === false"
            style="color:rgb(135,206,235)"
          ></i>
          <i class="el-icon-error" v-if="scope.scope.row.cat_deleted !== false"></i>
        </template>
        
        <template v-slot:action="scope">
          <el-tag v-if="scope.scope.row.cat_level ===0">一级</el-tag>
          <el-tag type="success" v-if="scope.scope.row.cat_level ===1">二级</el-tag>
          <el-tag type="warning" v-if="scope.scope.row.cat_level ===2">三级</el-tag>
        </template>
        <template v-slot:edit="scope">
          <el-button type="primary" size="mini" @click="edit(scope.scope)" icon="el-icon-edit">编辑</el-button>
          <el-button type="danger" size="mini" @click="del(scope.scope)" icon="el-icon-delete">删除</el-button>
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
      defaultProps: {
        children: "children",
        label: "cat_name",
      },
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
          slots: "goodsName",
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