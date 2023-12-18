<template>
  <nav v-if="$route.path === '/'">
    <router-link to="/projectant">Страница Проектант</router-link>
    <br />
    <router-link to="/expert">Страница Эксперт</router-link>
    <br />
    <router-link to="/login">Страница Логин</router-link>
    <br />
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
