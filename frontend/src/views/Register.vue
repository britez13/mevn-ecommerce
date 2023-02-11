<template>
  <main class="h-full bg-gray-900 flex justify-center items-center">
    <div>
      <h2 class="text-3xl text-gray-100 font-bold font-poppins">
        Create new account <span class="text-blue-500 text-4xl">.</span>
      </h2>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-1 mt-5">
        <label class="text-gray-300" for="name">Name</label>
        <input
          v-model.trim="name"
          class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none"
          id="name"
          type="text"
        />
        <label class="text-gray-300 mt-3" for="email">Email</label>
        <input
          v-model.trim="email"
          class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none"
          id="email"
          type="email"
        />
        <label class="text-gray-300 mt-3" for="password">Password</label>
        <input
          v-model.trim="password"
          class="h-8 rounded-md bg-slate-700 text-white focus:outline-blue-500 px-2 outline-none"
          type="password"
        />
        <button
          class="mt-6 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          type="submit"
        >
          Create account
        </button>
      </form>
      <p class="mt-4 text-gray-500">
        Already a member?
        <router-link :to="{ name: 'login' }"
          ><span class="text-blue-500">Login</span></router-link
        >
      </p>
      <!-- <p>{{ password }}</p> -->
    </div>
  </main>
</template>

<script>
// import {router} from "vue-router"
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(e) {
      if (this.name && this.email && this.password) {
        console.log(this.name, this.email, this.password)
        try {
          const res = await fetch("http://localhost:5000/api/users/register", {
            method: "POST",
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: `name=${this.name}&email=${this.email}&password=${this.password}`,
          });
          // console.log(user);
          const user = await res.json();
          if(user.message == 'Invalid credentials') {
            alert(user.message)
          } else {
            store.dispatch("setUser", user)
            this.$router.push({path: "/"})
          }
          console.log(user)
          this.$router.push({path: "/"});
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("I have no idea");
      }
      // this.name = "",
      // this.email = "",
      // this.password = "",
    },
  },
};
</script>
