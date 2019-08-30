<template>
    <div id="content">
        <div class="note" v-for="(note, i) in notes" :key="i">
            <h3 v-html="note.title"></h3>
            <p v-html="note.text"></p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotePage',
    computed: {
        notes() {
            return this.$store.getters.getAllNotes;
        }
    }
}
</script>

<style scoped>
#content {
    text-align: left;
}
.note{
    text-align: left;
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
    width: 500px;
    margin: 5px;
    display:inline-block;
    vertical-align: top;
}
</style>
