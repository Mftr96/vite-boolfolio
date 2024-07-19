//il file che indirizza alle rotte  della pagina

import {createRouter,createWebHistory} from 'vue-router';

//qui importo i componenti per le varie rotte

//------

//qui creo la const router che crea le rotte come in laravel il file web.php
const router =createRouter({
    history:createWebHIstory(),
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