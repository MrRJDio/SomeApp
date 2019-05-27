<template>
 <f7-view>
<f7-page login-screen no-toolbar no-navbar no-swipeback>
  <f7-login-screen-title>Login</f7-login-screen-title>
  <f7-list form>
    <f7-list-input
      :label="$t('login.userN')"
      :placeholder="$t('login.userN')"
      type="text"
      v-bind:value="name"
      required validate
      pattern="[0-9a-zA-Zа-яА-ЯёЁ]+"
      @input="setName"
    />
    <f7-list-input
      :label="$t('login.userP')"
      type="password"
      v-bind:value="password"
      :placeholder="$t('login.userP')"
      required validate
      pattern="[0-9a-zA-Zа-яА-ЯёЁ]+"
      @input="setPassword"
    />
  </f7-list>
  <f7-list>
    <f7-list-button @click="$f7router.back()">{{$t('login.signIn')}}</f7-list-button>
    <f7-block-footer>
      <p>{{$t('login.signText')}}</p>
    </f7-block-footer>
  </f7-list>
</f7-page>
</f7-view>
</template>

<script>
export default {
    computed: {
       name: {
         get() {
             return this.$store.state.name;
           }
       },
       password:{
           get() {
               return this.$store.state.password;
             }
       }
     },
     methods: {
     	setName(e) {
       	this.$store.commit('persistName', e.target.value);
    },
       setPassword(e) {
       this.$store.commit('persistPassword', e.target.value);
   }
     },
     created() {
      	this.$store.state.name = localStorage.getItem('name');
        this.$store.state.password = localStorage.getItem('password');
     }
    };
    </script>
