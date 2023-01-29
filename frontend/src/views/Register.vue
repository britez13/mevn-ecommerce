<template>
  <main class="h-full bg-gray-900 flex justify-center items-center">
    <div>
      <h2 class="text-3xl text-gray-100 font-bold font-poppins">Create new account <span class="text-blue-500 text-4xl">.</span> </h2>
      <form class="flex flex-col gap-1 mt-5">
        <label class="text-gray-300" for="name">Name</label>
        <input class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none" id="name" type="text" />
        <label class="text-gray-300 mt-3" for="email">Email</label>
        <input class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none" id="email" type="email" />
        <label class="text-gray-300 mt-3" for="password">Password</label>
        <input class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none" type="password" />
      </form>
      <p class="mt-4 text-gray-500">
        Already a member?
        <router-link :to="{ name: 'login' }"><span class="text-blue-500">Login</span></router-link>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Register",
};
</script>
