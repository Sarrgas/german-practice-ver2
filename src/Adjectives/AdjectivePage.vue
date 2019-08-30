<template>
  <div>
      <AdjectiveComponent v-for="(ad, i) in sessionAdjectives" :key="i"/>
  </div>
</template>

<script>
import AdjectiveComponent from "./AdjectiveComponent";
export default {
    name: 'AdjectivePage',
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
        sessionAdjectives() {
            return this.$store.getters.getSessionAdjectives(this.numbers);
        }
    },
    components: {AdjectiveComponent}
}
</script>

<style scoped>

</style>