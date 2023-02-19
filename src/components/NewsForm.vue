<template>
  <div
    class="form-wrapper"
    v-if="!submitted"
    @submit-answer="onSubmit"
  >
    <h5 class="headers">Do you want extra help on the way?</h5>
    <p>
      Sing up for our weekly reminder and we will remind you when it's time to
      water and give your plants extra love
      <i class="fa-sharp fa-solid fa-heart"></i>
    </p>
    <form>
      <div class="form-group">
        <div class="row">
          <div class="col">
            <label for="exampleFormControlInput1">First name</label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              v-model="firstName"
            />
          </div>
          <div class="col">
            <label for="exampleFormControlInput1">Last name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              v-model="lastName"
            />
          </div>
        </div>
        <label
          id="label"
          for="exampleFormControlInput1"
          >E-mail</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          v-model="email"
        />
        <input
          class="btn btn-dark btn-sm"
          type="submit"
          value="Sign up"
          v-on:click.stop.prevent="onSubmit(firstName, lastName, email)"
        />
      </div>
    </form>
  </div>
  <div
    class="form-wrapper"
    v-else
  >
    <div class="answer-wrapper">
      <h5 class="headers">Welcome {{ fullName }}!</h5>
      <p>We will send a weekly reminder to {{ email }}.</p>
      <p>Now you'll never forget to water your plants.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: null,
      firstName: "",
      lastName: "",
      email: "",
      submitted: false,
    };
  },
  methods: {
    onSubmit: function (firstName, lastName, email) {
      this.$emit("submit-answer", firstName, lastName, email);
      this.submitted = true;
    },
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  emits: ["submit-answer"],
};
</script>
<style scoped>
.form-wrapper {
  background-color: rgb(166, 189, 163);
  margin-top: 10vw;
  margin-right: 7vw;
  margin-bottom: 10vw;
  margin-left: 7vw;
  padding: 10vw;
  border-radius: 5px;
}

.form-group {
  display: flex;
  justify-content: center;
  margin-bottom: 10vw;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.456);
  padding: 5vw 5vw;
}

#label {
  margin-top: 3vw;
}
.btn {
  margin-top: 5vw;
  margin-right: 10vw;
  margin-left: 10vw;
}

.form-wrapper p {
  margin: 8vw 0;
}

.submitted-wrapper {
  background-color: rgb(166, 189, 163);
  margin-top: 10vw;
  margin-right: 7vw;
  margin-bottom: 10vw;
  margin-left: 7vw;
  padding: 10vw;
  border-radius: 5px;
}

.answer-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.456);
  padding: 5vw 5vw;
}

.answer-wrapper p {
  text-align: center;
}
</style>
