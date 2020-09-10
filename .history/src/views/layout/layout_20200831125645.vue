<template>
  <div>
    <div class="top flex ac jsb">
      <div>欢迎来到UG后台管理系统</div>
      <div class="flex ac">
        <div>2020/8/31 下午00:00:00</div>
        <div class="flex ac">
          <iframe
            scrolling="no"
            src="https://tianqiapi.com/api.php?style=tx&skin=pitaya"
            frameborder="0"
            width="100%"
            line-height="30"
            allowtransparency="true"
          ></iframe>
        </div>
        <div>亲爱的,{{user.username}}</div>
        <div>退出</div>
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
    return {
      user: {},
    };
  },
  methods: {},
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.top {
  height: 100vw;
  height: 40px;
  background: violet;
  font-size: 13px;
}
</style>