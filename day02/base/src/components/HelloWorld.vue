<template>
  <div>
    子组件
    <span>{{ title }}</span>
    <div>mixin:{{ msg }}</div>
  </div>
</template>

<script>
import myMixin from "../mixin/mixin";
export default {
  // 简单写法
  // props:['title'],
  // 对象写法
  mixins: [myMixin],
  props: {
    title: {
      //类型
      type: String,
      // 默认值
      default: "默认值",
      // 是否必传
      required: true,
      // 传的必须是下面的某一个
      validator: function (value) {
        return ["success", "error"].includes(value);
      },
    },
  },
  // 函数类型
  // props: {
  //   title: String,
  // },
  data() {
    return {};
  },
  methods: {
    handler(value) {
      console.log("我是子组件", value);
      this.myMethod();
    },
  },
  created() {
    console.log("created---组件");
  },
  mounted() {
    console.log("mounted---组件");
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
