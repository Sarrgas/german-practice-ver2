<template>
    <div>
        <h2>And this is the glorious Verb page!</h2>
        <div v-for="(verb, i) in allVerbs" :key="i">
            <VerbComponent :verb="verb" />
        </div>
    </div>
</template>

<script>
import allVerbs from '../data/verbs.js';
import VerbComponent from './VerbComponent.vue';

export default {
    name: 'VerbPage',
    props: {
        numbers: Array
    },
    components: {VerbComponent},
    data() {
        return {
            allVerbs
        }
    }
}
</script>

<style scoped>

</style>
