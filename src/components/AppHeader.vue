<script>
import store from '../data/store.js';
import { RouterLink } from 'vue-router';
export default{
    components:{
        
    },
    data(){
        return{
            menuItems:[
                "home",
                "about",
                "projects",
                "contacts"
            ],
        }
    },
    methods:{

    },
    mounted(){

    },

}

</script>

<template>
       <h2 class="text-center">qui sei nell'header</h2>
       <ul class="d-flex justify-content-between">
            <li v-for="(item, index) in menuItems" :key="index">
                <!-- invece che il tag anchor uso router link per indirizzare alle pagine -->
                <router-link :to="{ name:menuItems[index] }" class="nav-link">
                {{ menuItems[index] }}
                </router-link>
            </li>
       </ul>
</template>

<style scoped>

</style>