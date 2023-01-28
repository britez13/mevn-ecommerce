<template>
    <nav class="h-full flex items-center gap-4">
        <router-link :to="{name: 'login'}">Login</router-link>
        <router-link :to="{name: 'register'}">Register</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>