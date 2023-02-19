<script setup>
import PlantPage from '../components/PlantPage.vue'
import QtyButton from "../components/QtyButton.vue"
</script>

<template>
    <div >
        <plant-page v-for="plant in plants"
                    :key="plant.id"
                    :fetchOne="plant"
                    :v-if="plantMatch"
                    />
    </div>
    <QtyButton />
</template>
<script>
export default {
  created() {
    this.fetchPlant();
    this.$watch(
      () => this.$route.params,
      () => {
        this.plant = this.fetchPlant(this.$route.params);
      },
      { immediate: true }
    );
  },
  data() {
    return {
      plants: [],
    };
  },
  components: { 'plant-page': PlantPage },
  methods: {
    async fetchPlant() {
      console.log();
      const res = await fetch("/plant.json/");

      const result = await res.json();
      this.plants = result;
      console.log(result);
    },
    plantMatch() {
         this.plant.id === this.$route.params.id
    }
  }

};
</script>
<style>

</style>
