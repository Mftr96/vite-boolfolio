<script>
import axios from 'axios';
import store from '../data/store.js';
import ProjectCard from '../components/ProjectCard.vue';

export default {

  components: {
    ProjectCard,

  },

  data() {

    return {
      store,
    }

  },

  methods: {

  },
  mounted() {
    //chiamata axios per lista di tutti i progetti
    axios.get(this.store.base_link + "api/projects")
      .then((response) => {
        this.store.progetti = response.data.projects.data;
        console.log(this.store.progetti)
      });

  },

}


</script>

<template>
  <h2 class="text-center">ciao!ecco la lista dei progetti!</h2>
  <div class="container">
    <div class="row">
      <div class="col" v-for="project, i in store.progetti">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>


</template>

<style scoped></style>