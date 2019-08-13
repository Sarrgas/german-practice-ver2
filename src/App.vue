<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home'}" exact> <div class="nav-item">Hem</div></router-link></li>
          <li><router-link :to="{name: 'Notes'}" exact> <div class="nav-item">Anteckningar</div></router-link></li>
          <li><router-link :to="{name: 'Add'}" exact> <div class="nav-item">Lägg till ord</div></router-link></li>
        </ul>
      </nav>
    </header>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main {
  margin-top: 40px;
}
.nav-item {
  padding: 20px;
}
nav ul li a {
  text-decoration: none;
  color: black;
}
.nav-item:hover {
  background-color: rgba(16, 136, 0, 0.52);
}
header {
  text-align: left;
}
nav {
  border: 1px solid green;
  border-radius: 5px;
  background-color: rgba(204, 255, 208, 0.74);
}
ul {
  margin: 0px;
}
nav ul li {
      display: inline-block;
      list-style-type: none;
}

.router-link-active {
  color: rgb(134, 134, 134);
  text-decoration: underline;
}

</style>
