<template>
    <PageHeader />
    <NavButtons />

    <ProductList />


    <PageFooter />
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import NavButtons from "../components/NavButtons.vue";
import ProductList from "../components/ProductList.vue";
import PageFooter from "../components/PageFooter.vue";

export default {
  name: 'ProductsView',
    components: {
        PageHeader,
        NavButtons,
        ProductList,
        PageFooter
    }

}
</script>

<style>
@import '../assets/style.css';
</style>