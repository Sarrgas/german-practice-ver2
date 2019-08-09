<template>
    <div>
        <h2>Behold! The word page!</h2>
        <div v-for="num in numbers" :key="num">
            {{ num }}
        </div>
        <WordComponent :word="this.word" />
    </div>
</template>

<script>
import WordComponent from "./WordComponent.vue";

export default {
    name: 'WordPage',
    props: {
        numbers: Array
    },
    data() {
        return {
            word: {
                id: 0,
                the: 'der',
                german: 'Apfel',
                swedish: 'Äpple',
            }
        }
    },
    components: {WordComponent}
}
</script>

<style scoped>

</style>
