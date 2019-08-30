<template>
    <div class="menu-option">
        <div class="menu-option-button" v-on:click="clicked = !clicked">
            <h4>{{ title }}</h4>
            <span>{{ text }}</span>
        </div>
        <div class="menu-option-extender" v-if="clicked">
            <div>
                Vilka ord vill du öva?
                <input type="checkbox" @click="selectAll">Alla
            </div>
            <div v-for="(num, i) in checkboxList" :key="i" class="range-boxes">
                <input type="checkbox" :value="num" v-model="checkedBoxes"> {{num.min}} - {{num.max}}
            </div>
            <div>
                <router-link :to="{name: linkTo, params: {checkedBoxes}}"><button class="start-button">Kör</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuOption',
    props: ['title', 'text', 'linkTo', 'divider'],
    data() {
        return {
            clicked: false,
            checkedBoxes: [],
            allSelected: false
        }
    },
    computed: {
        checkboxList() {
            let dividerNumber = parseInt(this.divider);
            let result = [];
            for (let index = 1; index <= this.dataCount; index++) {
                if (index % dividerNumber === 0) {
                    let min = 1 + index - dividerNumber;
                    let max = index;

                    result.push({min, max});
                }
            }
            return result;
        },
        dataCount() {
            if (this.linkTo === "Nouns") {
                return this.$store.getters.getNounCount;
            }
            else {
                return this.$store.getters.verbCount;
            }
        }
    },
    methods: {
        selectAll() {
            this.allSelected = !this.allSelected;
            this.checkedBoxes = [];
            if (this.allSelected) {
                let all = this.checkboxList;
                for (const cb of all) {
                    this.checkedBoxes.push(cb);
                }
            }
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
    z-index: 50;
    position: relative
}
.menu-option-button {
    border: 2px solid rgba(16, 83, 16, 0.787);
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(78, 202, 78);
    padding: 5px;
    padding-bottom: 20px;
}
.menu-option-extender {
    border: 2px solid rgba(51, 121, 51, 0.787);
    padding: 5px;
    background-color: rgba(130, 185, 130, 0.698);
    position: relative;
    animation-name: example;
    animation-duration: 0.3s;
    z-index: -5;
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

@keyframes example {
  from {position: relative; top: -120px}
  to {position: relative; top: -0px}
}
</style>
