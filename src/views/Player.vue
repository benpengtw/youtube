<template>
  <div>
    <div class="example">
      <small>影片標題</small>
      <pre> {{ $route.params.title }}</pre>
    </div>
    <div class="example">
      <small> 影片描述</small>
      <pre>{{ $route.params.description }}</pre>
    </div>
    <video-player :options="videoOptions" />
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  name: "Player",

  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src:
              "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
            type: "application/x-mpegURL",
          },
        ],
        muted: false,
        height: "720px",
        width: "1280px",
      },
    };
  },
};
</script>
<style lang="less" scoped>
.examples {
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  // grid-gap: 1rem;
  margin: 1rem 0;
}

.example {
  small {
    font-size: 18px;
    padding: 4px;
    width: 400px;
    color: #000;
  }
  pre {
    padding: 4px;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: #03a9f4;
  }
}
</style>