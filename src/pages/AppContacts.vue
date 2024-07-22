<script>
import store from '../data/store.js';
export default {
    components: {
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {

    },

}

</script>

<template>
    <h2>qui sei in contacts</h2>
    <form action="">
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                placeholder="inserisci il tuo nome " />
            <small id="helpId" class="form-text text-muted">Help text</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Email</label>
            <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"
                placeholder="abc@mail.com" />
            <small id="emailHelpId" class="form-text text-muted">Help text</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">oggetto della mail</label>
            <textarea class="form-control" name="" id="" rows="2"></textarea>
        </div>




    </form>
</template>

<style scoped></style>