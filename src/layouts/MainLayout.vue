<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated class=" menuFont text-bold"> -->
    <q-header elevated class=" bg-blue-grey-2 menuFont">
       
      <div class="q-px-md q-ma-sm"> 
        <div class="gt-sm row justify-around items-center">
          <img
            src="~assets/logoCG.svg"
            style="width: 80px;opacity: 1;"
          >
<!-- 
          <a href="#/#historia" class="col text-center text-bold">HISTÒRIA</a>
          <a href="#/#cerimonia" class="col text-center text-bold">CERIMÒNIA</a>
          <a href="#/#banquet" class="col text-center text-bold">BANQUET</a>
          <a href="#/#transport" class="col text-center text-bold">TRANSPORT</a>
          <a href="#/#regal" class="col text-center text-bold">REGAL</a>
          <a href="https://google.es" target="_blank" class="col q-pa-sm q-ma-md text-center text-bold" style="border: 1px solid black">CONFIRMA ASSISTÈNCIA</a>
 -->


          <q-btn flat type="a" to="#historia" class="col text-center text-bold " >HISTÒRIA</q-btn>
          <q-btn flat type="a" to="#cerimonia" class="col text-center text-bold ">CERIMÒNIA</q-btn>
          <!-- <q-btn flat type="a" to="#banquet" class="col text-center text-bold " >BANQUET</q-btn> -->
          <q-btn flat type="a" to="#banquet" class="col text-center text-bold " label="BANQUET" />
          <q-btn flat type="a" to="#transport" class="col text-center text-bold " >TRANSPORT</q-btn>
          <q-btn flat type="a" to="#regal" class="col text-center text-bold " >REGAL</q-btn>
          <q-btn class="q-pa-md text-bold " color="grey-10" outline href="https://linktr.ee/claragerard" target="_blank">CONFIRMA ASSISTÈNCIA</q-btn>

        </div>
      </div>  
        <!-- <div>Quasar v{{ $q.version }}</div> -->
        
      <div class="row justify-between q-px-md q-ma-sm lt-md">
        <img
        class=""
          src="~assets/logoCG.svg"
          style="width: 80px;opacity: 1;"
        >

        <q-btn
        class=""
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
        />
      </div>

         
    </q-header>
    
    
    <q-drawer     
      v-model="leftDrawerOpen"
      bordered
      side="right"
      width="20px"

    >
      <q-list bordered separator class="menuFont">
        <q-item-label
          header
        >
          Apartats
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />



      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted, watch } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  // {
  //   title: 'Inici',
  //   caption: '',
  //   icon: 'school',
  //   link: '#inici'
  // },
  {
    title: 'Història',
    caption: '',
    icon: './menuParella.svg#svg1',
    link: '#historia'
  },
  {
    title: 'La cerimònia',
    caption: '',
    icon: './menuAnells.svg#svg1',
    link: '#cerimonia'
  },
  {
    title: 'El banquet',
    caption: '',
    icon: './menuPlat.svg#svg1',
    link: '#banquet'
  },
  {
    title: 'El transport',
    caption: '',
    icon: './menuAutocar.svg#svg1',
    link: '#transport'
  },
  {
    title: 'El regal',
    caption: '',
    icon: './menuRegal.svg#svg1',
    link: '#regal'
  },
  {
    title: 'CONFIRMAR ASSISTÈNCIA',
    caption: 'confirmar',
    icon: './menuDit.svg#svg1',
    link: 'https://linktr.ee/claragerard'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    let interruptor = ref(false)

    // onMounted( () => {
    //   setInterval(() => { interruptor.value = !interruptor.value }, 1000);
    // })

    // onUnmounted( () => { clearInterval() })

    watch( interruptor, (newV, old) => { console.log( "interruptor:", newV)})

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      // interruptor
    }
  }
})
</script>



<style >
/* 
  a, a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: grey
  }
 */




</style>