<script>
//importo axios e  store
import axios from 'axios';
import store from '../data/store.js';
import { RouterLink } from 'vue-router';
    export default {
        name:"SingleProject",
        data(){
            return{
                store
            }
        },
        methods:{

        },
        mounted(){
            axios.get(`http://127.0.0.1:8000/api/projects/ ${this.$route.params.id}`)
            .then((response) => {
                //bonus:implemento la condizione che verifichi che la pagina restituisca indirizzo esistente
                if(response.data.success){
                    this.store.progetto = response.data.project;
                    console.log(this.store.progetto);
                }
                else{
                    //console.log(response.data.message);
                    this.$router.push({name:'notfound'});
                }
            });

        }    
    }
</script>


<template>
    <div>
    <div class="card">
        <img class="card-img-top" src="" alt="" />
        <div class="card-body">
            <h4 class="card-title">{{store.progetto.name}}</h4>
            <p class="card-text">{{ store.progetto.description }}</p>
            <router-link class="btn-btn-primary" to="/projects">torna ai progetti </router-link>
        </div>
    </div>
    
    </div>
</template>


<style scoped>

</style>