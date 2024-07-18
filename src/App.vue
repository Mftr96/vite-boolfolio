<script>
//importo axios 
import axios from 'axios';
;
export default{
  //qui metto i dati che verranno poi usati sia nei metodi sia in pagina con i binding 
  data(){
    //nel data ci vuole sempre il return; i data nel return si dichiarano con i due punti :
    return{
      base_link:"http://127.0.0.1:8000/",
      progetti:"",
      link_axios:"http://127.0.0.1:8000/api/projects",

    }
  },
  //nei methods scrivo le eventuali funzioni da andare a richiamare in pagina
  methods:{

  },
  //nel mounted inserisco le funzioni che verranno caricate all'avvio della pagina
  mounted(){
    //chiamata axios che va a recuperare i dati dei progetti
    axios.get(this.base_link+"api/projects")
    .then((response)=>{
      this.progetti=response.data.projects.data;
      console.log(this.progetti)
    });
  }



}
</script>

<template>
  <h1 class="text-center">ciao!ecco la lista dei progetti!</h1>
  <div class="container">
    <div class="row">
      <div class="col" v-for="project in progetti">
        <div class="card">
          <p>{{ project.name }}</p>
          <p>{{ project.description }}</p>
        </div>
   

      </div>
    </div>
  </div>
 
</template>

<style scoped>


</style>
