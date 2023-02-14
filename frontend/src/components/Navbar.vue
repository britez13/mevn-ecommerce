<template>
    <nav class="h-full flex items-center gap-4 text-white">
        <router-link :to="{name: 'cart'}"><font-awesome-icon icon="shopping-cart" size="1x" /></router-link>
        <p v-if="getUser" class="text-white">
            <font-awesome-icon icon="user"></font-awesome-icon>
            {{ getShortedName }}
        </p>
        <router-link v-else class="text-gray-500" :to="{name: 'login'}">Log in</router-link>
        <!-- <p>{{ $store.state.user }}</p> -->
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',  
        computed: {
            getUser() {
                return this.$store.state.user.name
            },
            getShortedName() {
                if(this.$store.state.user.name.length >= 10) return this.$store.state.user.name.slice(0, 10) + "..."
                return this.$store.state.user.name
            }
        },
    }
</script>
