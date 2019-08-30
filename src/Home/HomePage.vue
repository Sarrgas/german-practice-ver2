<template>
    <div>
        <MenuOption linkTo="Nouns" divider="10" title="Substantiv" text="Översätt substantiv från Tyska till Svenska och välj rätt artikel (der, die, das)." />
        <MenuOption linkTo="Verbs" divider="3" title="Verb" text="Böj de tyska verben för olika personer (ich, du, er/sie/es, wir, ihr, sie)."/>
        <MenuOption linkTo="Adjectives" divider="1" title="Adjektiv" text="Översätt adjektiv från Tyska till Svenska."/>
    </div>
</template>

<script>
import MenuOption from './MenuOption.vue';

export default {
    name: 'HomePage',
    components: {MenuOption},
}
</script>

<style scoped>

</style>
