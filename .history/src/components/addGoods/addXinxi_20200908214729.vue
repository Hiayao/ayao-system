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
    // next() {
    //   // if (this.active++ > 4) this.active = 0;
    //   this.$emit('next',this.active++)
    // },
    handleChange(value) {
      console.log(value);
      let id = value[value.length-1]
      console.log(id);
      if (value) {
        this.fleg = true;
        this.$emit("nexts",this.fleg)
        this.$emit("nexts",id)
      }
    },
    input(e) {
      console.log(e);
      if (e !== "") {
        this.disabled = false;
      }
      if (e === "") {
        this.disabled = true;
      }
    },
    inputs(e) {
      console.log(e);
      if (e !== "") {
        this.disableds = false;
      }
      if (e === "") {
        this.disableds = true;
      }
    },
    inputss(e) {
      console.log(e);
      if (e !== "") {
        this.disabledss = false;
      }
      if (e === "") {
        this.disabledss = true;
      }
    },
    inputsss(e) {
      console.log(e);
      if (e !== "") {
        this.disabledsss = false;
      }
      if (e === "") {
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
  watch: {},
  computed: {
    ...sortState(["sortLists"]),
  },
};
</script>

<style scoped lang='scss'>
</style>