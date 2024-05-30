<template>
  <!-- <q-img src="~assets/022 Casament.svg" ></q-img> -->
  
  <!-- <q-icon name="img:~assets/022 Casament.svg" /> -->

  
  <div class="tarjeta bg-grey-5">

    <!-- <div id="imatge" class="pare" >
      <div class="column justify-start text-center fill" style="width: 100%; height: 100%">
        <div class="col-auto titol text-black" >EL CASAMENT</div>
        <div class="col-auto " >Feliços de compartir un dels dies més especials de les nostres vides amb tots vosaltres on celebrarem el nostre compromís i la nostra unió.</div>
        <div class="col" >
          Video
        </div>
      </div>
    </div> -->

    <q-img
        src="~assets/02Casament_4.png"
        spinner-color="white"
        style="width: 100%;"
        class=""
      >
        <div class="column justify-center text-center" style="width: 100%; height: 100%; visibility: hidden;">
          <div class="col-auto titol q-mt-xl" style="visibility: visible;">EL CASAMENT<br/>
          <span class="col text-verd "  style="visibility: visible;">Feliços de compartir un dels dies més especials de les nostres vides amb tots vosaltres on celebrarem el nostre compromís i la nostra unió.</span>
          <!-- <div class="col"  style="visibility: visible;"> -->
          </div>
        </div>
        
      </q-img>
      
      <q-video
        class="q-mx-xl q-mb-xl"
        :ratio="16/9"
        src="https://www.youtube.com/embed/UsplDbcEcKQ?rel=0"
      />


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

<style scoped>

  .text-verd {
    color: #687756 !important;
  }; 
  .bg-verd {
    background: #687756 !important;
  };









  /* #imatge{
    display: grid;
    place-items: center;
    background-image: url('../assets/02elCasament.jpg');
    background-size: cover; 
    height: 100vh;
    opacity: .2;
    position: relative;
    
  };


  #imatge::before {
    background-image: url('../assets/02elCasament.jpg');
    background-size: cover; 
    content: "";
    position: absolute;
    inset: 0;
  }

  p{
    isolation: isolate;    
  } */

</style>