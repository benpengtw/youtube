<template>
  <div id="app">
    <div class="wrapper">
      <div class="card" v-for="post in postList" :key="post.index">
        <button v-on:click="addLike(post)">加入收藏</button>
        <router-link
          :to="{
            name: 'Player',
            params: { title: post.title, description: post.description },
          }"
        >
          <a v-bind:href="post.link" target="_blank">
            <img v-bind:src="post.img || loadingIcon" />
            <small>{{ post.title }}</small>
            <small>影片長度</small>
            <pre>{{ post.duration }}</pre>
            <small>影片描述</small>
            <pre>{{ post.description }}</pre>
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
  name: "Home",
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
      postList: [
        {
          title: "Please Wait...",
          link: "",
          description: "",
          img: "",
          duration: "",
        },
      ],
      postListOrigin: [
        {
          title: "Please Wait...",
          link: "",
          description: "",
          img: "",
          duration: "",
        },
      ],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    addLike(post) {
      console.log(post);
      store.commit("addToLikeList", { post });
    },
    clickCallback(pageNum) {
      console.log(pageNum);
      this.postList = this.postListOrigin.slice(
        (pageNum - 1) * 12,
        pageNum * 12
      );
    },
    getList() {
      listVideo(this.queryParams).then((response) => {
        this.postListOrigin = response.map((element) => {
          const newPostList = {
            img: element.snippet.thumbnails.medium.url,
            title: element.snippet.title,
            description: element.snippet.description,
            duration: moment
              .duration(element.contentDetails.duration)
              .format("HH:mm:ss", { trim: false }),
          };
          return newPostList;
        });
        this.postList = this.postListOrigin.slice(0, 12);
      });
    },
  },
};
</script>

<style lang="less">
html,
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
}

div#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .wrapper {
    display: flex;
    max-width: 1400px;
    flex-wrap: wrap;
    padding-top: 12px;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
      rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 400px;
    margin: 12px;
    transition: 0.15s all ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    a {
      text-decoration: none;
      padding: 12px;
      color: #03a9f4;
      font-size: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 100px;
      }
      pre {
        font-size: 10px;
        padding: 4px;
        width: 400px;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      small {
        font-size: 18px;
        padding: 4px;
        width: 400px;
        color: #000;
      }
    }
  }

  .hotpink {
    background: hotpink;
  }

  .green {
    background: green;
  }

  .box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
}
</style>
