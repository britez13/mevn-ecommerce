
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
        state.userProducts = payload
    }
  },
  actions: {
    setUserProducts({commit, state}, productToAdd) {
      // const currentProducts = state.userProducts.map(item => item);
      // const newProducts = currentProducts.map( item => {
      //   return {...item, amount: 1}
      // })
      let newUserProducts = []
      if (!state.userProducts.length) {
        console.log("hey it was empty");
        newUserProducts = [{ ...productToAdd, amount: 1 }];

      } else {
        let isNotInArrayYet = true
        newUserProducts = state.userProducts.map( item => {
          if(item._id === productToAdd._id) {
            console.log(typeof item.amount)
            isNotInArrayYet = false
            return { ...item, amount: item.amount += 1 };
          } 
          return item
        })
        if(isNotInArrayYet) {
          newUserProducts = [...newUserProducts, {...productToAdd, amount: 1}]
        }
      }
      console.log("User products: ", newUserProducts)
      commit("SET_USER_PRODUCTS", newUserProducts)
      console.log(state.userProducts);

      // console.log(state.userProducts)
    }
  },
  getters: {
    getUserProducts(state) {
        return state.userProducts
    }
  },
});

export default store;