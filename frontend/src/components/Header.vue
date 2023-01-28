<template>
  <header
    class="flex justify-between items-center max-w-[1000px] h-[10%] mx-auto px-4"
  >
    <h1>Logo</h1>
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
