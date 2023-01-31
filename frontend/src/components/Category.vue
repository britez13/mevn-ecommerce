<template>
  <div class='max-w-[1000px] mx-auto'>
    <!-- <h1>CATEGORY {{ $route.path }} </h1> -->
    <h1>{{ getPathName.toUpperCase() }}</h1>
    <!-- <p>{{ getCategory }}</p> -->
    <ul class="grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
      <li v-for="product in getCategory" :key="product.id">
        <div class="w-[200px] md:w-[250px]">
          <img
            class="w-full"
            :src="product.photo"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import store from "../store";

export default {
  name: "Category",
  mounted() {},
  computed: {
    getPathName() {
      const route = useRoute();
      const path = computed(() => route.path);
      // console.log(path.value.split("/")[2])
      return path.value.split("/")[2];
    },
    getCategory() {
      const route = useRoute();
      const path = computed(() => route.path);
      const categoryName = path.value.split("/")[2];
      // console.log(this.$store.state.allProducts.map(product => {
      //     console.log(product.category, categoryName)
      //     return product
      // }))
      return this.$store.state.allProducts.filter(
        (product) => product.category === categoryName
      );
      // return this.$store.state.allProducts
    },
  },
};
</script>
