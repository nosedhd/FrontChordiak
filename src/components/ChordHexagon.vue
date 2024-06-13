<template>
  <button @click="playSound">
    <span>{{ number }}</span>
  </button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
let globalStoreScale = store.scale;
let globalStoreTonic = store.tonic;
</script>


<script>
import axios from 'axios'
// import { useNotesStore } from '../stores/notes'
export default {
  props: ['number', 'scale'],
  name: 'ChordHexagon',
  components: {
    // Selectors
  },
  data() {
    return {}
  },
  setup() {
    // const store = useNotesStore()
    // const scaleId = store.scaleId
    // return {
    //   scaleId
    // }
  },
  methods: {
    sendIndex() {
      let globalTonic=globalStoreTonic.valueOf
      let globalScale=globalStoreScale.valueOf
      axios.get(`http://localhost:5173/global-scales/${globalTonic}/${globalScale}`)
        .then((response) => {
          console.log(response.data)
          // console.log('chordIndex:', response.chordIndex)
          // console.log('scaleId:', response.scaleId)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    playSound() {
      const audio = new Audio(`/sounds/${this.number}.wav`)
      audio.play()
      this.sendIndex()
    }
  },
  mounted() {}
}
</script>

<style scoped>
button {
  transform: rotate(45deg);
  color: aliceblue;
  width: 110px;
  height: 110px;
  background-color: white;
  border-radius: 30px;
  padding: 0;
  padding-block: 0px;
  padding-inline: 0px;
  border: 5px solid black;
  cursor: pointer;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
button > span {
  transform: rotate(-90deg);
  display: inline-block;
  width: 95%;
  height: 95%;
  background-color: black;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .chord-hexagon-container button > img {
  width: 100%;
  height: 100%;
} */
</style>
