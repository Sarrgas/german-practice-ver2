<template>
    <div class="menu-option">
        <div class="menu-option-button" v-on:click="clicked = !clicked">
            <h4>{{ title }}</h4>
            <span>{{ text }}</span>
        </div>
        <div class="menu-option-extender" v-if="clicked">
            <div>Pick your words:</div>
            <div v-for="(num, i) in dividerGenerator" :key="i" class="range-boxes">
                <input type="checkbox" :value="num" v-model="checkedBoxes"> {{num.min}} - {{num.max}}
            </div>
            <div>
                <router-link :to="{name: linkTo, params: {checkedBoxes}}"><button class="start-button">Start</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import allWords from '../data/words.js';
export default {
    name: 'MenuOption',
    props: ['title', 'text', 'linkTo'],
    data() {
        return {
            clicked: true,
            totalWordCount: allWords.length,
            dividerNumber: 2,
            checkedBoxes: []
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
    width: 350px;
    vertical-align: top;
}
.menu-option-button {
    border: 2px solid rgba(16, 83, 16, 0.787);
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(0, 133, 0, 0.541);
    padding: 5px;
    padding-bottom: 20px;
}
.menu-option-extender {
    border: 2px solid rgba(51, 121, 51, 0.787);
    padding: 5px;
    background-color: rgba(130, 185, 130, 0.698);
}
.range-boxes {
    display: inline-block;
    border: 2px solid rgba(229, 255, 229, 0.787);
    padding: 10px;
    margin: 3px;
}
.start-button {
    width: 300px;
}
</style>
