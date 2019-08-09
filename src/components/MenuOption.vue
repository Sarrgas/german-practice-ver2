<template>
    <div class="menu-option">
        <div class="menu-option-button" v-on:click="clicked = !clicked">
            <h4>{{ title }}</h4>
            <span>{{ text }}</span>
        </div>
        <div class="menu-option-extender" v-if="clicked">
            <span>Alla ord eller bara några?</span>
            <div v-for="(num, i) in dividerGenerator" :key="i">
                <input type="checkbox"> {{num.min}} - {{num.max}}
            </div>
            <button>Start</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuOption',
    props: ['title', 'text'],
    data() {
        return {
            clicked: true,
            totalWordCount: 50,
            dividerNumber: 10
        }
    },
    computed: {
        dividerGenerator() {
            let result = [];
            for (let index = 1; index <= this.totalWordCount; index++) {
                if (index % this.dividerNumber === 0) {
                    let min = 1 + index - this.dividerNumber;
                    let max = index;

                    result.push({min, max});
                }
            }
            return result;
        }
    }
}
</script>

<style scoped>
.menu-option {
    display: inline-block;
    margin: 5px;
    padding: 5px;
    padding-bottom: 20px;
}
.menu-option-button {
    border: 2px solid rgba(16, 83, 16, 0.787);
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(0, 133, 0, 0.541);
}
.menu-option-extender {
    border: 2px solid rgba(51, 121, 51, 0.787);
    padding: 5px;
    background-color: rgba(130, 185, 130, 0.698);
}
</style>
