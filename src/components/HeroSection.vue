<script setup>

</script>
<template>
    <div id="hero-wrapper">
    <img src="../../img/hero-cactus.jpg"
    class="img-fluid"
    alt="Green plant"
    />

    <div class="centered">
    <h1>PLANTS.</h1>
    <h2>EASY GUIDE.</h2>
    </div>
    </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');
#hero-wrapper img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 0;
    padding: 0;
    overflow-x: hidden;


}

.centered {

    position: absolute;
    top: 40vw;
    left: 5vw;
    font-family: 'Philosopher', sans-serif;

}
.centered h1 {
    font-size: 15vw;
}

.centered h2 {
    font-size: 8vw;
}

@media (min-width: 800px) {
.centered {
position: absolute;
top: 50%;
left: 10%;
font-family: 'Philosopher', sans-serif;;
}

}
</style>
