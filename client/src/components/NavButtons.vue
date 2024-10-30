<template>
    <!--Navigation buttons-->
      <h2 class="subheader">Tips, tricks, and suggestions to feel like a <span class="highlight">local</span>, without the headaches of traveling</h2>
      <section class="subheader-buttons">
        <div class="nav-buttons">
    
          <!--Buttons-->
          <router-link :to="{name: 'subscribe'}">
            <button class="navigation-buttons" id="subscribe" title="Subscribe to Blog">Subscribe</button>
          </router-link>
          <router-link :to="{name: 'products'}">
            <button class="navigation-buttons" id="products" title="View products">Products</button>
          </router-link>
        </div>
      </section>

      <!--Dark/Light mode switch-->
      <div>
        <div id="toggle-switch">
          <button id="toggle-button" @click="toggleTheme" title="Switch mode">{{ buttonText }}</button>
        </div>
      </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data() {
    return {
      buttonText: 'Dark Mode'
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
      document.body.classList.add(savedTheme);
      this.buttonText = savedTheme === 'dark-mode' ? 'Light Mode' : 'Dark Mode';
    } else {
      document.body.classList.add('light-mode');
    }
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');

      if(document.body.classList.contains('dark-mode')) {
        this.buttonText = 'Light Mode';
      } else {
        this.buttonText = 'Dark Mode';
      }

      const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
      localStorage.setItem('theme', theme);
    },
  },
}
</script>

<style>
@import '../assets/style.css';

</style>