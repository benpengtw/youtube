<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <paginate
      :page-count="10"
      :page-range="1"
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
  import { listVideo } from "@/api/youtube";
  export default {
    name: "App",
    components: {
      Paginate,
    },
    data() {
      return {
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          playerAcc: "",
          apikey: "AIzaSyDp-djtLo7TS0_LE_3d44NBRT2jFGbD56Q",
        },
      };
    },
    created() {
      this.getList();
    },
    methods: {
      clickCallback(pageNum) {
        console.log(pageNum);
      },
      getList() {
        listVideo(this.queryParams).then((response) => {
          console.log("qq", response);
          // this.playerList = response.rows;
          // this.total = response.total;
          // this.loading = false;
        });
      },
    },
  };
</script>

<style lang="css">
  .pagination {
  }
  .page-item {
  }
</style>
