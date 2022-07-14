<template>

    <div class="container summary-view">
        <div class="row">
            <div class="col-md-6 rounded-circle car-item">
                <div class="car-name">
                    <img :src=carBackground class="img-fluid" alt="">
                </div>
                <div class="car-image">
                    <img :src=carImage class="img-fluid" :alt=carName :title=carName>
                </div>
            </div>
            <div class="col-md-6 car-detail">
                <div class="car-row">
                    <span class="car-title">MODEL</span>
                    <span class="car-selected-value">{{carName}}</span>
                </div>
                <div class="car-row">
                    <span class="car-title">COLOR</span>
                    <span class="car-selected-value">{{colorName}}</span>
                </div>
                <div class="car-row">
                    <span class="car-title">ACCESSORIES</span>
                    <span class="car-selected-value" v-for="(accessory, index) in carAccessories" :key="index">{{accessory.name}}</span>
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
                <span class="car-price">{{totalPrice}} TL</span> 
            </div>
            <div class="button">
                <a href='#'>BUY NOW</a>
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
            colorName:localStorage.getItem('colorName'),
            carImage:localStorage.getItem('carImage'),
            carBackground:localStorage.getItem('carBackground'),
            carAccessories:JSON.parse(localStorage.getItem('Accessories')),
        }
    },
    computed:{

        filteredAccessories: function () {
            return this.carAccessories.filter(i=>i.active)
        },
        totalPrice: function () {
            return parseInt(localStorage.getItem('carPrice')) + this.filteredAccessories.reduce((a, b) => a + b.price, 0)
        }

    }

}
</script>

<style scoped>
    .rounded-circle{
        border: 1px solid #dfdfdf;
    }
    .summary-view{
        margin-top: 60px;
    }
    .car-detail{
        padding: 50px;
    }
    .car-name{
        padding-top: 100px;
    }
    .car-image{
        margin-top: -80px;
        margin-bottom: 100px;
    }
    .car-row{
        padding: 10px;
        border-bottom: 1px solid #f2f2f2;
    }
    .car-row:last-child{
        border-bottom: 0px;
    }
    .car-title{
        font-weight: bold;
        font-size: 12px;
        display: block;
    }
    .car-selected-value{
        font-size: 14px;
        color: #a1a1a1;
    }
    .car-selected-value::before{
        content: '\F64D';
        font-family: 'bootstrap-icons';
        position: relative;
        font-size: 10px;
        color: #a1a1a1;
        z-index: 9;
        padding: 0 10px;
    }
    .info-bar{
        margin-top: 40px;
    }


</style>