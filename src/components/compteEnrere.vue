<template>
  <div class="compteEnrere q-gutter-y-xs text-white text-bold text-right ">
    <q-card class="bg-teal-10  q-pa-sm">
      {{ mesos }} {{  (mesos == 0) ? ' mes' : ' mesos' }}
    </q-card>
    <q-card class="bg-teal-10  q-pa-sm">
      {{ dies }} {{  (dies == 1) ? ' dia' : ' dies' }}
    </q-card>
    <q-card class="bg-grey-9  q-pa-sm">
      {{ hores }} {{  (hores == 1) ? ' hora' : ' hores' }}
    </q-card>
    <q-card class="bg-grey-8  q-pa-sm">
      {{ minuts }} {{  (minuts == 1) ? ' minut' : ' minuts' }}
    </q-card>

  </div>
</template>


<script>
import {defineComponent, ref} from 'vue';
import datetimeDifference from "datetime-difference";

export default defineComponent({
  
  setup() {

    const dataActual = new Date();
    const diaBoda = new Date(2024,9,19,0,1,0)

    const resultTemps = datetimeDifference(dataActual, diaBoda);
    const mesos = ref(resultTemps.months);
    const dies = ref(resultTemps.days);
    const hores = ref(resultTemps.hours);
    const minuts = ref(resultTemps.minutes);



    return {
      mesos, dies, hores, minuts
    }
  }
})

</script>

<style>
/* 
  .box {
    width2: 75px;
    height2: 120px;
    opacity: 1;
    background: #0057e3;
  }
 */

</style>