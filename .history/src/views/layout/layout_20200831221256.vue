<template>
  <div>
    <layoutTop></layoutTop>
    <div class="flex">
      <layoutSider></layoutSider>
      <div class="box">
        <div class="history">
          <div class="one">首页</div>
          </div>
        <div><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<script>
import layoutTop from "../../components/Layout/layoutTop";
import layoutSider from "../../components/Layout/layoutSider";
export default {
  name: "",
  props: {},
  components: {
    layoutTop,
    layoutSider,
  },
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
  border-top: 1px solid #c9c9c9;
}
.history{
  padding: 10px;
  border-bottom: 1px solid #c9c9c9;
  width: 910px;
  margin-left: 10px;
}
.one{
  padding: 0 3px;
  font-size: 12px;
  background: blue;
}
</style>