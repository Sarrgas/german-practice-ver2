<template>
    <div>
        <VerbComponent v-for="(verb, i) in sessionVerbs" :key="i" :verb="verb" />
    </div>
</template>

<script>
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
            return this.$store.getters.getSessionVerbs(this.numbers);
        }
    },
}
</script>

<style scoped>

</style>
