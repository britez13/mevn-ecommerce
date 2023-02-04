<template>
  <section class="h-[85vh] overflow-hidden">
    <div class="h-full text-black">
      <agile :autoplay="true" :autoplay-speed="4000" :speed="500" :infinite="true" >
        <!-- <img
          class='w-full h-full'
          src="/headphone.jpg"
          alt="number"
        />
        <img
          class='w-full h-full'
          src="/laptop.jpg"
          alt="number"
        /> -->
        <div class="h-full bg-gray-700">
          <!-- <p class="text-black">First slide</p> -->
          <img class="w-full h-[85vh] object-cover object-left " src="/phone-carousel.jpg" alt="number" />
        </div>
        <div class="h-full bg-gray-800">
          
            <img class="w-full h-[85vh] object-cover object-top" src="/laptop-carousel.jpg" alt="number" />
    
        </div>
      </agile>
    </div>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "Slider",
  components: {
    agile: VueAgile,
  },
};
</script>
