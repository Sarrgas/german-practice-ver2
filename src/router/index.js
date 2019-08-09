import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HomePage from '../components/HomePage.vue';
import WordPage from '../components/WordPage.vue';
import VerbPage from '../components/VerbPage.vue';

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/words',
            name: 'Words',
            component: WordPage,
        },
        {
            path: '/verbs',
            name: 'Verbs',
            component: VerbPage,
        }
    ],
});