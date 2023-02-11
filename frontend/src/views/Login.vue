<template>
  <main class="h-full bg-gray-900 flex justify-center items-center">
    <div>
      <h2 class="text-3xl text-gray-100 font-bold font-poppins">
        Log in your account <span class="text-blue-500 text-4xl">.</span>
      </h2>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-1 mt-5">
        <label class="text-gray-300" for="email">Email</label>
        <input
          v-model="email"
          class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none"
          id="email"
          type="email"
        />

        <label class="text-gray-300 mt-3" for="password">Password</label>
        <input
          v-model="password"
          class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none"
          id="password"
          type="password"
        />
        <button
          class="mt-6 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          type="submit"
        >
          Log in
        </button>
      </form>
      <p class="mt-4 text-gray-500">
        Does not have an account?
        <router-link :to="{ name: 'register' }"
          ><span class="text-blue-500">Register</span></router-link
        >
      </p>
    </div>
  </main>
</template>

<script>
import store from "../store"
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(e) {
      if ((this.email, this.password)) {
        try {
          const res = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: `email=${this.email}&password=${this.password}`
          })
          const user = await res.json();
          if(user.message == 'Invalid credentials') {
            alert(user.message)
          } else {
            store.dispatch("setUser", user)
            this.$router.push({path: "/"})
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Something went wrong");
      }
    },
  },
};
</script>
