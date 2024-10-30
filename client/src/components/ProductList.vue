<template>
    <div id="product-table">
    <div v-for="product in products" :key="product.productId" class="product">
      <!-- Product Image -->
      <img :src="getImageUrl(product.imageName)" :alt="product.name" :title="product.name" class="product-img" />

      <!-- Product Content -->
      <div class="product-content">
        <h3 class="product-title">{{ product.name }}</h3>
        <p>
          <span class="p-price">${{ product.price.toFixed(2) }}</span><br />
          <span class="descriptors">{{ product.description }}</span>
        </p>

        <!-- Add to Cart Button -->
        <button class="add-cart" @click="addToCartMessage(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { resourceService } from '@/services/resourceService'; 
import cartService from '../services/cartService';

export default {
    name: 'ProductList',
        data() {
            return {
                products: []
            }
        },
    
    mounted(){
        this.getProducts();
    },
    methods: {
        getProducts() {
            this.products = resourceService.getResources();
        },
        getImageUrl(imageName) {
            return new URL(`../img/${imageName}`, import.meta.url).href;
        },
        addToCartMessage(product) {
    if(!this.$store.state.token) {
        alert('Please log in or create an account to add to your cart.');
    } else {     
        let cartItem = {
            userId: this.$store.state.user.userId,
            productId: product.productId,
            quantity: 1
        };
        cartService.post(cartItem)
        .then((response) => {
            alert('Added!');
        })
        .catch((error) => {
            console.error('Error adding item to cart:', error.response ? error.response.data : error.message);
            alert('Failed to add item to cart. ' + (error.response ? error.response.data : error.message));
        });
    }
    }
}
    }

</script>

<style>
@import '../assets/style.css';

</style>