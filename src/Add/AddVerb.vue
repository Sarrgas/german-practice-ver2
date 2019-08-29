<template>
    <div>
        <h3>Lägg till ett nytt verb</h3>
        <div>
            <label for="">Tyska:</label>
            <input type="text" placeholder="Tyska" v-model="german">
        </div>
        <div>
            <label for="">Svenska:</label>
            <input type="text" placeholder="Svenska" v-model="swedish">
        </div>
        <div>
            <label for="">Ich:</label>
            <input type="text" placeholder="Ich" v-model="ich">
        </div>
        <div>
            <label for="">Du:</label>
            <input type="text" placeholder="Du" v-model="du">
        </div>
        <div>
            <label for="">Er/Sie/Es.</label>
            <input type="text" placeholder="Er/Sie/Es" v-model="ersiees">
        </div>
        <div>
            <label for="">Wir:</label>
            <input type="text" placeholder="Wir" v-model="wir">
        </div>
        <div>
            <label for="">Ihr:</label>
            <input type="text" placeholder="Ihr" v-model="ihr">
        </div>
        <div>
            <label for="">Sie:</label>
            <input type="text" placeholder="Sie" v-model="sie">
        </div>
        <button @click="addVerb">Add</button>
    </div>
</template>

<script>
export default {
    name: 'AddVerb',
    data() {
        return {
            german: '',
            swedish: '',
            ich: '',
            du: '',
            ersiees: '',
            wir: '',
            ihr: '',
            sie: ''
        }
    },
    methods: {
        addVerb() {
            const newVerb = {
                id: 999, //TEMP
                german: this.german,
                swedish: this.swedish,
                ich: this.ich,
                du: this.du,
                ersiees: this.ersiees,
                wir: this.wir,
                ihr: this.ihr,
                sie: this.sie
            };

            this.$store.commit('addVerb', newVerb);

            this.german = '';
            this.swedish = '';
            this.ich = '';
            this.du = '';
            this.ersiees = '';
            this.wir = '';
            this.ihr = '';
            this.sie = '';


        }
    }
}
</script>

<style>

</style>