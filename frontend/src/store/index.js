
import {createStore} from "vuex"

const store = createStore({
  state: {
    user: "",
    userProducts: [],
    allProducts: [],
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },

    SET_ALL_PRODUCTS(state, payload) {
      state.allProducts = payload;
    },

    SET_USER_PRODUCTS(state, payload) {
      state.userProducts = payload;
    },

    INCREASE_AMOUNT(state, payload) {
      state.userProducts = payload;
    },

    DECREASE_AMOUNT(state, payload) {
      state.userProducts = payload;
    },

    REMOVE_FROM_CART(state, payload) {
      state.userProducts = payload;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user)
    },

    setUserProducts({ commit, state }, productToAdd) {
      let newUserProducts = [];
      if (!state.userProducts.length) {
        newUserProducts = [{ ...productToAdd, amount: 1 }];
      } else {
        let isNotInArrayYet = true;
        newUserProducts = state.userProducts.map((item) => {
          if (item._id === productToAdd._id) {
            isNotInArrayYet = false;
            return { ...item, amount: (item.amount += 1) };
          }
          return item;
        });
        if (isNotInArrayYet) {
          newUserProducts = [
            ...newUserProducts,
            { ...productToAdd, amount: 1 },
          ];
        }
      }
      commit("SET_USER_PRODUCTS", newUserProducts);
      console.log(state.userProducts);
    },

    increaseAmount({ commit, state }, id) {
      const newUserProducts = state.userProducts.map((item) => {
        if (item._id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      commit("INCREASE_AMOUNT", newUserProducts);
    },
    decreaseAmount({ commit, state }, id) {
      const newUserProducts = state.userProducts.map((item) => {
        if (item.amount > 1) {
          if (item._id === id) {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      });
      commit("DECREASE_AMOUNT", newUserProducts);
    },

    removeFromCart({ commit, state }, id) {
      const newUserProducts = state.userProducts.filter(item => item._id !== id);
      commit("REMOVE_FROM_CART", newUserProducts);
    },
  },
  getters: {
    getUserProducts(state) {
      return state.userProducts;
    },
  },
});

export default store;