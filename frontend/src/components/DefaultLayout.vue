<template>
    <div>
    <header-comp></header-comp>
        <router-view></router-view>
    <footer-comp></footer-comp>
    </div>
</template>

<script>
    import HeaderComp from "./Header.vue"
    import FooterComp from "./Footer.vue"
    export default {
        name: '',
        components: {
            HeaderComp,
            FooterComp
        }
    }
</script>