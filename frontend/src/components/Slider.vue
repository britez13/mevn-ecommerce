<template>
  <section class="h-[90vh] overflow-hidden">
    <div class="h-full text-black">
      <agile :autoplay="true" :autoplay-speed="5000" :speed="1000" :infinite="true" >
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

        <div class="h-full bg-gray-800">
            <img class="w-full h-[90vh] lg:object-cover object-top" src="/headphonePoster.jpg" alt="number" />    
        </div>
        <div class="h-full bg-gray-800">
            <img class="w-full h-[90vh] object-cover" src="/iphonePoster.jpeg" alt="number" />
        </div>
        <div class="h-full bg-gray-800">
            <img class="w-full h-[90vh] object-cover" src="/laptopPosterD.jpg" alt="number" />
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
