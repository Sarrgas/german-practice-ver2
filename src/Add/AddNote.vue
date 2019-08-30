<template>
    <div>
        <h3>Lägg till en ny anteckning.</h3>
        <div>
            <label for="">Titel:</label>
            <input type="text" placeholder="Titel" v-model="title">
        </div>
        <div>
            <label for="">Text:</label>
            <textarea name="text" id="" cols="30" rows="10" v-model="text"></textarea>
        </div>
        <button @click="commitNewNote">Add</button>
    </div>
</template>

<script>
export default {
    name: 'AddNote',
    data() {
        return {
            title: '',
            text: ''
        }
    },
    methods: {
        commitNewNote(){
            const newNote = {
                id: this.$store.getters.getNextNoteId,
                title: this.title,
                text: this.text
            };

            this.$store.dispatch('addNote', newNote);
            this.title = '';
            this.text = '';
        }
    }
}
</script>

<style>

</style>