<template>
    <section class="flex flex-col items-center">
  <h1 class="text-gray-700 text-4xl text-center mt-4">This is my cart</h1>
  <div>
    <div class="flex" v-for="product in getUserProducts" :key="product._id" >
        <img class="max-w-[100px] w-[100px] h-[100px] max-h-[100px] object-contain" :src="product.photo" :alt="product.name">
        <div class="flex items-center gap-4">
        <p>{{ product.price }}</p>
        <p>{{ product.name }}</p>
        </div>
    </div>
  </div>
  </section>
  
</template>

<script>
export default {
  name: "Cart",
  computed: {
    getUserProducts() {
      return this.$store.state.userProducts
    },
  },
};
</script>
