<template>

  <f7-page>
    <f7-navbar :title="$t('about.aboutTit')" back-link="Back"></f7-navbar>
    <f7-block-title>{{$t('about.aboutPage')}}</f7-block-title>
    <f7-block strong>
      <p>{{$t('about.aboutP1')}}</p>
      <p>
          <i18n path="about.aboutP2">
              <f7-link back place="action">{{$t('about.actionBack')}}</f7-link>
          </i18n>
      </p>
      <p>{{$t('about.aboutP3')}}</p>
      <p>{{$t('about.aboutP4')}}</p>
    </f7-block>

    <f7-block-title>Posts</f7-block-title>
    <f7-block strong>
        <f7-row>
            <f7-col>
            </f7-col>
          <f7-col>
     <f7-button fill @click.once="showPosts">Show posts</f7-button>
         </f7-col>
         <f7-col>
         </f7-col>
        </f7-row>
       <div class="post" v-for="post in posts" :key="post.id">
           <h3>Title: {{post.title}}</h3>
           <p>Description: {{post.body}}</p>
       </div>
    </f7-block>

  </f7-page>
</template>


<script>
import axios from 'axios'
export default {
    data(){
        return{
            posts:[]
        }
    },
    methods:{
        showPosts(){
        var self = this;
        axios.get('https://jsonplaceholder.typicode.com/posts').then( function(res){
            self.posts = res.data;
            console.log('Data: ',res.data);
        })
        .catch( function(error){
            console.log('Error: ',error);
        })
    }
    },
    mounted(){
        // var self = this;
        // axios.get('https://jsonplaceholder.typicode.com/posts').then( function(res){
        //     self.posts = res.data;
        //     console.log('Data: ',res.data);
        // })
        // .catch( function(error){
        //     console.log('Error: ',error);
        // })
    }
}
</script>

<style type="text/css">
    .post{
        background-color: #ccc;
        margin-bottom: 20px;
        padding: 10px 20px;
        text-align: left;
    }
</style>
