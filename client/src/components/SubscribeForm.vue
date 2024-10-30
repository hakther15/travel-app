<template>
    <section class="subscribe-form">
            
            <form @submit.prevent = "handleSubmit" class="subscribe-form">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" v-model="name" id="name" autocomplete="off" autofocus required>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" v-model="email" id="email" autocomplete="off" autofocus required>
                </div>
                <div>
                    <label for="wish-destination">Wish destination:</label>
                    <select v-model="wishDestination" id="wish-destination">
                        <option value="">-Please choose one-</option>
                        <option value="New York">New York</option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="Paris">Paris</option>
                        <option value="Toronto">Toronto</option>
                        <option value="London">London</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Rio">Rio de Janeiro</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Sydney">Sydney</option>
                    </select>
                </div>
                <div id="comment-section">
                    <label for="comments">Please let me know any comments/questions you have!</label>
                    <div><textarea v-model="comments" id="comments" cols="100" rows="5" autofocus></textarea></div>
                </div>
                <div>
                    <label for="confirmation">Confirm information is correct:</label>
                    <input type="checkbox" v-model="confirmation" id="confirmation" required>
                </div>
                <div>
                    <button type="submit" title="Submit" id="submit" class="navigation-buttons">Submit</button>
                </div>
            </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            wishDestination: '',
            comments: '',
            confirmation: false,
        }
    },
    methods: {
        handleSubmit() {
            if(this.name && this.email && this.confirmation) {
                alert("Thank you for subscribing! Please check your email.");
                this.resetForm();
            } else {
                alert("Please complete all required fields.");
            }
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.wishDestination = '';
            this.comments = '';
            this.confimration = false;
        }
    }
}
</script>

<style>
</style>