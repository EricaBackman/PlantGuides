<template>
    <div class="container text-left">
  <div class="row">
    <div class="col-sm">
        <h1 id="big-header">We love green plants.</h1>
    </div>
    <div class="col-sm image">
      <img src="../../public/img/house-plants2.jpg" alt="">
    </div>
  </div>


  <div class="row">
    <div class="col-sm image">
        <img src="../../public/img/monstera-pink.jpg" alt="">
    </div>
    <div class="col-sm">
      <h1 id="small-header">So who are we?</h1>
      <p>Plantlovers, obviously. But we want something more. Our dream is to inspire people to a greener home! We want to share our joy for green plants and make it easy for everyone to keep them alive an at its best form. To do so we have put together the best and easiest guides for the most common green plants. </p>
    </div>
  </div>
  </div>
</template>

<style scoped>
.container {
    font-family: 'Philosopher', sans-serif;
    width: 100%;
    height: auto;
    margin-bottom: 12vw;
}

.image{
    display: flex;
    margin: 0;
    padding: 2vw;
    justify-content: center;

}
#big-header {
font-size: 14vw;
padding: 0 18vw;
margin-top: 20vw;
margin-bottom: 10vw;
}

#small-header {
    font-size: 9vw;
    padding-top: 5vw;
    padding-left: 8vw;
}

.col-sm p {
    padding: 3vw 8vw 6vw;
}

.col-sm img {
width: 80vw;
margin: 0;
padding-left: 5vw;
padding-right: 5vw;
}
@media (min-width: 800px) {
    .container {
    margin-top: 10vh;
    padding-left: 15vh;
    padding-right: 15vh;
}
.col-sm {
    height: 80vh;
    margin: 0;
    padding: 0;

}
#big-header {
    font-size: 14vh;
    padding: 0;
    padding-top: 10vh;
    margin: 0;

}
#small-header {
    font-size: 7vh;
    padding-left: 6vh;
    margin-top: 0;

}

.col-sm p {
    font-size: 3.5vh;
    padding: 0 6vh;
    padding-bottom: 5vh;
    margin: 0;
}

.col-sm img {
    display: flex;
    width: 100%;
    height: 80vh;
    padding: 0;
    margin: 0;
}
}

</style>
