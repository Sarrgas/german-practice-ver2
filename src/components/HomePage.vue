<template>
    <div>
        <MenuOption linkTo="Nouns" title="Substantiv" text="Översätt substantiv från Tyska till Svenska och välj rätt artikel (der, die, das)." />
        <MenuOption linkTo="Verbs" title="Verb" text="Böj de tysta verben för olika personer (ich, du, er/sie/es, wir, ihr, sie)."/>
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
