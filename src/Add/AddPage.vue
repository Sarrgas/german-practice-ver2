<template>
    <div>
        <nav class="inner-nav">
            <ul>
                <li><router-link to="/add/noun">Go to nouns</router-link></li>
                <li><router-link to="/add/verb">Go to verb</router-link></li>
                <li><router-link to="/add/note">Go to notes</router-link></li>
            </ul>
        </nav>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddPage',
}
</script>

<style scoped>
.content {
    float: left;
}

.inner-nav {
    background-color: rgb(218, 253, 247);
    padding: 20px;
    margin-top: -30px;
    width: 50%;
}

.inner-nav ul {
    margin-top: -7px;
    padding: 0px;
}

.inner-nav ul li {
    margin: 0 10px;
    float: left;
}
</style>