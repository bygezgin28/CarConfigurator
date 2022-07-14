<template>

    <div class="container mainpage">

        <div class="row">
            <div class="col-md-6 car-item" v-for="(car, index) in cars"  :key="index" :class="{active:car.active}" @click="selectCar(car),carIndex=index,carPrice=car.price" id="{{car.id}}">
                <div class="rounded-circle">
                    <div class="car-name">
                        <img :src=car.background class="img-fluid">
                    </div>
                    <div class="car-image">
                        <img :src=car.image class="img-fluid" :alt=car.name :title=car.name>
                    </div>
                    <div class="car-detail text-center">
                        <strong class="price">{{car.price}} TL</strong>'den başlayan fiyatlarla
                    </div>
                    <div class="car-select text-center">
                        <button type="button" class="btn btn-dark select-btn">SELECT</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="clearfix"></div>

        <div class="container info-bar">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid" :src="carImageC()" />
                </div>
                <div class="col-md-6">
                    <span class="total">TOTAL</span>
                    <span class="car-price">{{carPrice}} TL</span> 
                </div>
                <div class="button">
                    <router-link :to="{name:'colors'}">COLORS</router-link>
                </div>
            </div>
        </div>
        
    </div>
  
</template>



<script>
export default {
    name:"Models",
    data() {
        return {
            carPrice:193000,
            carIndex:0,
            carPrice:localStorage.getItem('carPrice'),
            carImage:localStorage.getItem('carImage'),
            cars:[
                {id:1,name:"IBIZA",price:193000,image:"ibiza-car.png",background:"ibiza-text.png",active:true},
                {id:2,name:"ARONA",price:300000,image:"arona-car.png",background:"arona-text.png",active:false},
            ],
            
        }
    },
    methods:{
        selectCar(car){
            this.cars.filter(item=>{
                item.active=false;
            });
            car.active=!car.active;
            localStorage.setItem('carName', car.name);
            localStorage.setItem('carPrice', car.price);
            localStorage.setItem('carImage', car.image);
            localStorage.setItem('carBackground', car.background);
        },
        carImageC() {
            return localStorage.getItem('carImage');
        }
    },
    mounted: function () {
        if(localStorage.getItem('carName')==null){
            localStorage.setItem('carName', "IBIZA");
            localStorage.setItem('carPrice', 193000);
            localStorage.setItem('carImage', "ibiza-car.png");
            localStorage.setItem('carBackground', "ibiza-text.png");
        }else{
            this.cars.filter(item=>{
                if(localStorage.getItem('carName')==item.name){
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
@media (max-width: 775px){
    .car-item{
        min-height: 400px !important;
    }
}
@media (max-width: 775px){
    .car-item{
        min-height: 200px !important;
    }
    .info-bar .button[data-v-e59b532e] {
        padding: 41px 0 53px 2%;
    }
}
    .mainpage{
        min-height: 700px;
    }
    .car-item{
        height: 100%;
        padding: 20px;
        cursor: pointer;
    }
    .car-item.active .rounded-circle{
        border: 1px solid #dfdfdf;
    }
    .car-item.active .car-name,.car-item.active .car-detail{
        display: inline-block !important;
    }
    .car-item.active .car-detail{
        padding-bottom: 82px;
    }
    .car-item.active .car-image{
        opacity: 1;
    }
    .car-item:hover .car-name,.car-item:hover .car-detail,.car-item:hover .select-btn{
        display: inline-block !important;
    }
    .car-item:hover .car-image{
        transform: none;
        opacity: 1;
    }
    .car-item:hover .car-detail{
        padding-bottom: 0;
    }
    .car-name{
        display: none;
        padding: 110px 80px 0px 80px;
    }
    .car-item.active .car-image{
        transform: none;
    }
    .car-image{
        margin-top: -60px;
        transform: translateY(100%);
        opacity: 0.4;
    }
    .car-detail{
        display: none;
        width: 100%;
    }
    .car-item.active::before{
        content: '\F26A';
        font-family: 'bootstrap-icons';
        position: absolute;
        right: 22%;
        font-size: 40px;
        color: #000000;
        z-index: 9;
    }
    .select-btn{
        display: none;
        margin: 14px 0 30px 0;
        border-radius: 2rem;
        background: #000000;
    }
    .info-bar {
        margin-top: 20px !important;
        position: relative;
        bottom: 5%;
    }
    .info-bar .button{
        padding: 46px 0 62px 2%;
    }
</style>