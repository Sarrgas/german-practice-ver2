<template>
    <div>
        <h2>And this is the glorious Verb page!</h2>
        <div v-for="num in numbers" :key="num">
            {{ num }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'VerbPage',
    props: {
        numbers: Array
    }
}
</script>

<style scoped>

</style>
