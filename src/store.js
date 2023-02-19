import { createStore } from 'vuex'

const mutations = {
    increase(state) {
      state.qty += 1
    },
    decrease(state) {
        if(state.qty > 1) {
            state.qty -= 1
        }

    }
  },
  state = {
    qty: 1
  }

export default createStore({ mutations, state, strict: true })
