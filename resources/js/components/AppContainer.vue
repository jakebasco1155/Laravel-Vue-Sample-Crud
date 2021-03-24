<template>
     
    <dashboard-component/>

    
</template>

<script>
import DashBoard from './DashBoard.vue'
    export default {
  components: { DashBoard },
        mounted() {
            console.log('Component mounted.')
            
        }
    }
</script>
