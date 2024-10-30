<template>
  <PageHeader />
  <NavButtons />

  <div id="register">
    <form v-on:submit.prevent="register" class="">
      <h1>Create Account</h1>
      <div id="fields">
        <div>
          <label for="username" id="register">Username</label>
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
          <label for="name" id="register">Name</label>
          <input
            type="text"
            id="registerName"
            placeholder="Name"
            v-model="user.name"
            autocomplete="off"
            required
            autofocus
          />
        </div>
      <div>
        <label for="password" id="register">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="user.password"
            required
          />
      </div>
        <div>
          <label for="confirmPassword" id="register">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              v-model="user.confirmPassword"
              required
            />
        </div>
        <div>
          <label for="address" id="register">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Address"
              v-model="user.address" 
              autocomplete="off"
            />
        </div>
        <div>
          <label for="city" id="register">City</label>
            <input 
              type="text" 
              id="city" 
              placeholder="City" 
              v-model="user.city" 
              autocomplete="off"
            />
        </div>
        <div>
          <label for="state" id="register">State</label>
            <input
              type="text"
              id="state"
              placeholder="State"
              v-model="user.stateCode"
              maxlength="2" 
              autocomplete="off"
              required
            />
        </div>
        <div>
          <label for="zip" id="register">ZIP</label>
            <input
              type="number"
              id="zip"
              placeholder="ZIP"
              v-model="user.zip"
              required
              minlength="5"
              maxlength="5"
              autocomplete="off"
            />
        </div>
        <div id="complete-form">
          <button type="submit">Create Account</button>
        </div>
      </div>
      <hr />
      Have an account?
      <router-link id="sign" v-bind:to="{ name: 'login' }">Sign in!</router-link>
    </form>
  </div>
  <PageFooter />
</template>

<script>
import authService from "../services/AuthService";
import PageHeader from "../components/PageHeader.vue";
import NavButtons from "../components/NavButtons.vue";
import PageFooter from "../components/PageFooter.vue";

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
        name: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        stateCode: "",
        zip: "",
        role: "user",
      },
    };
  },
  methods: {
    error(msg) {
      alert(msg);
    },
    success(msg) {
      alert(msg);
    },
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.error("Password & Confirm Password do not match");
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.success("Thank you for registering, please sign in.");
              this.$router.push({
                path: "/login",
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            if (!response) {
              this.error(error);
            } else if (response.status === 400) {
              if (response.data.errors) {
                // Show the validation errors
                let msg = "Validation error: ";
                for (let err of response.data.errors) {
                  msg += `'${err.field}':${err.defaultMessage}. `;
                }
                this.error(msg);
              } else {
                this.error(response.data.message);
              }
            } else {
              this.error(response.data.message);
            }
          });
      }
    },
  },
};
</script>

<style scoped>
@import '../assets/style.css';
</style>
