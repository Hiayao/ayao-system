<template>
  <div class="box">
    <el-alert title type="warning" icon="el-icon-warning" :closable="false">
      <div class="flex ac">
        <i class="el-icon-warning"></i>
        <div>注意:只允许为第三级分类设置相关参数!</div>
      </div>
    </el-alert>
    <div class="choice flex ac">
      <div class="name">选择商品分类:</div>
      <el-cascader v-model="value" :options="sortLists" @change="handleChange"></el-cascader>
    </div>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="动态参数" name="first">
        <el-button type="primary" size="small">添加参数</el-button>
      </el-tab-pane>
      <el-tab-pane label="静态属性" name="second"></el-tab-pane>
    </el-tabs>

    <el-table :data="attributes" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="#">
              <span>{{ num }}</span>
            </el-form-item>
            <el-form-item label="参数名称">
              <span>{{ props.row.attr_name }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id"></el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="描述" prop="desc"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const AttributesModule = createNamespacedHelpers("attributes");
const {
  mapState: AttributesState,
  mapActions: AttributesActions,
} = AttributesModule;
const sortModule = createNamespacedHelpers("sort");
const { mapState: sortState, mapActions: sortActions } = sortModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      activeName: "first",
      id: "", //被选后的分类id
      sel: "many", //默认为动态参数
    };
  },
  methods: {
    ...AttributesActions(["getAttributes"]),
    ...sortActions(["getCategories"]),

    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(e) {
      console.log(e);
      e.map((item, index) => {
        if (index === 2) {
          this.id = item;
        }
      });
      // console.log(this.id);
      this.getAttributes({ id: this.id, sel: this.sel });
    },
  },
  mounted() {
    this.getCategories({
      type: "",
      pagenum: "",
      pagesize: "",
    });
  },
  watch: {},
  computed: {
    ...AttributesState(["attributes"]),
    ...sortState(["sortLists"]),
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
.el-icon-warning {
  margin-right: 10px;
}
.choice {
  margin-top: 20px;
  margin-bottom: 20px;
}
.name {
  margin-right: 10px;
}
</style>