<script>
import store from '../data/store.js';
import { RouterLink } from 'vue-router';
export default{
    //con le props importo i dati dal componente genitore app.vue
    props:["project"],
    methods:{
      
    },
    mounted(){
        console.log("Card montata");
    }
}

</script>

<template>      
        <div class="card">
          <p>{{ project.name }}</p>
          <p>{{ project.description }}</p>
          <router-link :to="{name:'singleproject',params:{id:project.id}}">vai a {{ project.name }}</router-link>
        </div>
</template>

<style scoped>

</style>