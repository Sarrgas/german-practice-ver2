<template>
  <div :class="['adjective', answerColorClass]">
      <div>
          {{ adjective.german }}
      </div>
      <div>
          <input type="text" v-model.lazy="usrSwedish" placeholder="Svenska...">
      </div>
  </div>
</template>

<script>
export default {
    name: 'AdjectiveComponent',
    props: {
        adjective: {}
    },
    data(){
        return {
            usrSwedish: ''
        }
    },
    computed: {
        isCorrect() {
            return this.usrSwedish.toLowerCase() === this.adjective.swedish.toLowerCase();
        },
        answerColorClass(){
            if (!this.usrSwedish) {
                return '';
            }
            return this.isCorrect ? 'correct' : 'wrong'
        }
    }
}
</script>

<style scoped>
.adjective {
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