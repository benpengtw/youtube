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
						src:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
						type: "application/x-mpegURL"
					}
				]
			}
		};
	}
};
</script>