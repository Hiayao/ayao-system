<template>
  <div class="All flex jusi-center">
    <div class="Allbox flex alii-center jusi-center">
      <div class="img">
        <img src="../image/timg.gif" alt />
      </div>
      <div class="flex column alii-center">
        <div class="word">
          <div class="word1">这位勇敢的少年，你误入歧途</div>
          <div class="word1">请点击下方按钮回归正道吧！</div>
        </div>
        <el-button type="success" round class="btn" @click="btn">正道的光</el-button>
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
  methods: {
    btn() {
      this.$router.push("/");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.All {
  width: 100%;
}
.Allbox {
  width: 960px;
  height: 100vh;
}

.word1 {
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.word {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn {
  background: #00d78a;
  margin-top: 30px;
  width: 100px;
}
</style>