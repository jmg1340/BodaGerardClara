<template>
  <div class="row reverse-wrap tarjeta">
    <div class="col-12 col-md-6">
      <img
        class=""
        src="~assets/06_Regal.jpg"
        style="width: 100%;"
      >

    </div>
    <div class="col-12 col-md-6">
      <div class="column q-mx-md q-mb-md text-center">
        <div class="titol">REGAL</div>
        <div class="col">El millor regal és poder gaudir amb vosaltres d’aquest dia tan especial. Si voleu tenir un detall amb nosaltres, ens encantaria que poguéssiu sumar quilòmetres al nostre viatge.</div>
        <div class="col">Gràcies per compartir aquesta nova etapa amb nosaltres!</div>
        <div class="col q-mb-xl">Clara i Gerard</div>
        <div class="col text-center bg-green-9 text-white rounded-borders">ES06 2100 3031 8722 0117 0707</div>
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

<style>

</style>