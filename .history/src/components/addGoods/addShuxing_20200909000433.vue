<template>
  <div>
    <div v-if="attributes.length>0">
      <div v-for="item in attributes" :key="item.attr_id">
        <div>{{item.attr_name}}</div>
      </div>
    </div>
    <div v-else>暂无属性</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    attributes: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>