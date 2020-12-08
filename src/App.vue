<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="wrapper">
      <div class="card" v-for="post in postList" :key="post.index">
        <a v-bind:href="post.link" target="_blank">
          <img v-bind:src="post.img" />
          {{ post.title }}
          <small>{{ post.duration }}</small>
          <small>{{ post.duration }}</small>
        </a>
      </div>
    </div>
    <paginate
      :page-count="10"
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
      postList: [
        {
          title: "Vue.js",
          link: "https://vuejs.org/",
          description: "Chris",
          img: "https://vuejs.org//images/logo.png",
          duration: "18:52",
        },
      ],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
      console.log(this.postList);
    },
    getList() {
      listVideo(this.queryParams).then((response) => {
        console.log("qq", response);
        this.postList = response.map((element) => {
          const newPostList = {
            img: element.snippet.thumbnails.medium.url,
            title: element.snippet.title,
            description: element.snippet.description,
            duration: element.contentDetails.duration,
          };
          return newPostList;
        });
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
      small {
        font-size: 10px;
        padding: 4px;
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
