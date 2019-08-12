<template>
    <div class="verb">
        <div>
            {{ verb.german }}
        </div>
        <div>
            <label>Svenska: </label>
            <input type="text" placeholder="Att..." v-model.lazy="userInput.swedish" :class="feedbackClass(userInput.swedish, verb.swedish)">
        </div>
        <hr>
        <table class="verb-table">
            <tr>
                <td>
                    <label>Ich: </label>
                </td>
                <td>
                    <input type="text" v-model.lazy="userInput.ich" :class="feedbackClass(userInput.ich, verb.ich)">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Du: </label>
                </td>
                <td>
                    <input type="text" v-model.lazy="userInput.du" :class="feedbackClass(userInput.du, verb.du)">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Er/Sie/Es: </label>
                </td>
                <td>
                    <input type="text" v-model.lazy="userInput.ersiees" :class="feedbackClass(userInput.ersiees, verb.ersiees)">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Wir: </label>
                </td>
                <td>
                    <input type="text" v-model.lazy="userInput.wir" :class="feedbackClass(userInput.wir, verb.wir)">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Ihr: </label>
                </td>
                <td>
                    <input type="text" v-model.lazy="userInput.ihr" :class="feedbackClass(userInput.ihr, verb.ihr)">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Sie: </label>
                </td>
                <td>
                    <input type="text" v-model.lazy="userInput.sie" :class="feedbackClass(userInput.sie, verb.sie)">
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'VerbComponent',
    props: ['verb'],
    data() {
        return {
            userInput: {
                swedish: '',
                ich: '',
                du: '',
                ersiees: '',
                wir: '',
                ihr: '',
                sie: ''
            }
        }
    },
    methods: {
        feedbackClass(user, correct){
            if (user === '') {
                return '';
            }

            return user.toLowerCase() === correct.toLowerCase() ? 'correct' : 'wrong';
        }
    }
}
</script>

<style scoped>
.verb {
    width: 300px;
    border: 1px solid black;
    border-radius: 5px;
    padding:5px;
    margin: 5px;
    display: inline-block;
}
.correct {
    background-color: #abff5847;
    border: 3px solid #15771585;
    border-radius: 5px;
}
.wrong {
    background-color: #ff000047;
    border: 3px solid #9b181894;
    border-radius: 5px;
}
.verb-table tr td {
    width: 70px;
    text-align: left;
}
</style>
