
<template>
  <div class="h-screen">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from "./store"
  export default {
    name: 'App',
    data() {
      return {
        myUser: store.state.user
      } 
    },

    async created() {
      try {
        const res1 = await fetch("http://localhost:5000/api/products");
        const products = await res1.json(); 
        store.commit('SET_ALL_PRODUCTS', products)
        
        // console.log(this.$store.state.allProducts)

      } catch (error) {
        alert(error.message);
      }
    },

    mounted() {
      this.myUser = "Another Shit"
    },

    updated() {
      console.log("Another Shit")
    },

    watch: {
      myUser(newUser, oldUser) {
        console.log("Everything is fine :)")
      }
      // if(this.user) {
      //     console.log("This run again")
      //     const res2 = await fetch(`http://localhost:5000/api/users/products/${JSON.parse(localStorage.get(store.state.user.email))}`)
      //     const userProducts = await res2.json();
      //     console.log(userProducts)
      // }
    }

  }
</script>

