<template>
  <main style="width: 100%; height: 100%">
    <Selectors />
    <div class="body-container">
      <SideBar />
      <Chordpad />
    </div>
  </main>
</template>

<script>
import Chordpad from '@/components/Chordpad.vue'
import SideBar from '@/components/SideBar.vue'
import Selectors from '../components/Selectors.vue'

export default {
  name: 'HomeView',
  components: {
    Selectors,
    SideBar,
    Chordpad
  },
  data() {
    return {
      selected: 'A'
    }
  },
  methods: {
    // async fetchData() {
    //   // Aquí puedes usar 'await'
    // }
  },
  mounted() {
    // this.fetchData()
  }
}
</script>

<style>
.body-container {
  width: 100%;
  height: 90vh;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  /* margin: 0 auto; */
}
</style>
