<template>
  <section>
    <h2 class="text-center font-bold text-4xl text-gray-500">
      Categories<span class="text-6xl font-light text-blue-500">.</span>
    </h2>
    <ul class="md:grid md:grid-cols-2 px-2">
      <li>
        <div class="rounded border-red-400">
          <img class="w-full h-[300px] object-cover md:h-[400px] lg:h-[500px]" src="/keyboard.jpg" alt="White keyboard" />
        </div>
      </li>
      <li>
        <div>
          <img class="w-full h-[300px] object-cover md:h-[400px] lg:h-[500px]" src="/laptop.jpg" alt="Laptop on desk" />
        </div>
      </li>
      <li>
        <div>
          <img class="w-full h-[300px] object-cover md:h-[400px] lg:h-[500px]" src="/headphone1.avif" alt="Headphone" />
        </div>
      </li>
      <li>
        <div>
          <img class="w-full h-[300px] object-cover md:h-[400px] lg:h-[500px]" src="/phone.avif" alt="Phone" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Categories",
};
</script>
