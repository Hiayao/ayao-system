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

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
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
      id:'',  //被选后的分类id
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
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
      e.map((item,index) => {
        if(index === 2){
          this.id = item.id
        }
      })
      console.log(this.id);
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