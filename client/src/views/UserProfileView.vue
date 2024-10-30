<template>
    <PageHeader />
    <NavButtons />

    <div class="user-profile">
        <h3 class="header">User Profile</h3>
        <div class="user-info">
            <p>Username: <span>{{ user.username }}</span></p>
            <p>Address: <span>{{ user.address }}</span></p>
            <p>City: <span>{{ user.city }}</span></p>
            <p>State: <span>{{ user.stateCode }}</span></p>
            <p>ZIP: <span>{{ user.zip }}</span></p>
        </div>
  </div>

    <PageFooter />
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import NavButtons from '../components/NavButtons.vue';
import PageFooter from '../components/PageFooter.vue';

export default {
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    components: {
        PageHeader,
        NavButtons,
        PageFooter
    }
}
</script>

<style>
@import '../assets/style.css'
</style>