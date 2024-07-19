<script>
import store from '../data/store.js';
import ProjectCard from '../components/ProjectCard.vue';
export default{

components:{
    ProjectCard,

},

data(){

  return{
    store,
  }

},

methods:{

},
mounted(){
    // axios.get(this.store.base_link+"api/projects")
    // .then((response)=>{
    //   this.store.progetti=response.data.projects.data;
    //   console.log(this.progetti)
    // });

},

}


</script>

<template>
  <h1 class="text-center">ciao!ecco la lista dei progetti!</h1>
  <div class="container">
    <div class="row">
      <div class="col" v-for="project,i in store.progetti">
        <div class="card">
          <p>{{ project.name }}</p>
          <p>{{ project.description }}</p>
        </div>
        <!-- <projectCard/> -->
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>