# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
----
esecuzione repo vite-boolfolio

Milestone 3 nome repo 2: vite-boolfolio
Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios. Colleghiamo questo progetto ad una repo separata.

Milestone 4
Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end. Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.

Milestone 5
Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.
----
esecuzione milestone 4:

andare a creare chiamata axios che vada a recuperare i dati dal progetto laravel.
esecuzione:

vado a costruire nel file app.vue la struttura js di vue 

importo axios nel file app.vue

vado a spezzettare il link della chiamata axios nei data salavando la base del link 

-------------

inizia ad implementare il sistema di rotte lato vue, creando quattro rotte: home,  about, projects e contacts.

crea i componenti pagina da associare alle quattro rotte: AppHome, AppAbout, AppProjects, AppContacts.

trasferisci la logica usata ieri per il recupero dei progetti nel componente dedicato AppProjects che hai servito tramite la rotta projects
----

esecuzione:
eseguito comando 
```bash
npm install vue-router@4
```
che aggiorna i file package-lock e package

successivamente compilare il file router.js come da slide
```javascript
//il file che indirizza alle rotte  della pagina

import {createRouter,createWebHistory} from 'vue-router';

//qui importo i componenti per le varie rotte

//------

//qui creo la const router che crea le rotte come in laravel il file web.php
const router =createRouter({
    history:createWebHistory(),
    //chi andranno messe le rotte tipo laravel, anche se qui vanno messe in forma d'oggetto
    routes:[
        {
            /*esempio rotta 
            path:qui va messa la rotta (es: '/')
            name:nome della rotta:(es: 'home')
            component:nome del componenta preso da pages:(es.AppHome)
            
            */

        }


    ]
});
//chiusura createRouter tonda-graffa

//faccio export del router
export {router};

```
creare cartella pages in cui ci sono i macro-commponenti;ovvero le pagine lato-frontend

andare a lavorare su ProjectCard per scomporre il codice 
andare a mettere i dati in un file store.js

inserire ProjectCard in un componente da pages

creare le pages:crea i componenti pagina da associare alle quattro rotte: AppHome, AppAbout, AppProjects, AppContacts.

andare poi a scrivere le rotte nel file route.js relative ai componenti menzionati qui sopra 

per quanto riguarda la parte di app.vue, importare i componenti Appheader e routerView per metterli poi nel template

```javascript
//importo componente AppHeader per le rotte della pagina
import AppHeader from './components/AppHeader.vue';
//importo RouterView (non è da mettere nei components di App.vue!)
import { RouterView } from 'vue-router';


```
<template>
  <AppHeader></AppHeader>
  <router-view></router-view>

</template>

nel file AppHeader verrà poi strutturata la rotta tramite router-link (da importare nel file )

```javascript
import { RouterLink } from 'vue-router';

```
il Router link ha un attributo(:to) che va ad indirizzare alla rotta designata nel seguente modo 
"{ name:nome rotta }";in questo caso ho recuperato il nome della rotta tramite ciclo di array menuItems
<li v-for="(item, index) in menuItems" :key="index">
    <!-- invece che il tag anchor uso router link per indirizzare alle pagine -->
    <router-link :to="{ name:menuItems[index] }" class="nav-link">
    {{ menuItems[index] }}</router-link>
</li>
-------
Oggi proseguite con l'implementazione di vue-router come visto stamattina in classe, stesse repo di ieri.
Descrizione:
completa implementazione assegnata venerdi (se incompleta)
LARAVEL: crea un nuovo endpoint API per gestire le richieste per i singoli progetti

VUE: Crea componente per mostrare il singolo progetto e fai partire da li una nuova chiamata all'endpoint appena creato

Bonus:
Implementazione della rotta catch all e pagina 404
aggiungi lo slug ai progetti, ricordandoti di aggiornare sia la parte di Laravel  che Vue (fate una branch separata).

parte vue:dopo essersi assicurato che la chiamata api creata funziona andiamo a creare la vista(pardon,la pagina )SingleProject e di inserirlo nelle rotte del file router.js.
La rotta nel file router.js dovrà avere anche il parametro dell'id per essere visualizzata 
```javascript
        {   
            /*inserisco alla fine del path con i due punti 
            il parametro da passare,ovvero l'id che viene poi usato
             dalla chiamata API per eseguire la chiamata asincrona*/
            path:'projects/:id',
            name:'singleproject',
            component:SingleProject
        },
```
attenzione per quanto riguarda la chiamata axios del SingleProject, bisogna usare il $route

```javascript
    axios.get(`http://127.0.0.1:8000/api/projects/ ${this.$route.params.id}`)
    .then((response) => {
        //attenzione che nella chiamata api lo hai chiamato project(giustamente perché è singolo!
        this.store.progetto = response.data.project;
        console.log(this.store.progetto)
    });

```

nel bonus viene richiesto l'implementazione della pagina NotFound, quindi bisognerà creare 
una pagina con relativa rotta
