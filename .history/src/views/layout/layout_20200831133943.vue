<template>
  <div class="layout_All">
    <div class="top flex ac jsa">
      <div class="topOne">欢迎来到UG后台管理系统</div>
      <div class="topTwo flex ac jsb">
        <div>{{times}}</div>
        <!-- <div class="flex ac"> -->
        <iframe
          frameborder="0"
          scrolling="no"
          hspace="0"
          src="https://i.tianqi.com/?c=code&id=99"
          class="tianqi"
        ></iframe>
        <!-- </div> -->
        <div>亲爱的,{{user.username}}</div>
        <div class="out" @click="goOut">退出</div>
      </div>
    </div>
  </div>
</template>

<script>
// import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user: {},
      times: "", //格式化之后的当前时间
      currentTime: new Date(), //当前时间
    };
  },
  created() {
    this.getTimes();
  },
  // 在Vue实例销毁前，清除我们的定时器
  beforeDestroy() {
    if (this.times) {
      clearInterval(this.getTimesInterval);
    }
  },
  methods: {
    getTimes() {
      setInterval(this.getTimesInterval, 1000);
    },
    getTimesInterval: function () {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //拼接格式化当前时间
      _this.times =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    },

    //退出系统
    goOut(){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.$router.push('/login')
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.top {
  height: 100vw;
  height: 40px;
  background: violet;
  font-size: 13px;
  padding: 0 20px;
}
.tianqi {
  height: 35px;
  width: 114px;
}
.topOne {
  width: 70vw;
}
.topTwo {
  width: 40vw;
}
.out{
    color: rgb(64,158,255);
}
</style>