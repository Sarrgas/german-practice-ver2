<template>
    <div>
        <router-link to="/add/noun">Go to nouns</router-link>
        <router-link to="/add/verb">Go to verb</router-link>
        <router-link to="/add/note">Go to notes</router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'AddPage',
    components: {

    }
}
</script>

<style scoped>

</style>