<template>
    <nav class="h-full flex items-center gap-2 text-white">
        <router-link :to="{name: 'cart'}"><font-awesome-icon icon="shopping-cart" size="1x" /></router-link>
        <router-link class="text-gray-500" :to="{name: 'register'}">Register</router-link>
        <!-- <p>{{ $store.state.user }}</p> -->
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',  
    }
</script>