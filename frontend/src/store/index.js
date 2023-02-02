
import {createStore} from "vuex"

const store = createStore({
  state: {
    user: "Florencio",
    userProducts: [],
    allProducts: []
  },
  mutations: {
    SET_ALL_PRODUCTS(state, payload) {
        state.allProducts = payload
    },
    SET_USER_PRODUCTS(state, payload) {
      state.userProducts = [...state.userProducts, payload]
    }
  },
  actions: {},
  getters: {
    getCategories() {
        
    }
  },
});

export default store;