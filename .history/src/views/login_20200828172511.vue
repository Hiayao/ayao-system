<template>
  <div>
    <div class="box flex jc ac">
      <el-card class="box-card">
        <div slot="header" class="clearfix tac fw6">
          <span>欢迎来到ayao后台管理系统</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
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
.box{
    background-image: url('../image/bizhi.jpg');
    background-size: 1200px;
    height: 100vh;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix{
    font-size: 24px;
}
.box-card {
  width: 480px;
}
</style>