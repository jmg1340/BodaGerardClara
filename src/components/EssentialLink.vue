<template>
  <q-item v-if="caption !== 'confirmar'"
    clickable
    tag="a"
    :to="link"
    dark
    class=""
  >
    <q-item-section
      v-if="icon"
      avatar
    >
    <!-- <q-icon :name="icon" /> ~assets-->
    <q-icon :name="'img:/'+icon"/>
    <!-- <svg>
      <use :xlink:href="icon"></use>
    </svg> -->
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-grey-10">{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>



  <q-item v-else
    clickable
    tag="a"
    :href="link"
    target="_blank"
    dark
    class=""
  >

    <q-item-section>
      <q-item-label class="text-grey-10">{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>


<style>


</style>