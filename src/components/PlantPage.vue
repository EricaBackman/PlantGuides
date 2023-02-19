<script setup>
// import { RouterView } from "vue-router";

</script>
<template>
  <div>

    <h1>{{ fetchOne.name }}</h1>
    

    <h1>{{}}</h1>
  </div>



</template>
<script>
export default {
    props: {
        fetchOne: {
            required: true,
            type: Object
        }
    }
}
</script>
