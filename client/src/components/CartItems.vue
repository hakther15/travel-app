<template>
    
        <h1 class="cart-title">My Cart</h1>

        <!--From cart items-->
        <div v-if="cart && cart.products && cart.products.length > 0" class="cart-list">
            <div v-for="item in filteredCart" :key="item.productId" class="cart-item">
                <h3 class="name-item">{{ item.productName }} </h3>
                <p class="cart-description">Quantity: <span class="quantity-item">{{ item.quantity }}</span></p>
                <p class="cart-description">Price: <span class="price-item">${{ item.price.toFixed(2) }}</span></p>
                <img :src="getImageUrl(item.imageName)" alt="Product Image" class="cart-img">
                <button @click="addItem(item.productId)" class="addRemove-item" title="Add">Add Item</button>
                <button @click="deleteItem(item.productId)" class="addRemove-item" title="Remove">Remove Item</button>
            </div>
            <div class="cart-summary">
                <h2 class="cart-summary">Cart Summary</h2>
                <p class="cart-description">Subtotal: {{ cart.subtotal }}</p>
                <p class="cart-description">Tax: {{ cart.tax }}</p>
                <p class="cart-description">Total: <span class="price-item"> {{ cart.grandTotal }} </span></p>
            </div>
        <button @click="clearCart" class="clearCart" title="Clear">Clear Cart</button>
        <button @click="checkout" class="checkout" title="Checkout">Proceed to Checkout</button>
        </div>
        
        <p v-else class="cart-description">Your cart is empty. <br /> 
            Visit our <router-link :to="{name: 'products'}" class="product-link" title="Products">products</router-link>!</p>
    
</template>

<script>
import cartService from '../services/cartService';

export default {
    data() {
    return {
      cart: {}
    };
  },

  computed: {
    filteredCart() {
        if (!this.cart || !this.cart.products) return [];
        return this.cart.products;
    }
},

    methods: {
        getImageUrl(imageName) {
            return new URL(`../img/${imageName}`, import.meta.url).href;
        },
        addItem(productId) {
            const product = this.cart.products.find(item => item.productId === productId);
            if(product) {
                const cartItem = {
                    userId: this.$store.state.user.userId,
                    productId: product.productId,
                    quantity: 1
                };
                cartService.post(cartItem)
                .then ((response) => {
                    alert('Added!');
                    this.getCart();
                })
                .catch((error) => {
                console.error('Error adding item to cart:', error);
                alert('Failed to add item to cart.');
            });
            }
        },

        decreaseQuantity(productId, currentQuantity) {
            if(currentQuantity > 1) {
                cartService.updateQuantity(productId, currentQuantity - 1)
                .then(() => {
                    this.getCart();
                    alert('Item removed/decreased.');
                })
                .catch((error) => {
                    console.error("Error updating item.", error);
                });
            } else {
                this.deleteItem(productId);
            }
        },

        deleteItem(productId) {
            if(confirm("Are you sure you want to remove this item?")) {
                cartService.delete(productId)
                .then(() => {
                    this.getCart();
                    alert("Item removed!");
                })
            }
        },

        clearCart() {
            if(confirm("Are you sure you want to clear your cart?")) {
                cartService.clear()
                .then(() => {
                    this.getCart();
                    alert('Cart cleared!');
                })
                .catch((error) => {
                    console.error('Error clearing cart.', error);
                    alert('Failed to clear cart.');
                })
            }
        },

        getCart() {
            cartService.get(this.$store.state.user.stateCode)
            .then ((response) => {
                this.cart = response.data;
            })
        },

        checkout() {
            alert('Feature coming soon!');
        }
    },
    created() {
        this.getCart();
    }
}
</script>

<style>
@import '../assets/style.css';

div.cart-list {
  margin: 50px 0 0 350px;
}

h1.cart-title {
  font-family: var(--header-text);
  color: var(--primary-color);
  font-size: 50px;
  margin: 30px 0 0 100px;
  text-decoration: underline;
}

button.addRemove-item {
  margin: 15px -60px 0 110px;
  padding: 5px;
  font-family: var(--button-text);
}

button.addRemove-item:hover,
button.checkout:hover,
button.clearCart:hover {
  background-color: var(--hover-color);
}

h3.name-item,
span.price-item,
span.quantity-item {
  color: var(--secondary-color);
}

.quantity-item,
.price-item {
  font-weight: bolder;
}

p.cart-description,
img.cart-img {
    margin-left: 110px;
    display: block;
}


img.cart-img {
    width: 200px;
}

h3 {
    margin-bottom: 0px;
}

.product-link {
    color: violet;
}

.product-link:hover {
    color: blue;
}

h2.cart-summary {
    text-align: left;
    color: pink;
    text-decoration: underline;
    margin: 50px 0 0 0;
}

button.checkout,
button.clearCart {
    margin: 10px;
    display: block;
    padding: 5px;
}

button.checkout {
    border: 2px solid magenta;
}

@media screen and (max-width: 600px) {
    div.cart-list {
        margin: 0 auto;
    }
}
</style>