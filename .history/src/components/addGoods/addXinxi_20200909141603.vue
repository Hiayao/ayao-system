<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="商品名称" required prop="name">
        <el-input v-model="form.name" @input="input"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" required prop="price">
        <el-input v-model="form.price" :disabled="disabled" @input="inputs"></el-input>
      </el-form-item>
      <el-form-item label="商品重量" required prop="weight">
        <el-input v-model="form.weight" :disabled="disableds" @input="inputss"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" required prop="num">
        <el-input v-model="form.num" :disabled="disabledss" @input="inputsss"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" required>
        <el-cascader
          v-model="value"
          :options="sortLists"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
          :disabled="disabledsss"
        ></el-cascader>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const sortModule = createNamespacedHelpers("sort");
const { mapState: sortState, mapActions: sortActions } = sortModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: [],
      disabled: true,
      disableds: true,
      disabledss: true,
      disabledsss: true,
      fleg: false,
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
    ...sortActions(["getCategories"]),

    handleChange(value) {
      console.log(value);
      let id = value[value.length - 1];
      console.log(id);
      if (value) {
        this.fleg = true;
        this.$emit("nexts", [
          this.fleg,
          id,
          this.form.name,
          this.form.price,
          this.form.weight,
          this.form.num,
          value,
        ]);
      }
    },
    input(e) {
      console.log(e);
      if (this.form.name !== "") {
        this.disabled = false;
      }
      if (this.form.name === "") {
        this.disabled = true;
      }
    },
    inputs(e) {
      console.log(e);
      if (this.form.price !== "" && this.disabled === false) {
        console.log(111);
        this.disableds = false;
      }
      if (this.form.price === "" || this.disabled === true) {
        console.log(222);
        this.disableds = true;
      }
    },
    inputss(e) {
      console.log(e);
      if (
        this.form.weight !== "" &&
        this.disabled === false &&
        this.disableds === false
      ) {
        this.disabledss = false;
      }
      if (
        this.form.weight === "" ||
        this.disabled === true ||
        this.disableds === true
      ) {
        this.disabledss = true;
      }
    },
    inputsss(e) {
      console.log(e);
      if (
        this.form.num !== "" &&
        this.disabled === false &&
        this.disableds === false &&
        this.disabledss === false
      ) {
        this.disabledsss = false;
      }
      if (
        this.form.num === "" ||
        this.disabled === true ||
        this.disableds === true ||
        this.disabledss === true
      ) {
        this.disabledsss = true;
      }
    },
  },
  mounted() {
    this.$store.dispatch("sort/getCategories", {
      type: "",
      pagenum: "",
      pagesize: "",
    });
  },
  watch: {
    // 深度监听路由跳转
    disabled: {
      handler() {
        this.input();
        this.inputs();
        this.inputss();
        this.inputsss();
        // this.currentPath = val; /al是路由跳转的path
      },
      immediate: true, //立即执行 监听
    },
  },
  computed: {
    ...sortState(["sortLists"]),
  },
};
</script>

<style scoped lang='scss'>
</style>