<template>
  <div class="container">
  <v-row>
  <v-col cols="8">
    <video-player :url="link" />
    
  </v-col>
    <v-col cols="4"
      > 
      <div v-for="source in sources" :key="source.link">
         <v-card class="mx-auto">
         <v-card-title>{{source.name}}</v-card-title>
         <v-card-text>
        <img width="300" height="150" :src="source.thumbnail" @click="selectLink(source.link)" />
         </v-card-text>
         </v-card>
      </div>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer.vue";

export default {
  name: "VideoExample",
  components: {
    VideoPlayer,
  },
  created(){

      if(this.link==''){
          this.link="/videos/video_1.mp4";
      }
  },
  data() {
    return {
      sources: [
        {name:"WildLife Sample",
          thumbnail: "/images/thumbnails/video_1.jpg",
          link: "/videos/video_1.mp4",
        },
        {name:"Earth Sample",
          thumbnail: "/images/thumbnails/video_2.jpg",
          link: "/videos/video_2.mp4",
        },
        {name:"Windows Acapella",
          thumbnail: "/images/thumbnails/video_3.jpg",
          link: "/videos/video_3.mp4",
        },
        {
            name:"Colorful Ink",
          thumbnail: "/images/thumbnails/video_4.jpg",
          link: "/videos/video_4.mp4",
        },
        {
          name:"Colorful Backgroud Yellow",
          thumbnail: "/images/thumbnails/video_5.jpg",
          link: "/videos/video_5.mp4",
        },
      ],
      link:'',
    };
  },
    methods:{
        selectLink(link){
             this.link = link;
             console.log(this.link)

        }
} 
}
</script>
