<template>
    <PageHeader />
    <NavButtons />
    
    <CartItems />

    <PageFooter />
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import NavButtons from '../components/NavButtons.vue';
import PageFooter from '../components/PageFooter.vue';
import CartItems from '../components/CartItems.vue';

export default {
    components: {
        PageHeader,
        NavButtons,
        PageFooter,
        CartItems
}
}
</script>

<style>
@import '../assets/style.css';
</style>