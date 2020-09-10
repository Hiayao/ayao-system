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
        <el-tabs tab-position="left">
          <el-tab-pane label="基本信息">
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
              <el-form-item label="商品名称" required prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="商品价格" required prop="price">
                <el-input v-model="form.price"></el-input>
              </el-form-item>
              <el-form-item label="商品重量" required prop="weight">
                <el-input v-model="form.weight"></el-input>
              </el-form-item>
              <el-form-item label="商品数量" required prop="num">
                <el-input v-model="form.num"></el-input>
              </el-form-item>
              <el-form-item label="商品分类" required>
                <el-cascader
                  v-model="value"
                  :options="options"
                  :props="{ expandTrigger: 'hover' }"
                  @change="handleChange"
                ></el-cascader>
              </el-form-item>
            </el-form>
            <el-button style="margin-top: 12px;" type="success" size="small" @click="next">下一步</el-button>
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
    return {
      active: 0,
      value: [],
      form: {
        name: "",
        price: "",
        weight: "",
        num: "",
        sort: "",
      },
      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        price: [{ required: true, message: "请输入商品价格", trigger: "blur" }],
        weight: [
          { required: true, message: "请输入商品重量", trigger: "blur" },
        ],
        num: [{ required: true, message: "请输入商品数量", trigger: "blur" }],
      },
      options: [
        {
          value: "zhinan",
          label: "指南",
        },
      ],
    };
  },
  methods: {
    next() {
      if (this.active++ > 4) this.active = 0;
    },
    handleChange(value) {
      console.log(value);
    },
  },
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
.steps {
  width: 85%;
  margin-left: 15%;
  margin-bottom: 15px;
}
</style>