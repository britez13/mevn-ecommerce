<template>
  <section class="min-h-[81vh] lg:w-[50%] lg:mx-auto">
    <h1 class="text-gray-700 text-4xl text-center mt-4">This is my cart</h1>
    <div class="w-[100%]">
      <div
        class="flex justify-between gap-6"
        v-for="product in getUserProducts"
        :key="product._id"
      >
        <div class="flex items-center">
          <img
            class="max-w-[100px] w-[100px] h-[100px] max-h-[100px] object-contain"
            :src="product.photo"
            :alt="product.name"
          />
          <p class="ml-4">{{ product.name }}</p>
        </div>
        <div class="flex justify-between w-[250px]">
          <div class="flex items-center">
            <div class="flex gap-2">
              <button
                @click="decreaseAmount(product._id)"
                class="bg-gray-500 text-white font-bold rounded-full w-6 h-6"
              >
                -
              </button>
              <p>{{ product.amount }}</p>
              <button
                @click="increaseAmount(product._id)"
                class="bg-gray-500 text-white font-bold rounded-full w-6 h-6"
              >
                +
              </button>
            </div>
            <p class="ml-2">${{ product.price }}</p>
          </div>
          <div class="flex items-center">
              <button @click="removeFromCart(product._id)" class="text-red-400">
                Remove
              </button>
            </div>
        </div>
      </div>
    </div>
    <div v-if="getTotalPrice">
      <p>Total Price ${{ getTotalPrice.toFixed(2) }}</p>
    </div>
  </section>
</template>

<script>
import store from "../store";
export default {
  name: "Cart",
  methods: {
    async increaseAmount(id) {
      store.dispatch("increaseAmount", id);
      const res = await fetch("http://localhost:5000/api/users/products", {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem(store.state.user.email)).token}`
        },
        body: JSON.stringify(store.getters.getUserProducts)
      })
      console.log(store.getters.getUserProducts)
    },
    async decreaseAmount(id) {
      store.dispatch("decreaseAmount", id);
      const res = await fetch("http://localhost:5000/api/users/products", {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem(store.state.user.email)).token}`
        },
        body: JSON.stringify(store.getters.getUserProducts)
      })
      console.log(store.getters.getUserProducts)
    },
    async removeFromCart(id) {
      store.dispatch("removeFromCart", id);
    },
  },
  computed: {
    getUserProducts() {
      return this.$store.state.userProducts;
    },
    getTotalPrice() {
      let price = 0;
      this.$store.state.userProducts.map((item) => {
        price = price + item.price * item.amount;
      });
      return price;
    },
  },
};
</script>
