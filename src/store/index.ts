import { createStore } from 'vuex'
export interface State {
    count: number,
    foo: String
}
const store = createStore<State>({
  state () {
    return {
      count: 0,
      foo: '1233'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }

})

export default store
