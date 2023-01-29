<template>
    <div>
        <slider></slider>
        <categories></categories>
    </div>
</template>

<script>
    import Slider from "../components/Slider.vue"
    import Categories from "../components/Categories.vue"
    export default {
        name: 'Home',
        components: {
            Slider,
            Categories
        }
    }
</script>