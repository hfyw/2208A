<template>
  <div>
    <HelloWord ref="helloword" :title="title" />
    <button @click="getChildren">获取子组件实例</button>
  </div>
</template>

<script>
import HelloWord from "../components/HelloWorld.vue";
export default {
  data() {
    return {
      list: [
        { name: "武康", age: 18 },
        { name: "武康", age: 18 },
        { name: "武康", age: 18 },
        { name: "武康", age: 18 },
        { name: "武康", age: 18 },
      ],
      title: "success",
    };
  },
  methods: {
    getChildren() {
      this.$refs.helloword.handler(this.list);
      console.log(this.$refs.helloword, "VC实例");
    },
  },
  created() {},
  mounted() {},
  components: { HelloWord },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
