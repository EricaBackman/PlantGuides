<script setup>
import { RouterView } from "vue-router";
import QtyButton from "../components/QtyButton.vue"
</script>
<template>
  <div>
    <h1>{{ $route.params }}</h1>
    <h1>{{ $route.params.id }}</h1>
    <h1>{{ this.plants }}</h1>
    <h1>{{ this.plant }}</h1>
    <h1>{{}}</h1>
  </div>

  <RouterView />
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
      plants: "",
      plant: "",
      id: "",
      name: "",
    };
  },
  methods: {
    async fetchPlant(plant) {
      console.log(plant);
      const res = await fetch("/plant.json/" + plant.id);
      const result = await res.json();
      console.log(result);
      this.plants = result;
    },
  },
  // props: {
  //     plantFetch: {
  //         required: true,
  //         type: Object
  //     }
  // }
};
</script>
