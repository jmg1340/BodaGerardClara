<template>
  <!-- <q-img src="~assets/022 Casament.svg" ></q-img> -->
  
  

  
  
  
  
  
  
  
  
  
  
  
  <!-- <q-icon name="img:~assets/022 Casament.svg" /> -->

  <!-- <div id="imatge" class="" >
    
    
    <p class="text-teal-8 text-center text-bold q-mt-md q-pa-xl q-ma-xl" style="width: 80%; font-size: 30px">
      <div class="titol">EL CASAMENT</div>
      <div class="q-my-lg" style="">
        Feliços de compartir un dels dies més especials de les nostres vides amb tots vosaltres on celebrarem el nostre compromís i la nostra unió.
      </div>
      <q-btn color="teal-8" size="lg" rounded>Confirmar assistència</q-btn>
    </p>
  </div> -->
    

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
  #imatge{
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
  }

</style>