<template>
    <v-app>
     <h2>الاختصارات</h2>

       <div class="main">
         <div>
            <v-row>
                <v-col cols="3" v-for="data in allData" :key="data.id">
                     <div style="margin-top:15px">
                <v-card
                @click="addData(data.id)"
                    class="mx-auto"
                    max-width="270"
                    height="150"
                >
                <div>
                    <v-img
                    :src="data.img"
                    height="70px"
                    width="70px"
                    ></v-img>
                    <v-card-title>
                        <v-btn 
                        rounded
                        color="#10a29b"
                        >
                         {{data.name}}  <v-icon  color="white darken-2">mdi-plus</v-icon>
                        </v-btn>
                    
                    </v-card-title>
                </div>
                </v-card>
                 </div>
                </v-col>
            </v-row>
        </div>
       </div>
    </v-app>
</template>

<script>
export default {

    methods:{
        addData(id){

            this.$router.push(`addData/`+id);
        },
    },
    data(){
        return {
            allData:[
                {
                    img:require('@/assets/img/أضافه طفل.png'),
                    name:"اضافه طفل",
                    id:"1"
                },
                {
                    img:require('@/assets/img/أضافه فصل.png'),
                    name:"اضافه فصل",
                    id:"2"
                },
                {
                    img:require('@/assets/img/أضافه مدرسه.png'),
                    name:"اضافه مدرسه",
                    id:"3"
                },
                {
                    img:require('@/assets/img/أضافه متخصص.png'),
                    name:"اضافه متخصص",
                    id:"4"
                },
                
            ]
        }
    }
    
}
</script>

<style scoped>

.main {
    padding-top:50px ;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

h2{
    text-decoration: underline;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
}
.main .addDiv {
    
}

.v-card__subtitle, .v-card__text, .v-card__title{
    margin-top:10px;
    margin-left: 16px;
    margin-right: 22px;;
    font-weight:bold;
}

.v-responsive{
    left: 60px;
    top:15px
}
</style>