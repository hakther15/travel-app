<template>
  <div>
    <nav>
      <!--Hamburger icon for Responsive-->
      <button @click="showMenu" class="menu-icon">
        <img src="@/assets/menu-icon.svg" alt="menu" class="icon-img">
      </button>
        <div :class="showMobileMenu ? 'open-menu' : 'closed-menu'" class="nav-content">
          <ul class="nav-items">
            <li class="nav-link">
              <router-link :to="{name: 'home'}" title="Home" class="menu-link">
                Home
              </router-link>
            </li>
            <li class="nav-link">
              <router-link :to="{name: 'userProfile'}" title="Profile" class="menu-link">
                Profile
              </router-link>
            </li>
            <li class="nav-link"><router-link :to="{name: 'cart'}" title="Cart" class="menu-link">
              Cart
            </router-link>
          </li>
            <li class="nav-link">
              <router-link class="menu-link" v-bind:to="{ name: this.$store.state.token ? 'logout' : 'login'}">
                {{ this.$store.state.token ? 'Logout' : 'Login' }}
              </router-link>
            </li>
          </ul>
        </div>

      <!--Navigation Links-->
        <router-link :to="{name: 'home'}" title="Home" class="home">
          <img src="@/assets/globe-img.svg" alt="home-icon" class="home-icon">
        </router-link>
        <h1 class="header" id="top">Local Traveling (with Sina)</h1>
        <router-link :to="{name: 'userProfile'}" title="Profile" class="myProfile">
          <img src="@/assets/profile-icon.svg" alt="profile-icon" class="profile-icon">
        </router-link>
        <router-link :to="{name: 'cart'}" title="Cart" class="cart">
          <img src="@/assets/shopping-icon.svg" alt="cart-icon" class="cart-icon">
        </router-link>
      </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
}
</script>

<style>
@import '../assets/style.css';

</style>