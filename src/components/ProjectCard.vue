<script>
export default{
    //con le props importo i dati dal componente genitore app.vue
    props:{
        progetti:Array,
    },
    methods:{
        f_progetti(){
            console.log(this.progetti);
        }
    }
}

</script>

<template>

       
        <!-- <div class="card">
          <p>{{ project.name }}</p>
          <p>{{ project.description }}</p>
        </div> -->

        <p>ciao</p>
        


</template>

<style scoped>

</style>