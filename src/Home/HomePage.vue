<template>
    <div>
        <MenuOption linkTo="Nouns" divider="10" :data="allNouns" title="Substantiv" text="Översätt substantiv från Tyska till Svenska och välj rätt artikel (der, die, das)." />
        <MenuOption linkTo="Verbs" divider="3" :data="allVerbs" title="Verb" text="Böj de tysta verben för olika personer (ich, du, er/sie/es, wir, ihr, sie)."/>
    </div>
</template>

<script>
import MenuOption from './MenuOption.vue';
import allNouns from '../data/nouns.js';
import allVerbs from '../data/verbs.js';

export default {
    name: 'HomePage',
    components: {MenuOption},
    data() {
        return {
            allNouns,
            allVerbs
        }
    }
}
</script>

<style scoped>

</style>
