<template>
    <div>
        <MenuOption linkTo="Nouns" :count="nounCount" divider="10" title="Substantiv" text="Översätt substantiv från Tyska till Svenska och välj rätt artikel (der, die, das)." />
        <MenuOption linkTo="Verbs" :count="verbCount" divider="10" title="Verb" text="Böj de tyska verben för olika personer (ich, du, er/sie/es, wir, ihr, sie)."/>
        <MenuOption linkTo="Adjectives" :count="adjectivesCount" divider="10" title="Adjektiv" text="Översätt adjektiv från Tyska till Svenska."/>
    </div>
</template>

<script>
import MenuOption from './MenuOption.vue';

export default {
    name: 'HomePage',
    components: {MenuOption},
    computed: {
        nounCount() {
            return this.$store.getters.getNounCount;
        },
        verbCount() {
            return this.$store.getters.getVerbCount;
        },
        adjectivesCount() {
            return this.$store.getters.getAdjectivesCount;
        }
    }
}
</script>

<style scoped>

</style>
