<template>
  <div class="q-my-md tarjeta" style="background-color: rgb(223,223,223);">

    <div class="text-center q-mt-lg">
      <div class="titol">TRANSPORT</div>
      <div class="q-mx-sm">
        Per tots aquells que ho desitgeu, disposareu d'autobús pel desplaçament. L'adreça tant de recollida com de tornada serà desde carrer l'Hort de la Vila, 65, Barcelona.
      </div>
    </div>
  
    <div class="row q-my-md">
      <div class="col q-pa-md">
        <div class="row justify-center q-mb-md " style="borderx: 1px solid green">
  
            
          <!-- <div class="column justify-center">
            <i class="col"><img src="~assets/05_Anada.jpg" width="30px" /></i>   
            
            <q-card class="col">
              <q-card-section class="text-center">
                <div>ANADA</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</div>
              </q-card-section>
            </q-card>
          </div> -->
  
          <div class="col-12 col-md-3" style="borderx: 1px solid blue">
            <q-img
              class=""
              src="~assets/05 anada.svg"
              width="100%"
              
            />
          </div>
          
          <div class="col-12 col-md-3 q-mx-md" style="borderx: 1px solid blue">
            <q-img
              class="col"
              src="~assets/05 tornada.svg"
              width="100%"
              
            />
          </div>
          
  
  
          <!-- <q-card class="col">
            <q-img
              class="rounded-borders"
              src="~assets/05_Tornada.jpg"
              heigth="100%"
              fit
            />
  
            <q-card-section class="text-center">
              <div>TORNADA</div>
              <div text-center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</div>
            </q-card-section>
          </q-card> -->
  
  
        </div>
  
      </div>
    </div>
    
  </div>
  


</template>


<script>
import {defineComponent, ref} from 'vue';


export default defineComponent({
  
  setup() {
    const text = ref("Clara & Gerard")

    return {
      text
    }
  }
})

</script>




<style scoped>

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

i {
  background: white;
  border-radius: 20px;
  font-size: 25px;
  text-align: center;
  margin-right: 10px;
  border-radius:50%;
  display:inline-block;
  padding:10px;
}

img {
  display:block;
}


</style>