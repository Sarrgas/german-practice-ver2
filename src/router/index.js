import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HomePage from '../Home/HomePage.vue';
import NounPage from '../Noun/NounPage.vue';
import VerbPage from '../Verb/VerbPage.vue';

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/nouns',
            name: 'Nouns',
            props: true,
            component: NounPage,
        },
        {
            path: '/verbs',
            name: 'Verbs',
            props: true,
            component: VerbPage,
        }
    ],
});