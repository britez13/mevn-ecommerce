<template>
    <nav class="h-full flex items-center gap-4 text-red-500">
        <router-link class="text-gray-500" :to="{name: 'register'}">Register</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>