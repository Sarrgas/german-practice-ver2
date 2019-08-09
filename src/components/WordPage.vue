<template>
    <div>
        <WordComponent v-for="(w, i) in sessionWords" :word="w" :key="i"/>
    </div>
</template>

<script>
import WordComponent from "./WordComponent.vue";
import allwords from '../data/words';


export default {
    name: 'WordPage',
    props: {
        numbers: Array
    },
    computed: {
        sessionWords() {
            return allwords.filter(word => this.numbers.includes(word.id));
        }
    },
    components: {WordComponent}
}
</script>

<style scoped>

</style>
