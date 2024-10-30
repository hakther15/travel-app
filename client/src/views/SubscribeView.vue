<template>
    <PageHeader />
    <NavButtons />

    <SubscribeForm />

    <PageFooter />
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import NavButtons from '../components/NavButtons.vue';
import SubscribeForm from '../components/SubscribeForm.vue';
import PageFooter from '../components/PageFooter.vue';

export default {
    components: {
        PageHeader,
        NavButtons,
        SubscribeForm,
        PageFooter
    }
}
</script>

<style>
</style>