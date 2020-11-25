<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <paginate
      :page-count="20"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script>
  import Paginate from "./components/Paginate.vue";

  export default {
    name: "App",
    components: {
      Paginate,
    },
    methods: {
      clickCallback(pageNum) {
        console.log(pageNum);
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
