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
                        style="color:white"
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

    <h2>الاقسام</h2>   
   
    <div class="main">
        <div>
            <v-row>
                <v-col cols="2" v-for="data in actions" :key="data.id">
                    <v-btn @click="addTo(data.id)"  x-large style="color:white" :color="data.color" >{{data.name}}</v-btn>
                </v-col>
            </v-row>
        </div>
    </div>


     <h2>الاحصائيات</h2>   
   
    <div class="main">
        <div>
             <v-row>
                <v-col cols="2" v-for="data in statistics" :key="data.id">
                    <div class="customDiv">
                        <h3>{{data.name}}</h3>
                        <h1>{{data.value}}</h1>

                        <v-btn color="#10a29b" >المزيد</v-btn>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>

    <h2>المدارس</h2>
    <div class="main">
        <div>
            <v-row>
            <v-col cols="2" v-for="data in schools" :key="data.id">
                <div class="customDivSchools">
                    <div>
                        <v-img v-bind:src="data.img"></v-img>
                    </div>
                    <div>
                    </div>
                </div>
            </v-col>
        </v-row>
        </div>
    </div>

    <h2>التقارير</h2>
     <div class="main">
         <div>
            <v-row>
                <v-col cols="4" v-for="data in reports" :key="data.id">
                     <div style="margin-top:15px">
                <v-card
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
                        style="color:white"
                        >
                         {{data.name}} 
                        </v-btn>
                    
                    </v-card-title>
                </div>
                </v-card>
                 </div>
                </v-col>
            </v-row>
        </div>
       </div>
    </div>
  
    </v-app>
</template>

<script>
export default {

    methods:{
        addTo(id){
            this.$router.push('/addTo/'+id);
        },
        addData(id){

            this.$router.push(`addData/`+id);
        },
    },
    data(){
        return {
            status:false,
            reports:[
                {
                    img:require('@/assets/img/تقرير الاطفال.png'),
                    name:'تقرير الاطفال'
                },
                  {
                    img:require('@/assets/img/تقرير الجلسات.png'),
                    name:'تقرير الجلسات'
                },
                  {
                    img:require('@/assets/img/تقرير المستخدمين.png'),
                    name:'تقرير المستخدمين'
                },
            ],
            schools:[
                   {
                    img:require('@/assets/img/المدارس.png'),
                    name:'الامل'
                   },
                   {
                    img:require('@/assets/img/المدارس.png'),
                    name:'الامل'
                   },
                   {
                    img:require('@/assets/img/المدارس.png'),
                    name:'الامل'
                   },
                   {
                    img:require('@/assets/img/المدارس.png'),
                    name:'الامل'
                   },{
                    img:require('@/assets/img/المدارس.png'),
                    name:'الامل'
                   }
                   ,{
                    img:require('@/assets/img/المدارس.png'),
                    name:'الامل'
                   },
            ],
            statistics:[
                {id:1,name:"عدد الاطفال" ,value:'15'},
                {id:2,name:"عدد المدارس" ,value:'15'},
                {id:3,name:"عدد المعلمين" ,value:'15'},
                {id:4,name:"عدد التقيمات" ,value:'15'},
                {id:5,name:"عدد الجلسات" ,value:'15'},
                {id:6,name:"عدد الجلسات" ,value:'15'},


            ],
            actions : [
                {name:'اسناد طفل',color:'red',id:'1'},
                {name:'اسناد طفل',color:'blue',id:'2'},
                {name:'اسناد طفل',color:'yellow',id:'3'},
                {name:'اسناد طفل',color:'green',id:'4'},
                {name:'اسناد طفل',color:'orange',id:'5'},
                {name:'اسناد طفل',color:'blue',id:'6'},
            ],
            allData:[
                {
                    img:require('@/assets/img/أضافه طفل.png'),
                    name:"اضافه طفل",
                    id:"1"
                },
                {
                    img:require('@/assets/img/أضافه فصل.png'),
                    name:"اضافه فصل",
                    id:"4"
                },
                {
                    img:require('@/assets/img/أضافه مدرسه.png'),
                    name:"اضافه مدرسه",
                    id:"2"
                },
                {
                    img:require('@/assets/img/أضافه متخصص.png'),
                    name:"اضافه متخصص",
                    id:"3"
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
    justify-content: center
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

.customDiv{
    height:135px;
    width:130px;
    text-align: center;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    margin: 10px;
    padding-top:15px

}
.customDiv button{
    color:white
}

.customDivSchools{
    border:5px solid #10a29b;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    height:140px;
    margin: 10px;
    width:130px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

}

.customDivSchools img {
   flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
}

.customDivSchools .v-responsive[data-v-7aef48b4]{
    left: 0px;
    top:0px
}
</style>