<template>
  <PageHeader />
  <NavButtons />
  <div id="login">
    <form v-on:submit.prevent="login">
      <h1>Please Sign In</h1>
      <div id="fields">
        <div>
          <label for="username" id="username-login">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              v-model="user.username" 
              autocomplete="off"
              required
              autofocus
            />
        </div>
        <div>
          <label for="password" id="password-login">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              v-model="user.password"
              required
            />
          </div>
        <div id="complete-form"><button type="submit">Sign in</button></div>
      </div>
      <hr/>
      Need an account? <router-link id="sign" v-bind:to="{ name: 'register' }">Register!</router-link>
    </form>
  </div>
  <PageFooter />
</template>

<script>
import authService from "../services/AuthService";
import PageHeader from "../components/PageHeader.vue";
import NavButtons from "../components/NavButtons.vue";
import PageFooter from "../components/PageFooter.vue"

export default {
  components: {
    PageHeader,
    NavButtons,
    PageFooter
  },

  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            const redirectPath = this.$route.query.redirect || '/';
            this.$router.push(redirectPath);
          }
        })
        .catch((error) => {
          const response = error.response;
          if (!response) {
            alert(error);
          } else if (response.status === 401) {
            alert("Invalid username and password. Please try again.");
          } else {
            alert(response.message);
          }
        });
    },
  },
};
</script>

<style scoped>
@import '../assets/style.css';
</style>
