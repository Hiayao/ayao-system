<template>
  <div class="sider_All">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      unique-opened
      router
    >
      <template v-for="item in menus">
        <el-menu-item :index="`/${item.path}`" v-if="!item.children" :key="item.path" @click="addNav(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{item.authName}}</span>
        </el-menu-item>
        <el-submenu :index="item.path" v-if="item.children" :key="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.authName}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="`/${item1.path}`" v-for="item1 in item.children" :key="item1.id" @click="addNav(item)">
              <i :class="item1.icon"></i>
              <span>{{item1.authName}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user:{},  //用户信息
      authList:[]  //左侧导航每一项的name
    };
  },
  methods: {
    ...userActions(["getMenus"]),

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    addNav(item){
      console.log(item);
      this.authList.push(item.authName)
      localStorage.setItem(`${this.user.username}Nav`,JSON.stringify(this.authList))
    },
  },
  mounted() {
    this.getMenus();
    this.user = JSON.parse(localStorage.getItem('user'))
    if(localStorage.getItem(`${this.user.username}Nav`)){
      this.authList = JSON.parse(localStorage.getItem(`${this.user.username}Nav`))
      console.log(this.authList);
    }
  },
  watch: {},
  computed: {
    ...userState(["menus"]),
  },
};
</script>

<style scoped lang='scss'>
.sider_All {
  height: 500px;
  width: 200px;
  border-right: 0.5px solid #c9c9c9;
}
</style>