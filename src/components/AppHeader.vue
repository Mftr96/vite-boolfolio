<script>
import store from '../data/store.js';
export default{
    data(){

    },
    methods:{

    },
    mounted(){

    },

}

</script>

<template>
    <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="{ name: item.routeName }" class="nav-link">
        {{ item.label }}
        </router-link>
    </li>

       
</template>

<style scoped>

</style>