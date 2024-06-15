<template>
  <div class="chordpad-container">
    <div class="chorpad-group-container">
      <div class="chordpad-row">
        <ChordHexagon scale="scale" number="cosita" />
        <ChordHexagon scale="scale" number="5" />
        <ChordHexagon scale="scale" number="7" />
      </div>
      <div class="chordpad-row">
        <ChordHexagon scale="scale" number="2" />
        <ChordHexagon scale="scale" number="4" />
        <ChordHexagon scale="scale" number="6" />
      </div>
      <div class="chordpad-row">
        <ChordHexagon scale="scale" number="1" />
        <ChordHexagon scale="scale" number="3" />
        <ChordHexagon scale="scale" number="cosita" />
      </div>
    </div>
  </div>
</template>

<script>
import ChordHexagon from './ChordHexagon.vue'

export default {
  name: 'ChordPadComponent',
  props: {
  },
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
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chorpad-group-container {
  transform: rotate(45deg);
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.chordpad-row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
}
</style>
