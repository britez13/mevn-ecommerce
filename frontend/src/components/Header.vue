<template>
  <header
    class="flex justify-between items-center h-[90px] mx-auto px-2 bg-gray-900"
  >
    <router-link :to="{path: '/'}">
    <img class="w-[150px] lg:w-[250px]" src="/logo.png" />
    </router-link>
    <Navbar />
  </header>
</template>

<script>
    import Navbar from "./Navbar.vue"
export default {
  name: "HeaderComp",
  components: {
    Navbar
  }
};
</script>
