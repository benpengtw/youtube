<template>
  <div>
    <div v-if="isShow">我是廣告</div>

    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import store from "@/store";
export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  computed: {
    isShow() {
      return store.state.isShow;
    },
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
        this.on("pause", function (event) {
          store.commit("setIsShow", { isShow: true });
        });
        this.on("play", function (event) {
          store.commit("setIsShow", { isShow: false });
        });
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style lang="less" scoped>
.video_container .video-js {
  width: "1280px";
  height: "720px";
}
</style>