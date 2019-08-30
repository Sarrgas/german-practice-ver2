<template>
    <div>
        <h3>Lägg till ett nytt substantiv</h3>
        <div>
            <label for="">Der/Die/Das:</label>
            <input type="radio" name="the" value="der" v-model="the">
            <input type="radio" name="the" value="die" v-model="the">
            <input type="radio" name="the" value="das" v-model="the">
        </div>
        <div>
            <label for="">Tyska:</label>
            <input type="text" placeholder="Tyska" v-model="german">
        </div>
        <div>
            <label for="">Tyska plural:</label>
            <input type="text" placeholder="Tyska plural" v-model="plural">
        </div>
        <div>
            <label for="">Svenska:</label>
            <input type="text" placeholder="Svenska" v-model="swedish" >
        </div>
        
        <button @click="addNoun">Add</button>
    </div>
</template>

<script>
export default {

    name: 'AddNoun',
    data() {
        return {
            the: '',
            german: '',
            plural: '',
            swedish: ''
        }
    },
    methods: {
        addNoun() {
            const newNoun = {
                id: 999, // TEMP
                the: this.the,
                german: this.german,
                plural: this.plural,
                swedish: this.swedish
            };

            this.$store.commit('addNoun', newNoun);

            this.the = '';
            this.german = '';
            this.plural = '';
            this.swedish = '';
        }
    }
}
</script>

<style>

</style>