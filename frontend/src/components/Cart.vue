<template>
  <section class="min-h-[400px] flex flex-col items-center">
    <h1 class="text-gray-700 text-4xl text-center mt-4">This is my cart</h1>
    <div>
      <div
        class="flex gap-6"
        v-for="product in getUserProducts"
        :key="product._id"
      >
        <img
          class="max-w-[100px] w-[100px] h-[100px] max-h-[100px] object-contain"
          :src="product.photo"
          :alt="product.name"
        />
        <div class="flex items-center gap-4">
          <p>{{ product.name }}</p>
          <div class="flex gap-2">
            <button @click='decreaseAmount(product._id)' class="bg-gray-500 text-white font-bold rounded-full w-6 h-6">-</button>
            <p>{{ product.amount }}</p>
            <button @click='increaseAmount(product._id)' class="bg-gray-500 text-white font-bold rounded-full w-6 h-6">+</button>
          </div>
          <p>${{ product.price }}</p>
        </div>
        <div>
          <button @click='removeFromCart(product._id)' class="text-red-400" >Remove</button>
        </div>
      </div>
      <div v-if="getTotalPrice" >
          <p>Total Price ${{ getTotalPrice }}  </p>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../store"
export default {
  name: "Cart",
  methods: {
    increaseAmount(id) {
      store.dispatch("increaseAmount", id)
    },
    decreaseAmount(id) {
      store.dispatch("decreaseAmount", id)
    },
    removeFromCart(id) {
      store.dispatch("removeFromCart", id)
    }
  },
  computed: {
    getUserProducts() {
      return this.$store.state.userProducts;
    },
    getTotalPrice() {
    let price = 0
    this.$store.state.userProducts.map(item => {
      price = price + item.price * item.amount
    }) 
    return price
  }
  },
  
};
</script>
