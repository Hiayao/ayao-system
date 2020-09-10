<template>
  <div></div>
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
      type: 1,
      pagenum: 1,
      pagesize: 5,
    };
  },
  methods: {
    ...sortActions(["getCategories"]),
  },
  mounted() {
    this.getCategories({
      type: this.type,
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
  },
  watch: {},
  computed: {
    ...sortState(["sortList", "total"]),
  },
};
</script>

<style scoped lang='scss'>
</style>