//il file che indirizza alle rotte  della pagina

import { createRouter, createWebHistory } from 'vue-router';
import AppProjects from './pages/AppProjects.vue';
import AppHome from './pages/AppHome.vue';
import AppContacts from './pages/AppContacts.vue';
import AppAbout from './pages/AppAbout.vue';

//qui importo i componenti per le varie rotte

//------

//qui creo la const router che crea le rotte come in laravel il file web.php
const router = createRouter({
    history: createWebHistory(),
    //chi andranno messe le rotte tipo laravel, anche se qui vanno messe in forma d'oggetto
    routes: [
        {
            /*esempio rotta 
            path:qui va messa la rotta (es: '/')
            name:nome della rotta:(es: 'home')
            component:nome del componenta preso da pages:(es.AppHome)*/
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts,
        },
    ]
});
//chiusura createRouter tonda-graffa

//faccio export del router
export { router };