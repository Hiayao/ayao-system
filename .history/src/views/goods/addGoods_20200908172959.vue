<template>
  <div>
    <div class="box">
      <el-alert title type="info" icon="el-icon-warning" :closable="false" class="alert">
        <div class="flex ac">
          <i class="el-icon-info"></i>
          <div>添加商品信息!</div>
        </div>
      </el-alert>
      <div>
        <el-steps :active="0" finish-status="success" class="steps">
          <el-step title="基本信息"></el-step>
          <el-step title="商品参数"></el-step>
          <el-step title="商品属性"></el-step>
          <el-step title="商品图片"></el-step>
          <el-step title="商品内容"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
          <el-tabs tab-position="left" style="height: 200px;">
          <el-tab-pane label="基本信息">

          </el-tab-pane>
          <el-tab-pane label="商品参数">配置管理</el-tab-pane>
          <el-tab-pane label="商品属性">角色管理</el-tab-pane>
          <el-tab-pane label="商品图片">定时任务补偿</el-tab-pane>
          <el-tab-pane label="商品内容">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
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
.alert {
  margin-bottom: 15px;
}
.steps{
  width: 85%;
  margin-left: 15%;
  margin-bottom: 15px;
}
</style>