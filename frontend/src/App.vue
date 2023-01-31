
<template>
  <div class="h-screen">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from "./store"
  export default {
    name: 'App',
    async created() {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const products = await res.json();
        store.commit('SET_ALL_PRODUCTS', products)
        console.log(this.$store.state.allProducts)

      } catch (error) {
        alert(error.message);
      }
    }
  }
</script>

