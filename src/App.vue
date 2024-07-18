<script>
//importo axios 
import axios from 'axios';
export default{
  //qui metto i dati che verranno poi usati sia nei metodi sia in pagina con i binding 
  data(){
    //nel data ci vuole sempre il return; i data nel return si dichiarano con i due punti :
    return{
      base_link:"http://127.0.0.1:8000/",
      progetti:"",

    }
  },
  //nei methods scrivo le eventuali funzioni da andare a richiamare in pagina
  methods:{

  },
  //nel mounted inserisco le funzioni che verranno caricate all'avvio della pagina
  mounted(){
    //chiamata axios che va a recuperare i dati dei progetti
    axios.get(`http://127.0.0.1:8000/api/projects`)
    .then((response)=>{
      this.progetti=response.data.projects;
      console.log(this.progetti)
    });
  }



}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
