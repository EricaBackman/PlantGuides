<template>
  <div class="buy-wrapper">
  <h3 class="headers">How many plants do you got?</h3>
    <div class="qty-wrapper">
      <input
        type="button"
        value="-"
        @click="this.$store.commit('decrease')"
      />
      <input
        type="text"
        :value="this.$store.state.qty"
        size="1"
      />
      <input
        type="button"
        value="+"
        @click="this.$store.commit('increase')"
      />
    </div>
  </div>
</template>

<style scoped>
.buy-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(212, 222, 211);
    margin: 10vw 7vw 0vw;
    padding: 10vw 10vw;
    border-radius: 5px;
}
.qty-wrapper {
  display: flex;
  justify-content: center;
}
</style>
