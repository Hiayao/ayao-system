<template>
  <!-- 子组件 -->
  <div>
    <el-table
      :data="tableData"
      v-loading="!tableData.length"
      :row-key="rowKey"
      :border="border"
      :stripe="stripe"
    >
      <el-table-column :type="type" v-if="type !==''">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label>
              <!-- <span>{{ props.row.id }}</span> -->
              <div v-for="item in props.row.children" :key="item.id" class="flex ac">
                <el-tag closable>{{item.authName}}</el-tag>
                <div v-if="item.children">
                  <div v-for="item1 in item.children" :key="item1.id" class="flex ac">
                    <el-tag closable type="success">{{item1.authName}}</el-tag>
                    <div v-if="item1.children">
                      <div v-for="item2 in item1.children" :key="item2.id">
                        <el-tag closable type="warning">{{item2.authName}}</el-tag>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <template v-for="(item,index) in columns">
        <el-table-column
          v-if="item.prop"
          :label="item.label"
          :prop="item.prop"
          :align="item.align"
          :tatol="tatol"
          :key="index"
          :width="item.width"
        >
          <template slot-scope="scope">
            <slot v-if="item.slots" :name="item.slots" :scope="scope"></slot>
            <template v-else>{{scope.row[item.prop]}}</template>
          </template>
        </el-table-column>
        <el-table-column v-else :label="item.label" :align="item.align" :key="index">
          <template slot-scope="scope">
            <slot name="action" :scope="scope"></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div v-if="showPagination" class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "",
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    tatol: {
      type: [String, Number],
      default: 0,
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40],
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    type: {
      type: String,
      default: "",
    },
    border: {
      type: Boolean,
      default: false,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    rowKey: {
      type: String,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.pagination {
  width: 100%;
  display: flex;
  margin-top: 26px;
  position: relative;
  right: 50px;
  justify-content: flex-end;
}
</style>