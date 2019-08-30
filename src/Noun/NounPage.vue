<template>
    <div>
        <NounComponent v-for="(w, i) in sessionNouns" :noun="w" :key="i"/>
    </div>
</template>

<script>
import NounComponent from "./NounComponent.vue";

export default {
    name: 'NounPage',
    props: {
        checkedBoxes: Array
    },
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
        sessionNouns() {
            return this.$store.getters.getSessionNouns(this.numbers);
        }
    },
    components: {NounComponent}
}
</script>

<style scoped>

</style>
