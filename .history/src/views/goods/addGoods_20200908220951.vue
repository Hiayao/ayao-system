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
        <el-steps :active="active" finish-status="success" class="steps">
          <el-step title="基本信息"></el-step>
          <el-step title="商品参数"></el-step>
          <el-step title="商品属性"></el-step>
          <el-step title="商品图片"></el-step>
          <el-step title="商品内容"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
        <el-tabs tab-position="left" v-model="tab">
          <el-tab-pane label="基本信息" name="news">
            <addXinxi @nexts="nexts"></addXinxi>
          </el-tab-pane>
          <el-tab-pane label="商品参数" :disabled="disabled" name="parameter">
            <addCanshu :attributes="attributes"></addCanshu>
          </el-tab-pane>
          <el-tab-pane label="商品属性" :disabled="disableds" name="attribute">角色管理</el-tab-pane>
          <el-tab-pane label="商品图片" :disabled="disabledss" name="picture">定时任务补偿</el-tab-pane>
          <el-tab-pane label="商品内容" :disabled="disabledsss" name="content">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
      <el-button
        style="margin-top: 12px;"
        type="success"
        size="small"
        @click="next"
        v-if="fleg===true"
      >下一步</el-button>
    </div>
  </div>
</template>

<script>
import addXinxi from "../../components/addGoods/addXinxi";
import addCanshu from "../../components/addGoods/addCanshu";

import { createNamespacedHelpers } from "vuex";
const AttributesModule = createNamespacedHelpers("attributes");
const {
  mapState: AttributesState,
  mapActions: AttributesActions,
} = AttributesModule;
export default {
  name: "",
  props: {},
  components: {
    addXinxi,
    addCanshu,
  },
  data() {
    return {
      id: "",
      active: 0,
      disabled: true,
      disableds: true,
      disabledss: true,
      disabledsss: true,
      fleg: false,
      tab: "parameter",
    };
  },
  methods: {
    ...AttributesActions(["getAttributes"]),

    next() {
      if (this.active++ > 4) this.active = 0;
      // this.$emit('next',this.active++)
      if (this.active === 1) {
        this.disabled = false;
        this.tab = "parameter";
        this.getAttributes({ id: this.id, sel: "many" });
      }
      if(this.active === 2){
        this.disableds = false;
        this.tab = "attribute";
      }
      if(this.active === 3){
        this.disabledss = false;
        this.tab = "picture";
      }
      if(this.active === 4){
        this.disabledsss = false;
        this.tab = "content";
      }
      if(this.active === 5){
        // this.disabledsss = false;
        this.tab = "news";
      }
    },
    nexts(data) {
      console.log(data);
      this.fleg = data[0];
      this.id = data[1];
    },
  },
  mounted() {},
  watch: {},
  computed: {
    ...AttributesState(["attributes"]),
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
.alert {
  margin-bottom: 15px;
}
.steps {
  width: 85%;
  margin-left: 15%;
  margin-bottom: 15px;
}
</style>