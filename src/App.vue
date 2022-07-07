<template>
  <v-app>
    <div class="main">
      <div class="header">
        <div class="left" v-if="!isLoggedIn">
         <v-btn
         @click="login"
         class="login"
          rounded
          color="#10a29b"
          x-large
          outlined
          dark
          >
          تسجيل الدخول
          </v-btn>
        </div>
        <div class="left" v-else>
          <div class="icons">
            <v-icon  color="#10a29b">mdi-cog</v-icon> &nbsp;
            <v-icon  color="#10a29b">mdi-bell</v-icon> &nbsp;
            <v-icon  color="#10a29b">mdi-message</v-icon> &nbsp;
            <v-icon  color="#10a29b">mdi-account-circle</v-icon>
          </div>
        </div>
        <div class="right">
         <div class="logo">
          <v-img src="./assets/img/logo.png"/>
         </div>
         <div class="lang">
         <span style="font-weight:bold"> (AR) العربية</span>  
          
         </div>
        </div>
      </div>
      
    </div>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import Home from './components/home';
import EventBus from './plugins/event-bus'

export default {
  name: 'App',

  components: {
    // Home,
    
  },


  data: () => ({
    loggedIn: false
  }),
  created () {
    EventBus.$on('login', (isLogin) => {
      console.log('islogin'+isLogin);
      this.isLoggedIn = isLogin
    })
  },
  computed:{
    isLoggedIn() {
        if (localStorage.getItem('loggedIn')) return localStorage.getItem("loggedIn");
        return this.loggedIn

        // return true;
      },  
  },
 
  mounted(){
    console.log(localStorage.getItem("loggedIn"));
    console.log('isLoggedIn '+this.isLoggedIn);
  },
  methods :{
    login(){
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>

@font-face {
    font-family: "Times New Roman";
    font-size: 25px;
    src: local("time"),
     url(./assets/fonts/times.ttf) format("truetype");
  }



.main .header {
height: 116px;
  background-color:#fbfbfb;
  padding: 20px;

}

.main .header .left {
  float:left;
  margin-top: 16px;
}

.main .header .left button {
  font-weight: bold;
  border-color: #10a29b;

}

.main .header .right {
  float: right;
}

.main .header .right .logo {
  float: right;
}

.main .header .right .lang {
  float: left;
  margin-top:34px;
  margin-right:20px

}

.main .body{
  height: 530px;
  padding: 20px;
  padding-top: 100px;
}
.main .body .left {
  float: left;
  padding-left:50px
}
 
 .main .body .right {
    float:right;
    padding-right: 50px;
    padding-top: 40px;
 }

 .main .body .right button {
    border-color:#10a29b
 }

 .main .footer {
  text-align: center;
 }

button{
  font-weight: bold;
}

 .icons i {
  margin-right:15px
 }



</style>


