<template>
  <section class="max-w-[1200px] mx-auto">
    <h2 class="text-center font-bold text-4xl text-gray-500">
      Categories<span class="text-6xl font-light text-blue-500">.</span>
    </h2>
    <ul class="md:grid md:grid-cols-2 md:gap-8 px-2">
      <li>
        <router-link :to="{path: 'category/keyboard'}">
        <div class="relative">
          <img
            class="w-full h-[300px] object-cover md:h-[400px] lg:h-[500px] overflow-hidden"
            src="/keyboard.jpg"
            alt="White keyboard"
          />
          <div class="absolute inset-0 bg-blackish flex justify-center items-center">
            <div class="bg-blue-500 px-5 py-2 ">
              <p class="text-3xl text-gray-900 font-poppins">Keyboards</p>
            </div>
          </div>
        </div>
        </router-link>
      </li>
      <li>
         <router-link :to="{path: 'category/laptop'}">
        <div class="relative">
          <img
            class="w-full h-[300px] object-cover md:h-[400px] lg:h-[500px]"
            src="/laptop.jpg"
            alt="Laptop on desk"
          />
          <div class="absolute inset-0 bg-blackish flex justify-center items-center">
            <div class="bg-blue-500 px-5 py-2 ">
              <p class="text-3xl text-gray-900 font-poppins">Laptops</p>
            </div>
          </div>
        </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{path: 'category/headphone'}">
        <div class="relative">
          <img
            class="w-full h-[300px] object-cover md:h-[400px] lg:h-[500px]"
            src="/headphone.avif"
            alt="Headphone"
          />
          <div class="absolute inset-0 bg-blackish flex justify-center items-center">
            <div class="bg-blue-500 px-5 py-2 ">
              <p class="text-3xl text-gray-900 font-poppins">Headphones</p>
            </div>
          </div>
        </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{path: 'category/phone'}">
        <div class="relative">
          <img
            class="w-full h-[300px] object-cover md:h-[400px] lg:h-[500px]"
            src="/phone.avif"
            alt="Phone"
          />
          <div class="absolute inset-0 bg-blackish flex justify-center items-center">
            <div class="bg-blue-500 px-5 py-2 ">
              <p class="text-3xl text-gray-900 font-poppins">Phones</p>
            </div>
          </div>
        </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Categories",
};
</script>
