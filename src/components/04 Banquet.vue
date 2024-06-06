<template>
    <!-- <div class="" >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, voluptatibus assumenda reprehenderit ex tempore placeat autem sed pariatur non quam voluptatem quae quod distinctio totam natus ea animi voluptatum. Corrupti!
    </div> -->

    <!-- <q-btn color="brown-7" icon="map" label="Mapa" href="https://maps.app.goo.gl/rt4QAGwjCL3oEdqh7" target="_blank" style="width: 200px;" /> -->


    <!-- <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      transition-duration="500"
      autoplay
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="~assets/04_1.jpg" />
      <q-carousel-slide :name="2" img-src="~assets/04_2.jpg" />
      <q-carousel-slide :name="3" img-src="~assets/04_3.jpg" />
      <q-carousel-slide :name="4" img-src="~assets/04_4.jpg" />
    </q-carousel> -->



    <div class="row q-gutter-md tarjeta">
      <div class="col-md-6" style="">      
        <div class="column justify-center q-pa-xs">
          <div class="titol">EL BANQUET</div>
          <div class="q-my-md" >
            El convit es celebrarà a La Roureda a las 15h. Hem escollit un lloc que reflecteixi la nostra essència, ubicat en plena natura i envoltat d’arbres i bosc per celebrar aquest dia tan especial amb tots vosaltres.
          </div>

          <!-- <q-btn color="brown-7" icon="map" label="Mapa" href="https://maps.app.goo.gl/rt4QAGwjCL3oEdqh7" target="_blank" style="width: 200px;" /> -->

          
          <iframe width="100%" height="450" style="border:0" Loading="lazy" allowfullscreen map-type="satellite" src="https://www.google.com/maps/embed/v1/place?q=41.678%2C2.373&key=AIzaSyAlSZs5GM4oN0wD4WJKA2aMcEEAfw-y064"></iframe>
          



        </div>
      </div>

      <div class="col">
        
        <div class="column q-gutter-sm" style="">
            <div class="row justify-center q-gutter-sm">
              <img
                class="col-12 col-md-5"
                src="~assets/04_1.jpg"
                style="widthx: 70%;"
              >
              <img
                class="col-12 col-md-5"
                src="~assets/04_2.jpg"
                style="widthx: 50%;"
              >
            </div>

            <div class="row justify-center q-gutter-sm">
              <img
                class="col-12 col-md-5"
                src="~assets/04_3.jpg"
                style="widthx: 100%;"
              >
              <img
              class="col-12 col-md-5"
                src="~assets/04_4.jpg"
                style="widthx: 100%;"
              > 
            </div>  
        </div>
      </div>

    </div>

</template>


<script>
import {defineComponent, ref} from 'vue';


export default defineComponent({
  setup() {
    
    return {

    }
  }
})

</script>

<style>

</style>