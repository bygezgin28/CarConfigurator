<template>

    <div class="container car-colors-detail">
        <div class="text-center">
            Hayalindeki araca dair rengini <br>seç, tarzını hemen yansıt
        </div>
        <div>
            <div class="car-name">
                <img :src=carBackground class="img-fluid" alt="">
            </div>
            <div class="car-image">
                <img :src=carImage class="img-fluid" :alt=carName :title=carName>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="text-center">
            <button type="button" class="btn btn-primary btn-circle" v-for="(color, index) in colors" :key="index" :style="color.style" :class="{active:color.active}" @click="selectColor(color)"></button>
        </div>
    </div>


    <div class="clearfix"></div>


    <div class="container info-bar">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid" :src=carImage />
            </div>
            <div class="col-md-6">
                <span class="total">TOTAL</span>
                <span class="car-price">{{carPrice}} TL</span> 
            </div>
            <div class="button">
                <router-link :to="{name:'accessories'}">ACCESSORIES</router-link>
            </div>
        </div>
    </div>



</template>


<script>
export default {
    name:"Colors",
    data() {
        return {
            carName:localStorage.getItem('carName'),
            carPrice:localStorage.getItem('carPrice'),
            carImage:localStorage.getItem('carImage'),
            carBackground:localStorage.getItem('carBackground'),
            colors:[
                {name:"RED",style:"background-color: #f00000;",active:true},
                {name:"BLACK",style:"background-color: #000000;",active:false},
                {name:"GREY",style:"background-color: #8b8b8b;",active:false},
            ],
            
        }
    },
    methods:{
        selectColor(color){
            this.colors.filter(item=>{
                item.active=false;
            });
            color.active=!color.active;
            localStorage.setItem('colorName', color.name);
        }
    },
    mounted: function () {
        if(localStorage.getItem('colorName')==null){
            localStorage.setItem('colorName', "RED");
        }else{
            this.colors.filter(item=>{
                if(localStorage.getItem('colorName')==item.name){
                    item.active=true;
                }else{
                    item.active=false;
                }
            });
        }
    }

}
    
</script>


<style scoped>
.info-bar {
    margin-top: 40px !important;
}
.car-colors-detail{
    margin-bottom: 126px;
}
.car-name{
    padding: 20px;
    position: absolute;
}
.car-image{
    width: 60%;
    z-index: 9;
    transform: translateY(50%);
    margin: 0 auto;
}
.btn-circle {
  width: 33px;
  height: 33px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
  text-align: center;
  margin:5px;
  border:0;
}
.btn-circle.active::before{
    content: '\F26A';
    font-family: 'bootstrap-icons';
    position: absolute;
    left: -18%;
    top: -20%;
    font-size: 14px;
    color: #000000;
    z-index: 9;
    border: 3px solid #ffffff;
    border-radius: 52px;
    line-height: 13px;
    background: #ffffff;
}
</style>