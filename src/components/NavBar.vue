<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">PLANTS</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="/">Guides</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
<RouterView />
</template>

<style scoped>
.navbar {
    font-family: 'Philosopher', sans-serif;
}
.navbar-brand {
    font-size: 2rem;
}
.nav-link {
    font-size: 1.5rem;
}

</style>
