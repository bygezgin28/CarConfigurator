<template>

    <div class="container">
        <div class="text-center header-text">
            Seçtiğin araca ait özellikler, <br>konforun ve yaşam stilini belirler.
        </div>
        <div class="row">
            <div class="col-md-4" v-for="(accessory, index) in accessories" :key="index">
                <div class="accessory-item text-center" :class="{active:accessory.active}" @click="selectAccessory(accessory)">
                    <div class="accessory-name">
                        {{ accessory.name }}
                    </div>
                    <div class="accessory-price">
                        {{ accessory.price }} TL
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container info-bar">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid" :src=carImage />
            </div>
            <div class="col-md-6">
                <span class="total">TOTAL</span>
                <span class="car-price">{{ totalPrice }} TL</span> 
            </div>
            <div class="button">
                <router-link :to="{name:'summary'}">SUMMARY</router-link>
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
            carColor:localStorage.getItem('carColor'),
            accessories:[
                {name:"SEAT FREE SYNC PACK EASY JET",price:7500,active:false},
                {name:"Maintenance Program Upgrade",price:300,active:false},
                {name:"tes2",price:5100,active:false},
                {name:"SEAT FREE SYNC PACK EASY JET",price:400,active:false},
                {name:"SEAT FREE SYNC PACK EASY JET",price:900,active:false},
                {name:"SEAT FREE SYNC PACK EASY JET",price:500,active:false},
            ],
            
        }
    },
    methods:{
        selectAccessory(accessory){
            accessory.active=!accessory.active;
            localStorage.setItem('Accessories', JSON.stringify(this.accessories.filter(i=>i.active)));
        },
    },
    computed:{

        filteredAccessories: function () {
            return this.accessories.filter(i=>i.active)
        },
        totalPrice: function () {
            return parseInt(localStorage.getItem('carPrice')) + this.filteredAccessories.reduce((a, b) => a + b.price, 0)
        }

    }
}
</script>

<style scoped>
.accessory-item.active{
    background-color: #000000;
    color:#ffffff;
    border-radius:10px;
}
.accessory-item{
    min-height: 200px;
    margin-bottom: 20px;
    background: #ffffff;
    border-radius:10px;
    cursor: pointer;
    padding-bottom: 29%;
}
.accessory-item.active .accessory-price::before{
    content: '\F26A';
    font-family: 'bootstrap-icons';
    position: absolute;
    left: 44%;
    bottom: -48%;
    font-size: 26px;
    color: #494949;
    z-index: 9;
    border: 0px solid #ffffff;
    border-radius: 100%;
    line-height: 25px;
    background: #ffffff;
}
.header-text{
    margin-bottom: 40px;
    font-size: 14px;
    font-weight: 300;
    margin-top: 10px;
}
.accessory-name{
    padding-top: 20%;
}
.accessory-price{
    padding-top: 10%;
    padding-bottom: 6%;
}
.info-bar{
    margin-top:40px;
}
    

</style>