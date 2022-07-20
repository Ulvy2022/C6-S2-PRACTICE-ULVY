<!-- eslint-disable no-unused-vars -->
<template>
    <div id="app">
            <div class="box">
                <div class="box1">
                    <input type="text" placeholder="First Name..." v-model="fn">
                    <span id="fn" >Your first name is required*</span>
                    <input type="text" placeholder="Last Name..." v-model="ln">
                    <span id="ln" >Your last name is required*</span>
                    <input type="text" placeholder="Comment..." v-model="cmt">
                    <span id="cmt" >Your comment is required*</span>
                    <button @click="addInfo()">ADD</button>
                </div>
            </div>
            <div class="result" v-for="value of info" :key="value">
                <h1>{{value.fn}} {{value.ln}} </h1>
                <p>{{value.cmt}} </p>
            </div>
    </div>
</template>

<script>
        export default {
            name:"Todo-List",
            data(){
                return{
                    fn:"",
                    ln:"",
                    cmt:"",
                    info:[],
                }
            },

                methods:{
                    addInfo(){
                        if(this.fn.length >0){
                            document.getElementById("fn").style.display="none";
                        }
                        if(this.ln.length >0){
                            document.getElementById("ln").style.display="none";
                        }
                        if(this.cmt.length >0){
                            document.getElementById("cmt").style.display="none";
                        }
                        if(this.fn.length > 0 && this.ln.length > 0 && this.cmt.length>0){
                            var lists = {fn:this.fn,ln:this.ln,cmt:this.cmt};
                            this.info.push(lists);
                            this.fn = "";
                            this.ln = "";
                            this.cmt = "";
                        }else{
                            if(this.fn.length == 0){
                                document.getElementById("fn").style.display="block";
                            }
                            if(this.ln.length == 0){
                                document.getElementById("ln").style.display="block";
                            }
                            if(this.cmt.length == 0){
                                document.getElementById("cmt").style.display="block";
                            }
                        }
                        
                    }
                },
            
        }
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
.box1{
    width: 80%;
}
ul{
    background: rgb(210, 99, 99);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: -60px;
    padding: 15px;
    color: white;
}
ul li{
    list-style: none;
}
.box1 span{
    color:red; 
    display:none; 
    font-size: 10px;
}
.result{
    height: 18vh;
    width: 40%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-left: 350px;
    border-radius: 10px;
}
.result h1{
    color: aqua;
}
.box{
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 40%;
    height: 50vh;
    margin-left: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box1 input{
    padding: 10px;
    width: 80%;
    margin: 5px 0 5px 0 ;
    border-radius: 10px;
    border:1px rgb(69, 65, 65) solid;
}
.box1 button{
    padding: 10px;
    width: 50%;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 10px;
    border:1px rgb(69, 65, 65) solid;
    color: rgb(53, 47, 47);
}
#app{
    width: 100%;
   
}
</style>