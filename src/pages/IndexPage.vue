<template>
  <q-page class="row justify-center">
    <!-- <div class="col-md-8 col-sm-12">  -->
    <div class="col-sm-12"> 
      <!-- <cmpCompteEnrere class="posicioCompteEnrere"/> -->

      <!-- <q-separator id="inici" />
      <cmp01 class="" /> -->

      <!-- <q-separator id="casament" />
      <cmp02 class="" />
      <q-separator id="cerimonia" />
      <cmp03 class="" />
      <q-separator id="banquet" />
      <cmp04 class="" />
      <q-separator id="transport" />
      <cmp05 class="" />
      <q-separator id="regal" />
      <cmp06 class="" /> -->
      


      <div 
        v-for="(tarjeta, idx) in tarjetes" :key="idx"
        :id="tarjeta.etiqueta"
        :class="{'q-my-xl': !['cmp01', 'cmp02'].includes(tarjeta.componente) }"
      >
          <component :is="tarjeta.componente"></component>        
      </div>



    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import cmpCompteEnrere from "../components/compteEnrere.vue"
import cmp01 from '../components/01 Foto.vue'
import cmp02 from '../components/02 Casament.vue'
import cmp03 from '../components/03 Cerimonia.vue'
import cmp04 from '../components/04 Banquet.vue'
import cmp05 from '../components/05 transport.vue'
import cmp06 from '../components/06 Regal.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    cmpCompteEnrere,
    cmp01,
    cmp02,
    cmp03,
    cmp04,
    cmp05,
    cmp06
  },

  setup(){
    const tarjetes = ref([
      { etiqueta: 'historia', titol: "", componente: 'cmp01' },
      { etiqueta: 'casament', titol: "", componente: 'cmp02' },
      { etiqueta: 'cerimonia', titol: 'La cerimonia', componente: 'cmp03' },
      { etiqueta: 'banquet', titol: 'El banquet', componente: 'cmp04' },
      { etiqueta: 'transport', titol: 'El transport', componente: 'cmp05' },
      { etiqueta: 'regal', titol: 'El regal', componente: 'cmp06' },
    ])

    return { tarjetes }
  }
})
</script>


<style>
.posicioCompteEnrere {
  position: fixed;
  top: 15%;
  right: 0px;
  z-index: 1;
}

</style>