<template>
    <div>
        <div v-for="(verb, i) in sessionVerbs" :key="i">
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
        checkedBoxes: Array
    },
    components: {VerbComponent},
    computed: {
        numbers() {
            let nums = [];
            for (const box of this.checkedBoxes) {
                for (let num = box.min; num <= box.max; num++) {
                    nums.push(num);
                }
            }
            return nums;
        },
        sessionVerbs() {
            return allVerbs.filter(verb => this.numbers.includes(verb.id));
        }
    },
}
</script>

<style scoped>

</style>
