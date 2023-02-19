<script setup>
    import HeroSection from '../components/HeroSection.vue'
    import PlantBase from '../components/PlantBase.vue'
</script>

<template>
    <!-- Lägger in HeroSection på HomeView -->
    <HeroSection />

    <!-- Rubrik under HeroSection -->
    <div class="headers">
        <h1>{{ plantHeader }}</h1>
    </div>
    <!-- PlantBase (cards) som ligger i en v-for och renderas en gång för varje object i plant.json -->
    <div class="plant-card">
        <div class="container text-center">
            <div class="row align-items-start">
                <plant-cards
                    v-for="plant in plants"
                    :key="plant.id"
                    :plantFetch="plant"
                />
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                plantHeader: 'Plant Guide',
                plants: []
            }
        },
        components: { 'plant-cards': PlantBase },
        created() {
            this.fetchData()
        },

        methods: {

            async fetchData() {
                const res = await fetch(`plant.json/`)
                const result = await res.json()
                console.log (result)
                this.plants = result

            }
        }

    }
</script>
<style>
    .headers {
        display: flex;
        justify-content: center;
        margin-top: 3vh;
        margin-bottom: 2vh;
    }
</style>
