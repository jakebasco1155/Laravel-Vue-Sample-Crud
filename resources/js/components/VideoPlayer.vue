<template>
    <div>
   <v-card>
   <v-card-title>Now Playing</v-card-title>
   <v-card-subtitle>Click on an image to play</v-card-subtitle>
   <v-card-text>
        <video id="videoPlayer" ref="videoPlayer" class="video-js"></video>
   </v-card-text>
   </v-card>
    </div>
</template>

<script>
import videojs from 'video.js';
import "video.js/dist/video-js.css";
export default {
    name: "VideoPlayer",
    props: ['url'],
    data() {
        return {
            player: null
        }
    },
     watch:{
         url(){
       var player = videojs(document.querySelector('.video-js'));
  player.src({
                 src: this.url,
                  type: 'video/mp4'/*video type*/
            });

  player.play();
         }

     },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer,  {
				autoplay: true,
				controls: true,
				sources: [
					{
						src:
							this.url,
						  type: "video/mp4"
					}
				]
			}, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>