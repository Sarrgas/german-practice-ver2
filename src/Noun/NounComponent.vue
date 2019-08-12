<template>
    <div :class="['noun', answerColorClass]">
        <div>
            {{ noun.german }}    
        </div>
        <div>
            <input type="radio" 
                v-bind:name="noun.id"
                v-model="usrThe" 
                value="Der">
            <label>Der</label>
            <input type="radio" 
                v-bind:name="noun.id" 
                v-model="usrThe" 
                value="Die" >
            <label>Die</label>
            <input type="radio" 
                v-bind:name="noun.id" 
                v-model="usrThe" 
                value="Das" >
            <label>Das</label>        
        </div>
        <div>
            <input type="text" placeholder="Svenska..." v-model.lazy="usrSwedish">
        </div>
    </div>
</template>

<script>
export default {
    name: 'NounComponent',
    props: {
        noun: {}
    },
    data() {
        return {
            usrThe: '',
            usrSwedish: ''
        }
    },
    computed: {
        isAnswered() {
            return this.usrThe && this.usrSwedish;
        },
        isCorrect() {
            return this.isAnswered && 
                   this.usrThe.toLowerCase() === this.noun.the.toLowerCase() &&
                   this.usrSwedish.toLowerCase() === this.noun.swedish.toLowerCase();
        },
        answerColorClass(){
            if (!this.isAnswered) {
                return '';
            }
            return this.isCorrect ? 'correct' : 'wrong'
        }
    }
}
</script>

<style scoped>
.noun {
    width: 200px;
    border: 1px solid black;
    border-radius: 5px;
    padding:5px;
    margin: 5px;
    display: inline-block;
}
.correct {
    background-color: rgba(162, 250, 74, 0.623);
}
.wrong {
    background-color: rgba(250, 74, 74, 0.623);
}
</style>
