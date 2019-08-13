import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HomePage from '../Home/HomePage.vue';
import NounPage from '../Noun/NounPage.vue';
import VerbPage from '../Verb/VerbPage.vue';
import NotePage from '../Notes/NotePage.vue';
import AddPage from '../Add/AddPage.vue';

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
        },
        {
            path: '/notes',
            name: 'Notes',
            component: NotePage,
        },
        {
            path: '/add',
            name: 'Add',
            component: AddPage,
        }
    ],
});