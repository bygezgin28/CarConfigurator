<template>

  <div class="container">
    <div class="py-2 text-center">
      <img class="d-block mx-auto mb-4" src="/seat-logo.png" alt="" width="160">
    </div>
  </div>

  <div class="container">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            MENU
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li class="nav-item">
                <router-link :to="{name:'models'}" class="nav-link">MODELS</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'colors'}" class="nav-link">COLORS</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'accessories'}" class="nav-link">ACCESSORIES</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'summary'}" class="nav-link">SUMMARY</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
    
  <router-view />

</template>

<style>
@import '@/assets/base.css';
.navbar-toggler{
    margin:0 auto;
}
.me-auto{
    margin: 0 auto;
}
.nav-link {
    color: #bbbbbb;
    font-weight: 700;
}
.navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
}
.nav-link:hover, .nav-link:focus {
    color: #000000;
}
.router-link-active{
    color: #000000;
}
.container {
    max-width: 960px;
}
.info-bar{
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 100px;
}
.info-bar img{
    transform: scaleX(-100%);
    border-left: 1px solid #dfdfdf;
    padding-left: 56px;
}
.info-bar .total{
    font-size: 12px;
    font-weight: 900;
}
.info-bar .car-price{
    display: block;
    font-size: 30px;
    font-weight: 100;
    line-height: 30px;
}
.info-bar .button{
    background: #000000;
    position: absolute;
    width: 30%;
    height: -webkit-fill-available;
    right: -7px;
    top: -20px;
    padding: 46px 0 65px 2%;
    border-radius: 0 10px 10px 0;
}
.info-bar .button a{
    text-decoration: none;
    color: white;
    font-weight: 900;
    letter-spacing: 5px;
}
.info-bar .button::before{
    content: '\F138';
    font-family: 'bootstrap-icons';
    position: absolute;
    right: 8%;
    top: 27%;
    font-size: 35px;
    color: #ffffff;
    z-index: 9;
}
</style>
