<template>
  <div>
    <layoutTop></layoutTop>
    <div class="flex">
      <layoutSider></layoutSider>
      <div class="box">
        <div class="history flex">
          <div class="one">
            <img src="../../image/yuan.png" alt class="yuan" />
            首页
          </div>
        </div>
        <div>
          <router-view></router-view>
        </div>
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
.box {
  border-top: 1px solid #c9c9c9;
}
.history {
  border-bottom: 1px solid #c9c9c9;
  width: 910px;
  margin-left: 10px;
}
.one {
  height: 10px;
  padding: 0 10px;
  font-size: 12px;
  background: rgb(64, 158, 255);
  padding: 10px;
}
.yuan {
  width: 8px;
  height: 8px;
  
}
</style>