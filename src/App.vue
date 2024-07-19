<script>
//importo axios 
import axios from 'axios';
import store from './data/store.js';
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router';
export default{
  
  components:{
    AppHeader,
    RouterView,
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
 
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>

</template>

<style scoped>


</style>
