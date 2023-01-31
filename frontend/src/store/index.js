
import {createStore} from "vuex"

const store = createStore({
  state: {
    user: "Florencio",
    userProduts: [],
    allProducts: []
  },
  mutations: {
    SET_ALL_PRODUCTS(state, payload) {
        state.allProducts = payload
    }
  },
  actions: {},
  getters: {
    getCategories() {
        
    }
  },
});

export default store;