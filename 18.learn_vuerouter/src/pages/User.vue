<template>
  <div>
    <h2>User: {{$route.params.username}}</h2>
  </div>
</template>

<script>
  import { useRoute } from 'vue-router';
  export default {
    created() {
      console.log(this.$route.params.username)
    },
    setup() {
       const route = useRoute();
       console.log(route.params)
       return {
         route
       }
    }
  }
</script>

<style scoped>

</style>