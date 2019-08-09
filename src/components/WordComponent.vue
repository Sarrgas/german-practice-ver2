<template>
    <div :class="['word', answerColorClass]">
        <div>
            {{ word.german }}    
        </div>
        <div>
            <input type="radio" 
                v-bind:name="word.id"
                v-model="usrThe" 
                value="Der">
            <label>Der</label>
            <input type="radio" 
                v-bind:name="word.id" 
                v-model="usrThe" 
                value="Die" >
            <label>Die</label>
            <input type="radio" 
                v-bind:name="word.id" 
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
    name: 'WordComponent',
    props: {
        word: {}
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
                   this.usrThe.toLowerCase() === this.word.the.toLowerCase() &&
                   this.usrSwedish.toLowerCase() === this.word.swedish.toLowerCase();
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
.word {
    width: 200px;
    border: 1px solid black;
    border-radius: 5px;
    padding:5px;
    margin: 5px;
}
.correct {
    background-color: rgba(162, 250, 74, 0.623);
}
.wrong {
    background-color: rgba(250, 74, 74, 0.623);
}
</style>
