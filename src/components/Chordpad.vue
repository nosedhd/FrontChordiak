<template>
  <div class="chordpad-container">
    <div class="chordpad-row">
      <ChordHexagon number="1" />
      <ChordHexagon number="2" />
      <ChordHexagon number="3" />
    </div>
    <div class="chordpad-row">
      <ChordHexagon number="1" />
      <ChordHexagon number="2" />
      <ChordHexagon number="3" />
    </div>
  </div>
</template>

<script>
import ChordHexagon from './ChordHexagon.vue'

export default {
  name: 'Chordpad',
  components: {
    ChordHexagon
  },
  data() {
    return {
      // selected: 'A'
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
.chordpad-container {
  height: calc(100% - 20px);
  /* height: 100%; */
  width: calc(80% - 20px);
  padding: 10px;
  /* width: 80%; */
  background-color: blue;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.chordpad-row {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
