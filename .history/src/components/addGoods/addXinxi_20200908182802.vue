<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
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
  mounted() {
      this.$store.dispatch('sort/getCategories')
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>