<template>
    <div>
        <MenuOption linkTo="Nouns" title="Nouns" text="Translate nouns from German to Swedish" />
        <MenuOption linkTo="Verbs" title="Verbs" text="Conjugate the German verbs"/>
    </div>
</template>

<script>
import MenuOption from './MenuOption.vue';

export default {
    name: 'HomePage',
    components: {MenuOption}
}
</script>

<style scoped>

</style>
