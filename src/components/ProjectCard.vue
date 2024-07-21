<script>
import store from '../data/store.js';
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
        </div>
</template>

<style scoped>

</style>