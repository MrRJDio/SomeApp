<template>
  <f7-page>
    <f7-navbar :title="$t('leftPanel.panelTitle')"></f7-navbar>
    <f7-block strong>
      <p>{{$t('leftPanel.panelContent')}}</p>
    </f7-block>

    <f7-block strong>
        <f7-block strong>
  <f7-block-title>{{$t('leftPanel.someNotes')}}</f7-block-title>
  <f7-block v-for="(item, index) in wishlist">
    <span>{{ item }}</span>
    <f7-button fill color="red" @click="removeProduct(index)">{{$t('leftPanel.deletButton')}}</f7-button>
  </f7-block>
  <f7-list form>
    <f7-list-input :value="wish" @input= "wish = $event.target.value" type="text" :placeholder="$t('leftPanel.inputNote')"></f7-list-input>
    <f7-button fill color="blue" @click="addProduct">{{$t('leftPanel.addButton')}}</f7-button>
  </f7-list>
</f7-block>
  </f7-block>

  <f7-block strong>
      <f7-block-title>{{$t('leftPanel.counter')}}</f7-block-title>
      <f7-block strong>
        <f7-row tag="p">
            <f7-col tag="span">
              <f7-button large small fill round color="red" @click="onMinus">-</f7-button>
            </f7-col>
            <f7-col tag="span" class="text-align-center">
              {{ cnt }}
            </f7-col>
            <f7-col tag="span">
              <f7-button large small fill round @click="onPlus" color="green">+</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>
        {{$t('leftPanel.price')}}1000
      </f7-block>
      <f7-block-title>{{$t('leftPanel.totalPrice')}}</f7-block-title>
      <f7-block strong>
            {{ total }}
      </f7-block>
  </f7-block>

  </f7-page>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
    data() {
       return {
         wish: null,
       }
     },
     computed: {
       ...mapGetters({
         wishlist: 'getWishlist',
         cnt:'cnt',
         total:'total'
     }),

     },

     mounted() {
       this.initBasket();
     },
     created() {
    if(localStorage.getItem('cnt') !== null){
       this.$store.state.cnt = localStorage.getItem('cnt');
     }
    },

     methods: {
       ...mapActions({
         initBasket: 'initialize',
         addToBasket: 'add',
         removeProduct: 'remove'
     }),
       addProduct() {
         if(this.wish.length)
           this.addToBasket(this.wish)
         this.wish = ''
     },
     onMinus(){
         this.$store.commit('minus')
     },
     onPlus(){
         this.$store.commit('plus')
     },
     }
}
</script>
