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
        <el-tabs tab-position="left" v-model="tab" @tab-click="tabClick">
          <el-tab-pane label="基本信息" name="news">
            <addXinxi @nexts="nexts"></addXinxi>
          </el-tab-pane>
          <el-tab-pane label="商品参数" :disabled="disabled" name="parameter">
            <addCanshu :attributes="attributes"></addCanshu>
          </el-tab-pane>
          <el-tab-pane label="商品属性" :disabled="disableds" name="attribute">
            <addShuxing :attributes="attributes"></addShuxing>
          </el-tab-pane>
          <el-tab-pane label="商品图片" :disabled="disabledss" name="picture">
            <addPictrue></addPictrue>
          </el-tab-pane>
          <el-tab-pane label="商品内容" :disabled="disabledsss" name="content">
            <addMarkdown></addMarkdown>
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-button
        style="margin-top: 12px;"
        type="success"
        size="small"
        @click="next"
        v-if="fleg===true"
        class="btn"
      >下一步</el-button>
      <el-button
        style="margin-top: 12px;"
        type="success"
        size="small"
        @click="sure"
        v-if="flag===true"
        class="btn"
      >提交</el-button>
    </div>
  </div>
</template>

<script>
import addXinxi from "../../components/addGoods/addXinxi";
import addCanshu from "../../components/addGoods/addCanshu";
import addShuxing from "../../components/addGoods/addShuxing";
import addPictrue from "../../components/addGoods/addPictrue";
import addMarkdown from "../../components/addGoods/addMarkdown";

import { createNamespacedHelpers } from "vuex";
const AttributesModule = createNamespacedHelpers("attributes");
const {
  mapState: AttributesState,
  mapActions: AttributesActions,
} = AttributesModule;
const GoodsModule = createNamespacedHelpers("goods");
const { mapState: goodsState, mapActions: goodsActions } = GoodsModule;
export default {
  name: "",
  props: {},
  components: {
    addXinxi,
    addCanshu,
    addShuxing,
    addPictrue,
    addMarkdown,
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
      flag: false,
      tab: "news",
    };
  },
  methods: {
    ...AttributesActions(["getAttributes"]),
    // ...goodsActions(["Addgoods"]),

    next() {
      if (this.active++ > 4) this.active = 0;
      // this.$emit('next',this.active++)
      if (this.active === 1) {
        this.disabled = false;
        this.tab = "parameter";
        this.getAttributes({ id: this.id, sel: "many" });
      }
      if (this.active === 2) {
        this.disableds = false;
        this.tab = "attribute";
        this.getAttributes({ id: this.id, sel: "only" });
      }
      if (this.active === 3) {
        this.disabledss = false;
        this.tab = "picture";
      }
      if (this.active === 4) {
        this.disabledsss = false;
        this.tab = "content";
        this.fleg = false;
        this.flag = true;
      }
      if (this.active ===5 ) {
        // this.disabledsss = false;
        this.tab = "news";
      }
    },
    nexts(data) {
      console.log(data);
      this.fleg = data[0];
      this.id = data[1];
    },
    tabClick(e) {
      // console.log(e);
      if (e.index === "0") {
        this.active = 0;
      }
      if (e.index === "1") {
        this.active = 1;
        this.getAttributes({ id: this.id, sel: "many" });
      }
      if (e.index === "2") {
        this.active = 2;
        this.getAttributes({ id: this.id, sel: "only" });
      }
      if (e.index === "3") {
        this.active = 3;
      }
      if (e.index === "4") {
        this.active = 4;
      }
    },
    sure() {
      // this.Addgoods({})
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
.btn {
  margin-left: 190px;
}
</style>