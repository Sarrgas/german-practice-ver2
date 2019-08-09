<template>
    <div>
        <MenuOption title="Words" text="Translate from German to Swedish" />
        <MenuOption title="Verbs" text="Conjugate the German verbs"/>
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
