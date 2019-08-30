<template>
  <div>
      <h1>Das grosse AdjectivePage!</h1>
  </div>
</template>

<script>
export default {
    name: 'AdjectivePage',
    props: {
        checkBoxes: Array
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
            return null;// this.$store.getters.getSessionAdjectives(this.numbers);
        }
    },
}
</script>

<style scoped>

</style>