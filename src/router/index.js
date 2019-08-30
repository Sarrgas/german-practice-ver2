import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HomePage from '../Home/HomePage.vue';
import NounPage from '../Noun/NounPage.vue';
import VerbPage from '../Verb/VerbPage.vue';
import NotePage from '../Notes/NotePage.vue';
import AdjectivePage from '../Adjectives/AdjectivePage.vue';
import AddPage from '../Add/AddPage.vue';
import AddNoun from '../Add/AddNoun.vue';
import AddNote from '../Add/AddNote.vue';
import AddVerb from '../Add/AddVerb.vue';

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
            path: '/adjectives',
            name: 'Adjectives',
            props: true,
            component: AdjectivePage,
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
            children: [
                {
                    path: 'noun',
                    name: 'AddNoun',
                    component: AddNoun
                },
                {
                    path: 'verb',
                    name: 'AddVerb',
                    component: AddVerb
                },
                {
                    path: 'note',
                    name: 'AddNote',
                    component: AddNote
                }
            ]
        }
    ],
});