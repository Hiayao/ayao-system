<template>
  <div>
    <layoutTop></layoutTop>
    <div class="flex">
      <layoutSider></layoutSider>
      <div class="box">
        <div>首页</div>
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
</style>