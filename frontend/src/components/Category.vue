<template>
  <div class="max-w-[1000px] min-h-[450px] mx-auto mt-8">
    <!-- <h1>CATEGORY {{ $route.path }} </h1> -->
    <h1 class="text-center text-2xl font-bold text-gray-700 md:text-4xl" >{{ getPathName.toUpperCase() }}</h1>
    <!-- <p>{{ getCategory }}</p> -->
    <ul class="grid place-items-center md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
      <li class="block w-full" v-for="product in getCategory" :key="product._id">
        <div class="flex flex-col md:w-[280px] border border-spacing-1 shadow-md py-8 px-4">
          <img class="block w-full h-[200px] object-contain md:h-[250px]" :src="product.photo" :alt="product.name" />
          <p class="text-center mt-4">{{ product.name }}</p>
          <p class="font-bold text-center mt-4">${{ product.price }}</p>
          <button @click="onClick(product)" class="bg-blue-800 text-white px-4 py-2 mt-2">Add to cart</button>
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
  methods: {
    onClick(productToAdd) {
      if(store.state.user) {
        this.$store.dispatch("setUserProducts", productToAdd)
      }
      else {
        this.$router.push({path: "/login"})
      }
    }
  },
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
