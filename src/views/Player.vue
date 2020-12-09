<template>
  <div>
	   <p>yuyuyuyu</p>
		<video-player :options="videoOptions"/>
	</div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
	name: "Player",
	components: {
		VideoPlayer
	},
	data() {
	  	return {
			videoOptions: {
				autoplay: true,
				controls: true,
				sources: [
					{
						src:"../assets/video.mp4",
						type: "video/mp4"
					}
				]
			}
		};
	}
};
</script>