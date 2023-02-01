<template>
  <header
    class="flex justify-between items-center h-[90px] mx-auto px-4 bg-gray-900"
  >
    <img class="w-[150px] lg:w-[250px]" src="/logo.png" />
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
