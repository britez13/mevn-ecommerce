<template>
    <section>
  <h1>This is my cart</h1>
  <div>
    <div v-for="product in getUserProducts" :key="product._id" >
        <p>{{ product.name }} {{ product.price }}</p>
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
