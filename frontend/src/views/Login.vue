<template>
  <main class="h-full bg-gray-900 flex justify-center items-center">
    <div>
      <h2 class="text-3xl text-gray-100 font-bold font-poppins">Log in your account <span class="text-blue-500 text-4xl">.</span> </h2>
      <form class="flex flex-col gap-1 mt-5">
        <label class="text-gray-300" for="email">Email</label>
        <input class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none" id="email" type="email" />

        <label class="text-gray-300 mt-3" for="password">Password</label>
        <input class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none" id="password" type="password" />
      </form>
      <p class="mt-4 text-gray-500">
        Does not have an account?
        <router-link :to="{ name: 'register' }"><span class="text-blue-500">Register</span></router-link>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login",
};
</script>
