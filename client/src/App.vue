<template>
  <div id="cart-app">
    <header></header>
    <nav>
        <router-link @click=logout id="log" v-bind:to="{ name: 'logout' }" v-if=this.$store.state.token>
          Logout
        </router-link>
        <router-link id="log" v-bind:to="{ name: 'login' }" v-else>Login</router-link>
    </nav>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      confirm("Are you sure you want to logout?");
    }
  }
}
</script>

<style scoped>
@import './assets/style.css';
</style>