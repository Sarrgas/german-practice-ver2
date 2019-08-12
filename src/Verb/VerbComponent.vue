<template>
    <div class="verb">
        <div>
            {{ verb.german }}
        </div>
        <div>
            <label>Svenska: </label>
            <input type="text" placeholder="Att...">
        </div>
        <hr>
        <table class="verb-table">
            <tr>
                <td>
                    <label>Ich: </label>
                </td>
                <td>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Du: </label>
                </td>
                <td>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Er/Sie/Es: </label>
                </td>
                <td>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Wir: </label>
                </td>
                <td>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Ihr: </label>
                </td>
                <td>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    <label>Sie: </label>
                </td>
                <td>
                    <input type="text">
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'VerbComponent',
    props: ['verb']
}
</script>

<style scoped>
.verb {
    width: 300px;
    border: 1px solid black;
    border-radius: 5px;
    padding:5px;
    margin: 5px;
}
.correct {
    background-color: rgba(162, 250, 74, 0.623);
}
.wrong {
    background-color: rgba(250, 74, 74, 0.623);
}
.verb-table tr td {
    width: 70px;
    text-align: left;
}
</style>
