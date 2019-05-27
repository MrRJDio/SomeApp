import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASKET_INITIALIZE = 'BASKET_INITIALIZE'
const BASKET_ADD = 'BASKET_ADD'
const BASKET_REMOVE = 'BASKET_REMOVE'
const BASKET_RESET = 'BASKET_RESET'

export default new Vuex.Store({
    // namespaced: true,
    state: {
      language: 'ru',
      cnt: 1,
      price:1000,
      name: '',
      password:'',
    },
    mutations: {
        plus(state){
            state.cnt ++;
            localStorage.setItem('cnt', state.cnt);
        },
        minus(state){
            if(state.cnt>1){
            state.cnt --;
            localStorage.setItem('cnt', state.cnt);
          }
        },
    persistName(state, payload) {
          state.name = payload;
          console.log(payload)
          localStorage.setItem('name', state.name);
    },
    persistPassword(state, payload) {
      state.password = payload;
      console.log(payload)
      localStorage.setItem('password', state.password);
  },
},
getters:{
    lang(state){
        return state.language;
    },
    cnt(state){
        return state.cnt;
    },
    price(state){
        return state.price;
    },
    total(state){
        return state.cnt * state.price;
    },
},
    modules: {

      basket: {
        // namespaced: true,
        state: {
          wishlist: [],
        },

        getters: {
          getWishlist: state => state.wishlist
        },

        mutations: {
          [BASKET_INITIALIZE](state, wishlist) {
            state.wishlist = wishlist
          },
          [BASKET_ADD](state, wish) {
            state.wishlist.push(wish)
          },
          [BASKET_REMOVE](state, index) {
            if (index > -1) {
              state.wishlist.splice(index, 1)
            }
          },
          [BASKET_RESET](state) {
            state.wishlist = []
          },
        },

        actions: {
          initialize(context) {
            try {
              const basket = JSON.parse(localStorage.getItem('basket'))

              if (Array.isArray(basket)) {
                context.commit('BASKET_INITIALIZE', basket)
              } else {
                throw 'Basket is empty.'
              }

            } catch (e) {
              context.dispatch('reset')
            }
          },
          add(context, wish) {
            context.commit('BASKET_ADD', wish)
            context.dispatch('save')
          },
          remove(context, index) {
            context.commit('BASKET_REMOVE', index)
            context.dispatch('save')
          },
          save(context) {
            localStorage.setItem('basket',
              JSON.stringify(context.state.wishlist)
            )
          },
          reset(context) {
            localStorage.removeItem('basket')

            context.commit('BASKET_RESET')
          }
        }
      }
    }
});
