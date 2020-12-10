<template>
  <div id="app">
    <div class="wrapper">
      <div class="card" v-for="post in likeList" :key="post.index">
        <router-link
          :to="{
            name: 'Player',
            params: {
              title: post.post.title,
              description: post.post.description,
            },
          }"
        >
          <a v-bind:href="post.link" target="_blank">
            <img v-bind:src="post.post.img || loadingIcon" />
            <small>{{ post.post.title }}</small>
            <small>影片長度</small>
            <pre>{{ post.post.duration }}</pre>
            <small>影片描述</small>
            <pre>{{ post.post.description }}</pre>
          </a>
        </router-link>
      </div>
    </div>
    <paginate
      :page-count="9"
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
import Paginate from "@/components/Paginate.vue";
import { listVideo } from "@/api/youtube";
import moment from "moment";
import "moment-duration-format";
import store from "@/store";
export default {
  name: "Favorite",
  components: {
    Paginate,
  },
  data() {
    return {
      pageNum: 1,
      loadingIcon: require("@/assets/loading.gif"),
      queryParams: {
        playerAcc: "",
        apikey: "AIzaSyDp-djtLo7TS0_LE_3d44NBRT2jFGbD56Q",
      },
    };
  },
  computed: {
    likeList() {
      console.log("ssa", store.state.likeList);
      return store.state.likeList;
    },
  },
  methods: {
    clickCallback(pageNum) {
      console.log("pageNum", pageNum);
    },
  },
};
</script>
