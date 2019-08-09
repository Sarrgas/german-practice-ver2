<template>
    <div>
        <MenuOption linkTo="/words" title="Words" text="Translate from German to Swedish" />
        <MenuOption linkTo="/verbs" title="Verbs" text="Conjugate the German verbs"/>
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
