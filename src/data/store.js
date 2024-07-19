//importazione per creare i dati reattivi
import {reactive} from "vue";
//creazione di variabile con reactive(reactive è funzione con argomento un oggetto con la lista di elementi da esportare)
const store=reactive({
    base_link:"http://127.0.0.1:8000/",
    progetti:"",
    link_axios:"http://127.0.0.1:8000/api/projects",
})
//faccio export dei dati tramite la variabile store
export default store;