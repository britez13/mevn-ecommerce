<template>
  <section class="h-[90%]">
    <div class="h-full">
      <img
        class="w-full h-full object-cover"
        src="headphone1.avif"
        alt="number"
      />
      <!-- <h1>{{ number }}</h1> -->
    </div>
    <!-- <div></div>
        <div></div> -->
  </section>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      number: 1,
      message: ''
    };
  },

  methods: {
    changeNumber() {
        this.number++
    }
  },

//   methods: {
//     changePhotoNumber() {
//       setInterval(function () {
//         if(this.number == 1) {
//             this.number++;
//         } else {
//             this.number = 1
//         }
//       }, 2000);
//     },
//   },

//    mounted() {
//     setInterval(() => {
//         if(this.number === 1) {
//             console.log("number 1")

//             return this.number++;
//         } else {
//             console.log("number 2")

//             return this.number = 1
//         }
//     }, 4000);


    // setInterval(() => {
    //     return this.message = new Date().toLocaleTimeString();
    // }, 4000)

};
</script>
