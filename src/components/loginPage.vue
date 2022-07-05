<template>
    <v-app>
       
       <div class="main">
        <div class="child">       
        <h1 style="text-align:center;color:#10a29b">تسجيل الدخول</h1>

        <v-form>
            <v-text-field
            v-model="email"
            type="email"
            label="email"
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            type="password"
            :counter="10"
            label="password"
            required
            ></v-text-field>      
            <div>
                <div style="float:right">
                    <v-checkbox
                    v-model="checkbox"
                    label="تذكرني"
                    ></v-checkbox>
                </div>
                <div style="float:left">
                    <a style="color:#10a29b;font-weight:bold" href="#" >هل نسيت كلمه المرور</a>
                </div>
                
            </div>
            <h6 style="text-align:center">
                <v-btn block
                @click="login"
                rounded
                color="#10a29b"
                x-large
                dark
                >
                تسجيل الدخول
                </v-btn>
            </h6>
        </v-form>
       </div>
    </div>
    </v-app>
</template>

<script>
export default {

    methods:{
        login(){
            this.$router.push('dashboard');
        }
    },
    data(){
        return {
             email:null,
            password:null,
            checkbox:null,
        }
       
    }
    
}
</script>


<style scoped>
.main {
    height:400px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.main .child {
    width: 500px;
}

</style>