<template>
    <div>
        <h2>Behold! The word page!</h2>
        <div v-for="num in numbers" :key="num">
            {{ num }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'WordPage',
    props: {
        numbers: Array
    }
}
</script>

<style scoped>

</style>
