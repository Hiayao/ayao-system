<template>
  <div>
    <div class="box">
      <el-button type="primary" @click="Visible = true">添加角色</el-button>
      <ug-form :Visible.sync="Visible" @cancel="cancel" @ok="ok" :formData="formData"></ug-form>
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
      Visible: false,
      formData: [
        {
          label: "角色名",
          // 表单元素的类型
          type: "input",
          // v-model绑定的值
          value: "",
          rule: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
          prop: "roleName",
          attrs: {
            placeholder: "请输入用户名",
            clearable: true,
          },
        },
        {
          label: "角色描述",
          // 表单元素的类型
          type: "input",
          // v-model绑定的值
          value: "",
          prop: "roleDesc",
        },
      ],
    };
  },
  methods: {
    cancel(val) {
      this.$message.success("点击了取消");
      this.Visible = false;
      console.log(val);
      val.formRef.resetFields();
    },
    ok(val) {
      val.formRef.validate((valid) => {
        if (valid) {
          this.$message.success("点击了确定");
          this.Visible = false;
          console.log(val);
          val.formRef.resetFields();
          this.$store.dispatch("roles/Addroles", {
            roleName: val.options.roleName,
            roleDesc: val.options.roleDesc,
          });
        } else {
          this.$message.error("表单填写有误，请检查");
        }
      });
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
</style>