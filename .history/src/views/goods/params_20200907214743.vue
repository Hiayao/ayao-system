<template>
  <div class="box">
    <el-alert title type="warning" icon="el-icon-warning" :closable="false">
      <div class="flex ac">
      <i class="el-icon-warning"></i>
      <div>注意:只允许为第三级分类设置相关参数!</div></div>
    </el-alert>
     <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
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
.el-icon-warning{
  margin-right: 10px;
}
</style>