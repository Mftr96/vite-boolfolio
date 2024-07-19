<script>
//importo axios 
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue' 
import store from './data/store.js'
;
export default{
  
  components:{
    ProjectCard
  },
  //qui metto i dati che verranno poi usati sia nei metodi sia in pagina con i binding 
  data(){
    //nel data ci vuole sempre il return; i data nel return si dichiarano con i due punti :
    return{
      store,
    }
  },
  //nei methods scrivo le eventuali funzioni da andare a richiamare in pagina
  methods:{

  },
  //nel mounted inserisco le funzioni che verranno caricate all'avvio della pagina
  mounted(){
    //chiamata axios che va a recuperare i dati dei progetti
    axios.get(this.store.base_link+"api/projects")
    .then((response)=>{
      this.store.progetti=response.data.projects.data;
      console.log(this.progetti)
    });
  }



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
